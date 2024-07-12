<script>
  export let items = [];
  console.log(items);
  
  let timeouts = new Array(items.length).fill(null);
</script>
{#each items as item, index}
<div
  id={`card-${index}`}
  class="absolute w-[50%] h-[70%] bg-cream rounded-lg border-charcoal border-[4px] duration-300 flex justify-center items-center"
  style="transform: translateX({2 * index}rem) translateY(30rem); transition-timing-function: cubic-bezier(.42,0,.58,1);"
  on:mouseover={(event) =>
  {
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
  <!--Using array of timeouts so the cards wont`t finish animation instantly on mouse leave-->
  <div class="w-full absolute top-0 bg-sunflower text-white p-2 rounded-sm border-[2px] border-sunflower">
      <p class="text-center text-charcoal font-alphabet text-3xl capitalize">{item.name}</p>
  </div>
  <div class="w-full h-full flex justify-center items-center">
      <img class=" max-h-full max-w-full rounded-lg object-scale-down" src={item.image} alt={item.name} />
  </div>
  <div class="absolute inset-0 bg-noise3 opacity-30"></div>
</div>
{/each}