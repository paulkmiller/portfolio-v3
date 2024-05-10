<script>
	// import { onMount } from 'svelte';

	import Waves from '$lib/components/organisms/Waves.svelte';
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';

	import { description, image, keywords, title, siteBaseUrl } from '$lib/data/meta';

	// let loading = true;
	// let playSFX: (() => void) | undefined;

	// onMount(() => {
	// 	// need to create our own audio context as the default Audio() pauses any music playing
	// 	let buffer: AudioBuffer;
	// 	const audioCtx = new window.AudioContext();
	// 	const request = new XMLHttpRequest();
	// 	request.open('GET', 'sounds/click.ogg', true);
	// 	request.responseType = 'arraybuffer';
	// 	request.onload = function () {
	// 		const audioData: ArrayBuffer = request.response;
	// 		audioCtx.decodeAudioData(audioData, function (decodedBuffer) {
	// 			buffer = decodedBuffer;
	// 			playSFX = () => {
	// 				const source = audioCtx.createBufferSource();
	// 				source.buffer = buffer;
	// 				source.connect(audioCtx.destination);
	// 				source.start(0);
	// 			};
	// 		});
	// 	};
	// 	request.send();

	// 	if (document.readyState === 'complete') {
	// 		loading = false;
	// 	}
	// });
</script>

<svelte:head>
	<link rel="“canonical”" href={siteBaseUrl} />
	<meta name="keywords" content={keywords.join(', ')} />

	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />

	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />

	<meta property="og:image" content={image} />
	<meta name="twitter:image" content={image} />

	<meta name="twitter:card" content="summary_large_image" />

	<script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0"></script>
</svelte:head>

<Waves />

<Header />

<main>
	<slot />
</main>

<Footer />
