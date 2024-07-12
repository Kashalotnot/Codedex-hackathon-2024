<script>
    export let items = [];
    console.log(items);

    let timeouts = new Array(items.length).fill(null);
</script>

{#each items as item, index}
    <img src={item.image}
        class="absolute w-[50%] h-[70%] bg-surface-500 rounded-lg border-secondary-500 border-[2px] duration-300 flex justify-center items-center"
        style="transform: translateX({2 * index}rem) translateY(30rem); transition-timing-function: cubic-bezier(.42,0,.58,1);"
        on:mouseover={(event) => {
            clearTimeout(timeouts[index]);
            event.target.style.transform = `translateX(${2 * index}rem) translateY(2rem)`;
            event.target.style.zIndex = 20; 
        }}
        on:mouseout={(event) => {
            timeouts[index] = setTimeout(() => {
                event.target.style.transform = `translateX(${2 * index}rem) translateY(30rem)`;
                event.target.style.zIndex = 10; 
            }, 200);
        }}
    />
         
   
{/each}
