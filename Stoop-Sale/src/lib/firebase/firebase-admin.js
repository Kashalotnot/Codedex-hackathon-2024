import { FIREBASE_ADMIN_KEY } from '$env/static/private';
import admin from "firebase-admin"

var firebaseAdmin;
var firebaseAdminAuth;
/**
* create firebase admin singleton
*/
function getFirebaseAdmin() {
    if(!firebaseAdmin){
        if(admin.apps.length == 0){
            firebaseAdmin = admin.initializeApp({
                credential: admin.credential.cert(JSON.parse(FIREBASE_ADMIN_KEY))
            })
        }
        else{
            firebaseAdmin = admin.apps[0];
        }
           
    }

    return firebaseAdmin;
}
/**
* create firebase admin auth singleton
*/
function getFirebaseAdminAuth() {
    const currentAdmin = getFirebaseAdmin();
    if(!firebaseAdminAuth){
        firebaseAdminAuth = currentAdmin.auth();
    }
    return firebaseAdminAuth;
}

export { getFirebaseAdmin, getFirebaseAdminAuth };