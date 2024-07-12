<script>
    import { app } from '$lib/firebase/firebase.js';
    import { enhance } from '$app/forms';
    export let data;
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
  
    let swipe = function(direction) {
      if (direction === 'left') {
          // Handle swipe left
      } else if (direction === 'right') {
          // Handle swipe right
      } else {
          // Handle no direction or other cases
      }
    };
  
    const date = new Date(data.stoopSale.Date);

    const year = date.getFullYear();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);


    const formattedDate = `${day} ${month}`;
    const formattedHours = `${hours}:${minutes}`;
</script>

<div class="min-h-dvh bg-noise w-screen bg-cream bg-blend-soft-light overflow-x-hidden">
    <div class="space-y-2">
        <div class="relative h-[400px]">

        <img class="md:hidden w-full h-[400px] " src="/src/lib/assets/test_mobile2.png">

        <img class="absolute block md:hidden w-[10rem] h-[10rem] top-12 right-10" src="/src/lib/assets/bag.png">
    </div>
    </div>
    <div class="bg-cream w-full z-30">
        <div class="flex justify-center items-center pb-3">
            <h1 class="whitespace-nowrap font-alphabet text-9xl pb-3 text-secondary-500">{data.stoopSale.Name}</h1>
        </div>
    </div>
    <div class="w-full h-dvh bg-charcoal flex justify-center items-center z-20" id="items-section">
        <div class="w-[90%] h-[90%] block md:hidden">
            <CardSwipe items={bebra} />
        </div>
        <div class="w-full h-full absolute flex justify-center items-center hidden md:block">
            <div class="flex w-full h-full justify-center items-center">
            <CardStack items={bebra}/>
        </div>
        </div>
    </div>
    <div class="flex flex-col md:flex-row md:justify-center items-center h-[25rem]">
        <div class="flex justify-center items-center bg-sunflower w-full h-full z-20 border-[3px] border-charcoal">
            <div class="flex flex-col justify-center items-center p-3">
                <h1 class="font-alphabet text-7xl mb-3 text-secondary-500">{formattedDate}</h1>
                <h1 class="font-alphabet text-5xl mb-3 text-secondary-500">{formattedHours}</h1>
            </div>
        </div>
    
        <div class="flex bg-cream w-full h-full z-20 border-[2px] border-t-[3px] border-charcoal" id="where-section">
            <div class="flex justify-center items-center w-full h-full">
                <div class="bg-secondary-500 border-[3px] border-primary-500 w-[90%] h-60 rounded-lg my-3">
                    <Map />
                </div>
            </div>
        </div>
    </div>
    <div class="bg-cream w-full flex justify-center items-center p-4 border-[2px] border-charcoal">
        <div class="card p-4 variant-filled w-5/6 shadow-2xl text-center md:w-1/2 xl:w-1/3">
            <form method="POST" action="?/addEmail" use:enhance>
                <label class="label block my-4">
                    <span class="block">Let your email for invitation:</span>
                    <input class="bg-gray-100 border border-gray-700 text-gray-800 placeholder-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " type="email" title="Email" placeholder="Email" name="email" required>     
                </label>
                <button class="btn variant-filled-secondary p-2 w-1/2 border-black">Send</button>
            </form>
        </div>
    </div>

    <div class="bg-primary-500 w-full " id="about-section">

        <div class="flex justify-center items-center">
            <h1 class="font-alphabet text-9xl mb-3 text-secondary-500">ABOUT</h1>
        </div>
    </div>
</div>
