<!-- Card.svelte -->
<script>
    export let image;
</script>

<div class="absolute w-[50%] h-[70%] bg-surface-500 rounded-lg border-secondary-500 border-[2px] duration-300 flex justify-center items-center">
    <img src={image} alt="Image" class="w-full h-full object-cover rounded-lg" />
</div>