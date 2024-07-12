import { store } from "$lib/store/store";

export function GET(req) {
    return new Response('Hello, world!');
}

export function POST(req) {
    let date = store.date
    console.log(date)
}