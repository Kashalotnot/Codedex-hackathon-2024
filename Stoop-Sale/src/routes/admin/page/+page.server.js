import { onAuthStateChanged, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { redirect } from '@sveltejs/kit';
import { auth } from '$lib/firebase/firebase.js';
import { db } from "$lib/firebase/firebase";
import { collection, getDocs, where, query, addDoc, doc, setDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '$lib/firebase/firebase.js';

export async function load({ cookies }) {
    try {
        const user = await new Promise((resolve, reject) => {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                unsubscribe();
                resolve(currentUser);
            }, (error) => {
                unsubscribe(); 
                reject(error);
            });
        });

        if (!user) {
            throw redirect(302, '/admin/login');
        }

        const serializableUser = {
            uid: user.uid,
            email: user.email,
        }

        let emails = [];
  
        try {
          const userEmailsCollection = collection(db, 'user-emails');
          const querySnapshot = await getDocs(userEmailsCollection);
      
          querySnapshot.forEach((doc) => {
            emails.push(doc.data());
          });
      
        } catch (error) {
          console.error('Error fetching emails:', error);
        }

        return {
            user: serializableUser,
            emails: emails
        };
    } catch (error) {
        console.error('Error fetching user:', error);
        throw redirect(302, '/admin/login');
    }
}

export const actions = {
    logout: async () => {
        try {
            await signOut(auth);
            return redirect(302, '/admin/login');
        } catch (error) {
            console.error('Error signing out:', error);
            throw error;
        }
    },

    addAdmin: async ({ request }) => {
        try {
            const data = await request.formData();
            console.log('Data:', data);

            const email  = data.get('email');
            const password  = data.get('password');

            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                console.log('User:', user);
            } catch (error) {
                console.error('Error creating user:', error);
            }

            console.log('Email:', email);
            console.log('Password:', password);



        } catch (error) {
            console.error('Error adding admin:', error);
            throw error;
        }
    },

    addStoopSale: async ({ request }) => {
        try {
            const data = await request.formData();
            console.log('Data:', data);

            const name = data.get('name');
            if (name.length > 8) {
                console.log('Name is too long');
                return;
            }
            const place = data.get('place');
            const date = data.get('date');
            const time = data.get('time');

            const dateTimeString = `${date}T${time}`;
            const dateTime = new Date(dateTimeString);
            const timestamp = Timestamp.fromDate(dateTime);

            const stoopSaleCollection = collection(db, 'Stoop-Sale'); 
            const q = query(stoopSaleCollection, where('date', '==', date));
            const querySnapshot = await getDocs(q);

            let stoopSaleDocRef;
            if (!querySnapshot.empty) {
                stoopSaleDocRef = querySnapshot.docs[0].ref;
                console.log('Exists sale with same date');
                return;
            } 

            stoopSaleDocRef = doc(stoopSaleCollection);
        
            await setDoc(stoopSaleDocRef, { Name: name, Place: place, Date: timestamp }, { merge: true });

            const itemsCollection = collection(stoopSaleDocRef, 'items');
        } catch (error) {
            console.error('Error adding stoop sale:', error);
        }
    },
    addItem: async ({ request }) => {
        try {
            const data = await request.formData();
            console.log('Data:', data);
            const itemCollection = data.get('collection');
            const itemName = data.get('itemImage').name;

            const stoopSaleCollection = collection(db, 'Stoop-Sale'); 

            const storageRef = ref(storage, itemName);
            await uploadBytes(storageRef, data.get('itemImage'));
            const imageUrl = await getDownloadURL(storageRef);

            const q = query(stoopSaleCollection, where('Name', '==', itemCollection));
            const querySnapshot = await getDocs(q);

            let itemDocRef;
        if (!querySnapshot.empty) {
            itemDocRef= querySnapshot.docs[0].ref;
            const itemsCollection = collection(itemDocRef, 'Items');
            
            await addDoc(itemsCollection, {
                name: data.get('itemName'),
                image: imageUrl,
            });

            console.log('Document exists:', itemDocRef);
        } else {
            console.log('No document found');
        }

        } catch (error) {
            console.error('Error adding item:', error);
        }
    }
    
};