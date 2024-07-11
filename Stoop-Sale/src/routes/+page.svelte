<script>
    import { app } from '$lib/firebase/firebase.js';
    import Map from '$lib/components/Map/map.svelte';
      import { CardSwiper } from '$lib/components/CardSwipe/index.ts'
      let swipe = function(direction) {
    if (direction === 'left') {
        // Handle swipe left
    } else if (direction === 'right') {
        // Handle swipe right
    } else {
        // Handle no direction or other cases
    }
};

      let bebra = [
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

<div class=" min-h-dvh bg-noise w-screen bg-surface-500 bg-blend-soft-light overflow-x-hidden">
    <div class="flex items-center justify-center flex-col space-y-2 ">
        <img class="" src="/src/lib/assets/staircase.png">
        <img class=" h-full" src="/src/lib/assets/staircase.png">
        <img class=" h-full" src="/src/lib/assets/staircase.png">
    </div>
    <div class="bg-primary-500 w-full ">
        <div class="flex justify-center items-center">
        <h1 class="font-alphabet text-9xl mb-3 text-secondary-500">Current Sale</h1>
    </div>
    </div>
    <div class="w-full h-dvh bg-tertiary-500 flex justify-center items-center"> <div class="w-[90%] h-[90%]"> <CardSwiper
        bind:swipe
        cardData={() => {
            let i = Math.floor(Math.random() * bebra.length);
            let j = Math.floor(Math.random() * bebra.length);
            return {
                title: bebra[i].name,
                description: bebra[j].description,
                image: `https://picsum.photos/1080/`
            };
        }}
        on:swiped={(e) => {
            console.log(e.detail);
        }}

     
    /></div></div>
    <div class="bg-primary-500 w-full ">
        <div class="flex justify-center items-center">
        <h1 class="font-alphabet text-9xl mb-3 text-secondary-500">DATE</h1>
        </div>
    </div>
    <div class="bg-secondary-500  w-full ">
        <div class="flex justify-center items-center">
        <div class="bg-secondary-500  border-[3px] border-primary-500 w-[90%] h-60 rounded-lg my-3">
            <Map />
        </div>
        </div>
    </div>
    <div class="bg-primary-500 w-full ">
        <div class="flex justify-center items-center">
        <h1 class="font-alphabet text-9xl mb-3 text-secondary-500">Email</h1>
        </div>
    </div>
    <div class="bg-primary-500 w-full ">
        <div class="flex justify-center items-center">
        <h1 class="font-alphabet text-9xl mb-3 text-secondary-500">ABOUT</h1>
        </div>
    </div>


</div>

