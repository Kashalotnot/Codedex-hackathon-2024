<script>
    export let items = [];

    let timeouts = new Array(items.length).fill(null);
</script>

        {#each items as _, index}
            <div
                class="absolute w-[50%] h-[70%] bg-surface-500 rounded-lg border-secondary-500 border-[2px] duration-300 flex justify-center items-center"
                style="transform: translateX({2 * index}rem) translateY(30rem); transition-timing-function: cubic-bezier(.42,0,.58,1);"
                on:mouseover={(event) => {
                    clearTimeout(timeouts[index]);
                    event.target.style.transform = `translateX(${2 * index}rem) translateY(2rem)`;
                }}
                on:mouseout={(event) => {
                    timeouts[index] = setTimeout(() => {
                        event.target.style.transform = `translateX(${2 * index}rem) translateY(30rem)`;
                    }, 200);
                }}
            > <!--Transition in tailwind wasnt working properly so added inline styles-->
            <!--Array of timeouts added to add more smooth animation. Now it does not instantly ends but still plays for 0.2s-->
            
            </div>
        {/each}
    
