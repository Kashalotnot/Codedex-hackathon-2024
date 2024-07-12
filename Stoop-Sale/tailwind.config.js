import { join } from 'path'

import { skeleton } from '@skeletonlabs/tw-plugin';
import { stoop_sale } from './src/stoop_sale'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		screens: {
			'xxs': '370px',
			'xs': '460px',
			'sm': '640px',
			// => @media (min-width: 640px) { ... }
	  
			'md': '768px',
			// => @media (min-width: 768px) { ... }
			'md900': '900px',
	  
			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }
	  
			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }
	  
			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }

		  }
		, 
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
		}    ,
		keyframes: {
			'tilt-n-move-shaking': {
			  '0%': { transform: 'translate(0, 0) rotate(0deg)' },
			  '25%': { transform: 'translate(5px, 5px) rotate(5deg)' },
			  '50%': { transform: 'translate(0, 0) rotate(0deg)' },
			  '75%': { transform: 'translate(-5px, 5px) rotate(-5deg)' },
			  '100%': { transform: 'translate(0, 0) rotate(0deg)' },
			},
		},
		animation: {
			'tilt-n-move-shaking': 'tilt-n-move-shaking 0.6s infinite',
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
