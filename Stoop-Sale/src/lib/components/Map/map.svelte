<script >
import { Loader } from '@googlemaps/js-api-loader'; import { onMount } from 'svelte';
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

let element

onMount(() => { start(); });

const position = { lat: 40.679790, lng:  -73.997429 };

async function start() {

		const loader = new Loader({
			apiKey: apiKey,
			version: 'weekly',
			libraries: ['maps']
		});
		let { Map } = await loader.importLibrary('maps');
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

		const map = new Map(element, {
			center: position,
			zoom: 16,
			mapId: 'mapid',
			disableDefaultUI: true
		});
    const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
  console.log(import.meta.env)
        
}
</script>
<div bind:this={element} class="w-full h-full" />