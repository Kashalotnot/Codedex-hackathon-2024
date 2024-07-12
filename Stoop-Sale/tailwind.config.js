import { join } from 'path'

import { skeleton } from '@skeletonlabs/tw-plugin';
import { stoop_sale } from './src/stoop_sale'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			fontFamily: {
				alphabet: ["Alphabet", 'serif'],
				futura: ["Futura", 'sans-serif'],
			},
			backgroundImage: {
				'noise': "url('/src/lib/assets/noise.png')",
		},
		colors: {
			'cream': '#f3e6d4;',
			'charcoal': '#333',
			'magma': '#f75d33',
			'charcoal-secondary': '#333333b8',
			'sunflower': '#ffc351',
			'white-tertiary': '#ffffff1f',
			'black-tertiary': '#0000001f'
		}    
	},
},
	plugins: [
		skeleton({
			themes: {
				custom: [
					stoop_sale,
				],
			},
		}),
	],
};
