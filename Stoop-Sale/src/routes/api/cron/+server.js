import { store } from "$lib/store/store";

export default function handler(req, res) {
    if (req.method === 'GET') {
        console.log('Scheduled GET request');
        res.status(200).send('Hello, world!');
    } else {
        res.status(405).send('Method Not Allowed');
    }
}