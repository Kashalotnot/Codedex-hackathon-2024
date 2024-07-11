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
			marquee: 'marquee 5s linear infinite',
			marquee2: 'marquee2 5s linear infinite',
		  },
		  keyframes: {
			marquee: {
			  '0%': { transform: 'translateX(0%)' },
			  '100%': { transform: 'translateX(-100%)' },
			},
			marquee2: {
				'0%': { transform: 'translateX(100%)' },
				'100%': { transform: 'translateX(0%)' },
			  },

		  },              
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
