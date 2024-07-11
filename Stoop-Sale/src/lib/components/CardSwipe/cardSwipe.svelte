<script>

      import { CardSwiper } from '$lib/components/CardSwipePrimitive/index.ts'
      let swipe = function(direction) {
    if (direction === 'left') {
    } else if (direction === 'right') {
    }
};
export let items = []; //Should have name, description, image
</script>
<CardSwiper
bind:swipe
cardData={() => {
    let i = Math.floor(Math.random() * items.length);
    let j = Math.floor(Math.random() * items.length);
    return {
        title: items[i].name,
        description: items[j].description,
        image: items[i].image
    };
}}
/>