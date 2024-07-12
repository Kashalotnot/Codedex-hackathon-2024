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
            description: 'Super bebra',
            image: '/src/lib/assets/Items/jacket.png'
        },
        {
            name: "Bebra",
            description: 'Prost Norm bebra',
            image: '/src/lib/assets/Items/jewellery.png'
        },
        {
            name: "bebra",
            description: 'Super bebra',
            image: '/src/lib/assets/Items/sunglasses.png'
        },
        {
            name: "Bebra",
            description: 'Prost Norm bebra',
            image: '/src/lib/assets/Items/dress.png'
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

<div class="min-h-dvh bg-noise3 w-screen bg-cream bg-blend-soft-light overflow-x-hidden">
    <div class="space-y-2">
        <div class="relative h-[400px]">

        <img class="md:hidden w-full h-[400px] mt-8 " src="/src/lib/assets/mobile_stairs.png">
        <div class="w-full h-full hidden md:inline">
     <h1 class="absolute whitespace-break-spaces font-alphabet text-9xl top-[-40px] left-36 lg:left-48 xl:left-64 pb-3 text-secondary-500">
  {data.stoopSale.Name.split(' ')[0]}
</h1>
<h1 class="absolute whitespace-break-spaces font-alphabet text-9xl top-24 left-64 md:left-80 lg:left-96 xl:left-[35rem] pb-3 text-secondary-500">
  {data.stoopSale.Name.split(' ')[1]}
</h1>
<h1 class="absolute whitespace-break-spaces font-alphabet text-9xl top-56 right-64 lg:right-80 xl:right-96 pb-3 text-secondary-500">
  {data.stoopSale.Name.split(' ')[2]}
</h1>
</div>
<img class="hidden md:block w-full h-[400px] mt-8" src="/src/lib/assets/stairs_desktop.png">

<img class="absolute hidden xxs:inline w-[6rem] xs:w-[8rem] top-36 right-40 xl:right-56 hover:animate-tilt-n-move-shaking" src="/src/lib/assets/Items/dress.png">

<img class="absolute block w-[4rem] xs:w-[6rem] bottom-0 left-10 xl:left-20 hover:animate-tilt-n-move-shaking" src="/src/lib/assets/Items/jewellery.png">

<img class="absolute block w-[8rem] xs:w-[10rem] top-12 right-10 xl:right-24 hover:animate-tilt-n-move-shaking" src="/src/lib/assets/Items/bag.png">

<img class="absolute block w-[8rem] xs:w-[10rem] lg:w-[15rem] lg:top-[-1rem] top-0 left-10 xl:left-24 hover:animate-tilt-n-move-shaking" src="/src/lib/assets/Items/jacket.png">

<img class="absolute block w-[8rem] xs:w-[10rem] bottom-0 right-10 xl:right-24 hover:animate-tilt-n-move-shaking" src="/src/lib/assets/Items/hat_1.png">

<img class="absolute block w-[8rem] xs:w-[10rem] top-0 right-20 xl:right-36 hover:animate-tilt-n-move-shaking" src="/src/lib/assets/Items/sunglasses.png">
<img class="absolute hidden lg:block top-[-1rem] right-80 w-[7rem]  hover:animate-tilt-n-move-shaking" src="/src/lib/assets/Items/boots.png">


<img class="absolute hidden md:block w-[8rem] xs:w-[10rem] bottom-0 left-52 lg:left-56 xl:left-64 hover:animate-tilt-n-move-shaking" src="/src/lib/assets/Items/sweater.png">

<img class="absolute block w-[8rem] xs:w-[10rem] bottom-36 left-10 lg:left-36 xl:left-48 hover:animate-tilt-n-move-shaking" src="/src/lib/assets/Items/hat_2.png">
<img class="absolute hidden xl:block  top-[-1rem] right-[38rem] w-[7rem]  hover:animate-tilt-n-move-shaking" src="/src/lib/assets/Items/braclet.png">
<img class="absolute hidden xl:block  bottom-0 left-[36rem] w-[7rem]   hover:animate-tilt-n-move-shaking" src="/src/lib/assets/Items/funny_shoes.png">


    </div>
    </div>
    <div class="bg-cream w-full z-30 block md:hidden">
        <div class="flex justify-center items-center pb-3">
            <h1 class=" mt-5 whitespace-break-spaces font-alphabet text-4xl xs:text-5xl sm:text-6xl pb-3 text-secondary-500">{data.stoopSale.Name}</h1>
        </div>
    </div>
    <div class="bg-sunflower w-full bg-noise3 " id="about-section">

        <div class="relative w-full h-full flex justify-center items-center bg-sunflower">
            <div class="absolute inset-0 bg-noise3 opacity-60"></div>
            <h1 class="relative font-alphabet text-9xl mb-3 text-white">ABOUT</h1>
          </div>
          
    </div>
    <div class="relative w-full h-screen bg-charcoal bg-blend-overlay flex justify-center items-center z-20" id="items-section">
        <div class="absolute inset-0 bg-noise3 opacity-30"></div>
        <div class="relative w-[90%] h-[90%] block md:hidden">
          <CardSwipe items={bebra} />
        
      </div>
        
        <div class="w-full h-full absolute flex justify-center items-center hidden md:block">
            <div class="mt-8">
            <h1 class="text-5xl font-alphabet text-sunflower text-center"> We love our items so much!</h1>
            <h3 class="text-2xl text-cream text-center">But maybe you will love them more</h3>
        </div>
            <div class="flex w-full h-[80%] justify-center items-center">
            <CardStack items={bebra}/>
        </div>
        </div>
    </div>
    <div class="flex flex-col md:flex-row md:justify-center items-center h-[25rem]">
        <div class="flex justify-center items-center bg-sunflower w-full h-full z-20 border-[3px] border-r-[2px] border-b-[2px] border-charcoal">
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


</div>
