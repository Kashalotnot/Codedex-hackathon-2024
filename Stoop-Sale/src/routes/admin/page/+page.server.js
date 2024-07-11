import { onAuthStateChanged, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { redirect } from '@sveltejs/kit';
import { auth } from '$lib/firebase/firebase.js';
import { db } from "$lib/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

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
    
          console.log(emails);
      
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
            // Handle error gracefully, potentially redirect to an error page
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
    }
};