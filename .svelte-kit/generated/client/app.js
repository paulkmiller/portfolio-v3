export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8')
];

export const server_loads = [2];

export const dictionary = {
		"/(waves)": [~6,[3]],
		"/(waves)/404": [7,[3]],
		"/(waves)/blog": [~8,[3]],
		"/(blog-article)/moving-to-colorado": [4,[2]],
		"/(blog-article)/steamdeck-modded-fallout4": [5,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';