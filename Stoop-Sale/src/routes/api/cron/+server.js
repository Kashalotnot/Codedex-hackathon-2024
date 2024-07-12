import { store } from "$lib/store/store";

export default function handler(req, res) {
    res.status(200).end('Hello Cron!');
}