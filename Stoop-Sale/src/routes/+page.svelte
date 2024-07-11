<script>
    import { app } from '$lib/firebase/firebase.js';
    import Map from '$lib/components/Map/map.svelte';
    import CardSwipe from '$lib/components/CardSwipe/cardSwipe.svelte';
    import CardStack from '$lib/components/CardStack/cardStack.svelte';

    let bebra = [
        {
            name: "bebra",
            description: 'Super bebra'
        },
        {
            name: "Bebra",
            description: 'Prost Norm bebra'
        },
        {
            name: "bebra",
            description: 'Super bebra'
        },
        {
            name: "Bebra",
            description: 'Prost Norm bebra'
        }
    ];
</script>

<div class="min-h-dvh bg-noise w-screen bg-surface-500 bg-blend-soft-light overflow-x-hidden">
    <div class="flex items-center justify-center flex-col space-y-2">
        <img class="" src="/src/lib/assets/staircase.png">
        <img class="h-full" src="/src/lib/assets/staircase.png">
        <img class="h-full" src="/src/lib/assets/staircase.png">
    </div>
    <div class="bg-primary-500 w-full z-30">
        <div class="flex justify-center items-center">
            <h1 class="font-alphabet text-9xl mb-3 text-secondary-500">Current Sale</h1>
        </div>
    </div>
    <div class="w-full h-dvh bg-tertiary-500 flex justify-center items-center z-20">
        <div class="w-[90%] h-[90%] block md:hidden">
            <CardSwipe items={bebra} />
        </div>
        <div class="w-full h-full absolute flex justify-center items-center hidden md:block">
            <div class="flex w-full h-full justify-center items-center">
            <CardStack items={bebra}/>
        </div>
        </div>
    </div>
    <div class="relative bg-primary-500 w-full z-20">
        <div class="flex justify-center items-center">
            <h1 class="font-alphabet text-9xl mb-3 text-secondary-500">DATE</h1>
        </div>
    </div>
    <div class="relative bg-secondary-500 w-full z-20">
        <div class="flex justify-center items-center">
            <div class="bg-secondary-500 border-[3px] border-primary-500 w-[90%] h-60 rounded-lg my-3">
                <Map />
            </div>
        </div>
    </div>
    <div class="bg-primary-500 w-full z-20">
        <div class="flex justify-center items-center">
            <h1 class="font-alphabet text-9xl mb-3 text-secondary-500">Email</h1>
        </div>
    </div>
    <div class="bg-primary-500 w-full z-20">
        <div class="flex justify-center items-center">
            <h1 class="font-alphabet text-9xl mb-3 text-secondary-500">ABOUT</h1>
        </div>
    </div>
</div>