<script lang="ts">
	import { fade } from "svelte/transition";

	export let element: HTMLElement;

	export let color: string = '';
	export let title: string = '';
	export let description: string = '';
	export let image: string | undefined = undefined;
</script>

<div
	class="w-full h-full absolute cursor-grab ease-in-out rounded-xl  touch-none select-none bg-white {color}"
	bind:this={element}
>
	{#key image}
		{#if image}
			<img class="w-full h-full rounded-xl object-cover" src={image} alt={title} />
		{/if}
	{/key}
	<div class="absolute inset-0 bg-gradient-to-t from-white/80 via-white/0 rounded-b-xl "></div>
	<div class="p-0 absolute bottom-0 top w-full flex justify-center  ">
		<div class="w-full h-full bg-primary-500 rounded-lg">
		<div class="flex items-center flex-col">
			<h3 class="text-3xl font-semibold pb-2 text-secondary-500">{title}</h3>
			<p class="text-secondary-400 pb-2">{description}</p>
		</div>
	</div>
	</div>
</div>
