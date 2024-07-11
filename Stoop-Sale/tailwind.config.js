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
		animation: {
			'infinite-scroll': 'infinite-scroll 15s linear infinite',
		  },
		  keyframes: {
			'infinite-scroll': {
			  from: { transform: 'translateX(0)' },
			  to: { transform: 'translateX(-100%)' },
			}
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
