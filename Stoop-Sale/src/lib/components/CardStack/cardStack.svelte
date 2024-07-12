<script>
    export let items = [];

    let timeouts = new Array(items.length).fill(null);
</script>



          

          
      
          {#each items as item, index}
            <div
              id={`card-${index}`}
              class="absolute w-[50%] h-[70%] bg-surface-500 rounded-lg border-secondary-500 border-[2px] duration-300 flex justify-center items-center"
              style="transform: translateX({2 * index}rem) translateY(30rem); transition-timing-function: cubic-bezier(.42,0,.58,1);"
              on:mouseover={(event) => {
                clearTimeout(timeouts[index]);
                document.getElementById(`card-${index}`).style.transform = `translateX(${2 * index}rem) translateY(2rem)`;

              }}
              on:mouseout={(event) => {
                clearTimeout(timeouts[index]);
                timeouts[index] = setTimeout(() => {
                  document.getElementById(`card-${index}`).style.transform = `translateX(${2 * index}rem) translateY(30rem)`;
                }, 200); 
              }}
            >
                <div class="w-full absolute top-0 bg-secondary-500 text-white p-2 rounded-sm border-[2px] border-secondary-500">
      <p class="text-center">{item.description}</p>
    </div>
              <div class="w-full h-full flex justify-center items-center">
                <img class=" max-h-full max-w-full rounded-lg object-scale-down" src={item.image} alt={item.title} />
              </div>
            </div>
          {/each}
          
          
          

    
