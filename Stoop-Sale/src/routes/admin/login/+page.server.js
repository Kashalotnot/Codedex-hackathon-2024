import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "$lib/firebase/firebase.js";
import { redirect } from "@sveltejs/kit";

export const actions ={
    login: async ({ request, cookies }) => {
        let data = await request.formData();
        let email = data.get('email');
        let password = data.get('password');
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error('Error signing in:', error);
        }
        throw redirect(303, '/admin/page');
    }
}