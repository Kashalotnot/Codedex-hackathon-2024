<script lang="ts">
	import { fade } from "svelte/transition";

	export let element: HTMLElement;
	export let title: string = '';
	export let description: string = '';
	export let image: string | undefined = undefined;
</script>

<div
	class="w-full h-full absolute cursor-grab ease-in-out rounded-xl  touch-none select-none bg-cream "
	bind:this={element}
>
	<div class="absolute inset-0 bg-noise3 opacity-40"></div>
	{#key image}
		{#if image}
			<img class="w-full h-full rounded-xl  max-h-full max-w-full object-scale-down" src={image} alt={title} />
		{/if}
	{/key}
	<div class="absolute inset-0  rounded-b-xl "></div>
	<div class="p-0 absolute bottom-0 top w-full flex justify-center  ">
		<div class="w-full h-full bg-cream rounded-lg">
		<div class="flex items-center flex-col ">
			<h3 class="text-3xl font-semibold pb-2 text-charcoal">{title}</h3>
		</div>
	</div>
	</div>

</div>
