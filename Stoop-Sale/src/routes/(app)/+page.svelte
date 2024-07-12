<script>
    import { app } from '$lib/firebase/firebase.js';
    import { enhance } from '$app/forms';
    export let data;
    import Map from '$lib/components/Map/map.svelte';
    import CardSwipe from '$lib/components/CardSwipe/cardSwipe.svelte';
    import CardStack from '$lib/components/CardStack/cardStack.svelte';
import { getToastStore } from '@skeletonlabs/skeleton';
const t = {
	message: 'Thank you! We will send you an invitation three days before the event.',
    background: 'bg-sunflower',

};

const toastStore = getToastStore();



  
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


<!-- <AppShell>...</AppShell> -->
<div class="min-h-dvh bg-noise3 w-screen bg-cream bg-blend-soft-light overflow-x-hidden">
    <div class="space-y-2">
        <div class="relative h-[400px]">

        <img class="md:hidden w-full h-[400px] mt-8 " src="/src/lib/assets/mobile_stairs.png">
        <div class="w-full h-full hidden md:inline">
     <h1 class="absolute whitespace-break-spaces font-alphabet text-9xl top-[-40px] left-36 lg:left-48 xl:left-64 pb-3 text-magma">
  {data.stoopSale.Name.split(' ')[0]}
</h1>
<h1 class="absolute whitespace-break-spaces font-alphabet text-9xl top-24 left-64 md:left-80 lg:left-96 xl:left-[35rem] pb-3 text-magma">
  Stoop
</h1>
<h1 class="absolute whitespace-break-spaces font-alphabet text-9xl top-56 right-64 lg:right-80 xl:right-96 pb-3 text-magma">
  Sale
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
            <h1 class=" mt-5 whitespace-break-spaces font-alphabet text-4xl xs:text-5xl sm:text-6xl pb-3 text-magma">{data.stoopSale.Name}</h1>
        </div>
    </div>
    <div class="relative flex flex-col sm:flex-row md:justify-center items-center w-full h-full mt-5 bg-sunflower bg-noise4" id="about-section">
        <!-- Image Container -->
        <div class="flex justify-center items-center w-full h-full z-20 ">
          <div class="flex flex-col justify-center items-center p-3 w-full h-full">
            <img class="relative hidden sm:inline w-full lg:w-[70%] my-5 rounded-xl object-contain z-10" src="src/lib/assets/about.png" alt="Host picture">
            <img class="relative inline sm:hidden w-full  my-5 rounded-xl object-contain z-10" src="src/lib/assets/image.png" alt="Host picture">
        </div>
        </div>
      
        <!-- Text Container -->
        <div class="flex w-full h-full z-20" id="about_section">
            <div class="flex justify-center items-center w-full h-full">
              <div class="w-full h-full rounded-lg flex flex-col justify-center items-center p-8 z-10">
                <!-- Text and Image Container -->
                <div class="relative bg-center">
                  <!-- Text Overlay -->
                  <h1 class="mb-3 whitespace-nowrap font-alphabet text-5xl text-charcoal">
                    Nice to meet you!
                  </h1>
                  <!-- Stars Image -->
                  <img class="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] w-[30rem]" src="src/lib/assets/stars.png" alt="Stars">
                </div>
                <!-- Paragraph Text -->
                <p class="text-xl p-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Quidem consequatur deleniti, doloribus impedit sint tempora autem? Molestiae delectus nam temporibus.
                </p>
                <!-- Additional Image -->
                <img class="w-40" src="/src/lib/assets/tets.png" alt="Tets">
              </div>
           
                    
            </div>
        </div>
      </div>
      

    <div class="relative w-full h-screen bg-charcoal bg-blend-overlay flex justify-center items-center z-20" id="items-section">
        <div class="absolute inset-0 bg-noise3 opacity-30"></div>
        <div class="relative w-[90%] h-[90%] block md:hidden">
            <h1 class="text-5xl font-alphabet text-sunflower text-center"> We love our items so much!</h1>
            <h3 class="text-2xl text-cream text-center">But maybe you will love them even more</h3>
          <CardSwipe items={data?.items} />
        
      </div>
        
        <div class="w-full h-full absolute flex justify-center items-center hidden md:block">
            <div class="mt-8">
            <h1 class="text-5xl font-alphabet text-sunflower text-center"> We love our items so much!</h1>
            <h3 class="text-2xl text-cream text-center">But maybe you will love them even more</h3>
        </div>
            <div class="flex w-full h-[80%] justify-center items-center">
            <CardStack items={data?.items}/>
        </div>
        </div>
    </div>
    <div class="flex flex-col md:flex-row md:justify-center items-center h-[25rem]">
    <div class="flex justify-center items-center bg-sunflower bg-noise4 w-full h-full z-20 border-[3px] border-r-[2px] border-b-[2px] border-charcoal">
        <div class="flex flex-col justify-center items-center p-3">
            <h1 class="font-alphabet text-7xl mb-3 text-magma">{formattedDate}</h1>
            <h1 class="font-alphabet text-5xl mb-3 text-magma">{formattedHours}</h1>
        </div>
    </div>

    <div class="flex justify-center items-center bg-charcoal w-full h-full z-20 border-[2px] border-t-[3px] border-charcoal" id="where-section">
        
        <div class="flex justify-center items-center w-full h-full">
            <div class="flex justify-center items-center bg-cream border-[3px]  border-cream w-[95%] h-[80%] rounded-lg my-3">
                <div class="relative w-[90%] bg-charcoal-secondary border-[3px] border-charcoal-secondary  h-[90%] rounded-lg">
                    <Map />
                </div>
            </div>
        </div>
    </div>
</div>

    <div class="bg-cream w-full flex justify-center items-center p-4 border-[2px] border-b-0 border-charcoal mb-5">
        <div class="card p-4 variant-filled-primary am variant-filled w-5/6 shadow-2xl text-center mt-10 md:mt-2 md:w-1/2 xl:w-[40%]">
            <form method="POST" action="?/addEmail" use:enhance={()=>{toastStore.trigger(t)}}>
                <label class="label block my-4">
                    <span class="block mb-3 font-alphabet text-2xl text-magma">Recieve a personal invitation:</span>
                    <input class="bg-gray-100 border-[1px] border-sunflower shadow-md text-lg text-charcoal placeholder-charcoal-secondary text-sm rounded-lg focus:ring-magma focus:border-magma block w-full p-[8px] " type="email" title="Email" placeholder="Email" name="email" required>     
                </label>
                <button class="rounded-lg mt-2 mb-1 bg-magma hover:bg-sunflower p-1.5 w-1/2 border-[1.3px] border-charcoal font-alphabet text-sunflower text-xl hover:text-magma">Send</button>
            </form>
        </div>
    </div>


</div>
