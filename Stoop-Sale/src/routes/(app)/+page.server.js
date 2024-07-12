import { getDocs, collection, addDoc } from 'firebase/firestore'
import { db, storage } from '$lib/firebase/firebase'
import { ref, getDownloadURL } from 'firebase/storage'
import { store } from '$lib/store/store'

async function updateItemsWithUrls(items) {
    const promises = items.map(async (item) => {
        let storageRef = ref(storage, item.image); 
        let url = await getDownloadURL(storageRef);
        item['image'] = url;
    });

    await Promise.all(promises);
}

async function getImageUrl(name) {
    let storageRef = ref(storage, name); 
    return await getDownloadURL(storageRef);
}

export async function load() {
    let stoopSale;
    let items = [];

    let images = [];
    let image;
    let name;

    name = 'bag.png';
    image = await getImageUrl(name);
    images.push(image);
    
    name = 'Stars.png';
    images.push(await getImageUrl(name));

    name = 'about.png';
    images.push(await getImageUrl(name));

    name = 'boots.png';
    images.push(await getImageUrl(name));

    name = 'braclet.png';
    images.push(await getImageUrl(name));

    name = 'dress.png';
    images.push(await getImageUrl(name));

    name = 'funny_shoes.png';
    images.push(await getImageUrl(name));

    name = 'hat_1.png';
    images.push(await getImageUrl(name));

    name = 'hat_2.png';
    images.push(await getImageUrl(name));

    name = 'image.png';
    images.push(await getImageUrl(name));

    name = 'jacket.png';
    images.push(await getImageUrl(name));

    name = 'jewellery.png';
    images.push(await getImageUrl(name));

    name = 'mobile_stairs.png';
    images.push(await getImageUrl(name));

    name = 'stairs_desktop.png';
    images.push(await getImageUrl(name));

    name = 'sunglasses.png';
    images.push(await getImageUrl(name));

    name = 'sweater.png';
    images.push(await getImageUrl(name));

    name = 'tets.png';
    images.push(await getImageUrl(name));



    try {
        let documentId;

        const stoopSaleCollection = collection(db, 'Stoop-Sale'); 
        const querySnapshot = await getDocs(stoopSaleCollection);

        querySnapshot.forEach((doc) => {
            console.log(doc.data().Date);
            if (!stoopSale || (stoopSale && doc.data().Date < new Date()  && stoopSale.Date > doc.data().Date)) {
                documentId = doc.id;
                stoopSale = doc.data();
            }
        });
        stoopSale.Date = stoopSale.Date.toDate();
        store.set({ date: stoopSale.Date  });

        const itemsCollection = collection(db, 'Stoop-Sale', documentId, 'Items');
        const itemsQuerySnapshot = await getDocs(itemsCollection);

        itemsQuerySnapshot.forEach((doc) => {
            items.push(doc.data()); 
        }); 

        await updateItemsWithUrls(items);

        return {
            stoopSale: stoopSale,
            items: items,
            images: images
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