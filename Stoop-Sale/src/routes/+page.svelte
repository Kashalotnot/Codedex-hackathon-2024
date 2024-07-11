<script>
    import { app } from '$lib/firebase/firebase.js';
    export let data;
    console.log(data);

    const date = new Date(data.stoopSale.Date);

    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Adding 1 because months are zero-indexed
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
</script>

<div class=" min-h-dvh bg-noise w-screen bg-surface-500 bg-blend-soft-light overflow-x-hidden">
    <div class="flex items-center justify-center flex-col space-y-2 ">
        <img class="" src="/src/lib/assets/staircase.png">
        <img class=" h-full" src="/src/lib/assets/staircase.png">
        <img class=" h-full" src="/src/lib/assets/staircase.png">
    </div>
    <div class="bg-primary-500 w-full ">
        <div class="flex justify-center items-center">
        <h1 class="font-alphabet text-9xl mb-3 text-secondary-500">{data.stoopSale.Name}</h1>
    </div>
    </div>
    <div class="w-full h-dvh bg-secondary-500" id="items-section">SCROLL!!!</div>
    <div class="bg-primary-500 w-full ">
        <div class="flex justify-center items-center">
        <h1 class="font-alphabet text-xl mb-3 text-secondary-500">{formattedDate}</h1>
        </div>
    </div>
    <div class="bg-primary-500 w-full " id="where-section">
        <div class="flex justify-center items-center">
        <h1 class="font-alphabet text-9xl mb-3 text-secondary-500">OMG WHERE?</h1>
        </div>
    </div>
    <div class="bg-primary-500 w-full ">
        <div class="flex justify-center items-center">
        <h1 class="font-alphabet text-9xl mb-3 text-secondary-500">Email Form</h1>
        </div>
    </div>
    <div class="bg-primary-500 w-full " id="about-section">
        <div class="flex justify-center items-center">
        <h1 class="font-alphabet text-9xl mb-3 text-secondary-500">ABOUT</h1>
        </div>
    </div>


</div>

