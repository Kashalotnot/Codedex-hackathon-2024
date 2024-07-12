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
				'noise3': "url('data:image/svg+xml,%3C!-- svg: first layer --%3E%3Csvg viewBox=\"0 0 400 400\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"10\" numOctaves=\"6\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')",
				'noise4': "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 400 400\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"10\" numOctaves=\"6\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Cg opacity=\"0.4\"%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/g%3E%3C/svg%3E')",
				'noiseDense': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' viewBox='0 0 700 700' width='700' height='700'%3E%3Cdefs%3E%3Cfilter id='nnnoise-filter' x='-20%25' y='-20%25' width='140%25' height='140%25' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='linearRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.054' numOctaves='4' seed='15' stitchTiles='stitch' x='0%25' y='0%25' width='100%25' height='100%25' result='turbulence'%3E%3C/feTurbulence%3E%3CfeSpecularLighting surfaceScale='8' specularConstant='0.75' specularExponent='20' lighting-color='%23ffffff' x='0%25' y='0%25' width='100%25' height='100%25' in='turbulence' result='specularLighting'%3E%3CfeDistantLight azimuth='3' elevation='83'%3E%3C/feDistantLight%3E%3C/feSpecularLighting%3E%3C/filter%3E%3C/defs%3E%3Crect width='700' height='700' fill='%23000000ff'%3E%3C/rect%3E%3Crect width='700' height='700' fill='%23ffffff' filter='url(%23nnnoise-filter)'%3E%3C/rect%3E%3C/svg%3E\")",

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
