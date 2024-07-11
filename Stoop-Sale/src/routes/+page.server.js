import { getDocs, collection, addDoc } from 'firebase/firestore'
import { db, storage } from '$lib/firebase/firebase'
import { ref, getDownloadURL } from 'firebase/storage'

async function updateItemsWithUrls(items) {
    const promises = items.map(async (item) => {
        let storageRef = ref(storage, item.image); 
        let url = await getDownloadURL(storageRef);
        item['image'] = url;
    });

    await Promise.all(promises);
}

export async function load() {
    let stoopSale;
    let items = [];

    try {
        let documentId;

        const stoopSaleCollection = collection(db, 'Stoop-Sale'); 
        const querySnapshot = await getDocs(stoopSaleCollection);

        querySnapshot.forEach((doc) => {
            if (!stoopSale || (stoopSale && doc.data().Date > new Date()  &&stoopSale.Date < doc.data().Date)) {
                documentId = doc.id;
                stoopSale = doc.data();
            }
        });
        stoopSale.Date = stoopSale.Date.toDate();

        const itemsCollection = collection(db, 'Stoop-Sale', documentId, 'Items');
        const itemsQuerySnapshot = await getDocs(itemsCollection);

        itemsQuerySnapshot.forEach((doc) => {
            items.push(doc.data()); 
        }); 

        await updateItemsWithUrls(items);

        return {
            stoopSale: stoopSale,
            items: items
        };
      

    } catch (error) {
        console.error('Error fetching stoop sale:', error);
    }
   
}

export const actions = {
    addEmail:  async ({ request }) => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        let data = await request.formData();
        let email = data.get('email');

        if (!emailRegex.test(email)) {
            console.error('Invalid email:', email);
            return;
        }

        try {
            const emailsCollection = collection(db, 'user-emails');
            await addDoc(emailsCollection, { email: email });
        } catch (error) {
            console.error('Error adding email:', error);
        }
    }
};