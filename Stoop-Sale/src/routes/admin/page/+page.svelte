<script>
    export let data;
    let showForm = false;
    let showStopSaleForm = false;
    let showItemsForm = false;

    let itemNames = [];
    let itemImages = [];
    let itemName = "";
    let imageInput = null;
    let itemImage = null;

    $: if (!showStopSaleForm) {
        itemNames = [];
        itemImages = [];
        itemName = "";
        itemImage = null;
    }

    let file;

    function onRead() {
        file = imageInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.addEventListener('load', function() {
                imageInput.setAttribute('src', reader.result);
            });
            reader.readAsDataURL(file);

            return;
        }
    }
</script>
<div class="relative h-[3rem] bg-charcoal-secondary w-full text-cream">
    <div class="absolute inset-0 flex justify-center items-center">
        <h1 class="text-3xl">Admin Page</h1>
    </div>
    <div class="absolute right-0">
        <form class="right-0 border-2 w-[4rem] rounded-lg border-cream flex justify-center" method="POST" action="?/logout">
            <button>Logout</button>
        </form>
    </div>
</div>

<div class="h-[100vh] bg-cream p-4"  on:click={() => {showForm = false; showStopSaleForm = false;}}>
    <div class="flex flex-col justify-center items-center w-full text-charcoal">
        <h2>{data.user.email}</h2>
    </div>

    <button class="bg-charcoal rounded-lg p-2" on:click|stopPropagation={() => showForm = !showForm}>Add new admin</button> <!-- Step 2: Toggle form visibility -->
    
    {#if showForm} 
        <div class="fixed right-[30%] flex justify-center items-center h-[40%] w-[40%]" on:click|stopPropagation>
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-charcoal-secondary rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Add Admin
                        </h1>
                        <form class="space-y-4 md:space-y-6" method="POST" action="?/addAdmin">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                            </div>
                            <button type="submit" class="w-full text-white bg-sunflower hover:bg-magma focus:ring-4 focus:outline-none focus:ring-magma font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    {/if}

    <button class="bg-charcoal rounded-lg p-2" on:click|stopPropagation={() => showStopSaleForm = !showStopSaleForm}>Add Stoop Sale</button>
    
    {#if showStopSaleForm}
        <div class="fixed right-[30%] flex justify-center items-center h-[40%] w-[40%]" on:click|stopPropagation>
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-charcoal rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Add Stoop Sale
                        </h1>
                        <form class="space-y-4 md:space-y-6" method="POST" action="?/addStoopSale" >
                            <div>
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="text" name="name" id="name" class="rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Stoop Sale" required="">
                            </div>
                            <div>
                                <label for="place" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Place</label>
                                <input type="text" name="place" id="place" placeholder="Avenue ..." class="rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="">
                            </div>
                            <div>
                                <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                                <input class="rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" type="date" id="date" name="date" required>

                                <label for="time" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Time</label>
                                <input class="rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" type="time" id="time" name="time" required>
                            </div>
                            <div on:click|stopPropagation>
                                <label for="items" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Items</label>
                                <button on:click|preventDefault={() => showItemsForm = !showItemsForm} class="w-12 h-12 bg-cream text-charcoal rounded-lg flex items-center justify-center text-2xl font-bold hover:bg-magma focus:outline-none">
                                    +
                                </button>
                                <input type="hidden" name="itemNames" bind:value={itemNames}>
                                <input type="hidden" name="itemImages" bind:value={itemImages}>
                                {#if showItemsForm}
                                <form  class="mt-4 p-4 border rounded-lg bg-gray-800" enctype="multipart/form-data">
                                    <div>
                                        <label for="itemName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Name</label>
                                        <input bind:value={itemName} type="text" name="itemName" id="itemName" class="rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Item Name" required="">
                                    </div>
                                    <div class="mt-4">
                                        <label for="itemImage" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Image</label>
                                        <input bind:this={imageInput} on:change={onRead} type="file" name="itemImage" id="itemImage" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
                                    </div>
                                    <div>
                                        <button on:click|stopPropagation={() => {itemNames = [...itemNames, itemName]; itemImages = [...itemImages, file]; console.log(itemImages); showItemsForm = false; itemImage = null; itemName = "";}} class="w-full mt-1 text-white bg-sunflower hover:bg-magma focus:ring-4 focus:outline-none focus:ring-magma font-medium rounded-lg text-sm px-5 py-1 text-center">Add</button>
                                    </div>
                                </form>
                                {/if}
                            </div>
                            <button type="submit" class="w-full text-white bg-sunflower hover:bg-magma focus:ring-4 focus:outline-none focus:ring-magma font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    {/if}
    
    {#if itemNames !== null && itemNames.length > 0}
        <div on:click|stopPropagation class="absolute right-0 w-[30%] bg-charcoal rounded">
            <h2 class="text-2xl text-cream p-3">Items:</h2>
            {#each itemNames as name, index}
                <div class="flex justify-between items-center p-3 rounded-lg bg-gray-900 mb-1">
                    <h3 class="text-cream" id={index}>{name}</h3>
                    <button on:click={() => {itemNames = itemNames.filter((_, i)=> i !== index); itemImages = itemImages.filter((_, i)=> i !== index);}} class="rounded text-red-500">delete</button>
                </div>
            {/each}
        </div>
    {/if}
</div>