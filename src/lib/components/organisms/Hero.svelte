<script>
	import FeaturesIcon from '$lib/icons/features.svelte';
	import EmailIcon from '$lib/icons/socials/email.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Sparkles from '$lib/components/atoms/Sparkles.svelte';
	import HeroImage from '$lib/components/atoms/HeroImage.svelte';
	import SparklingHighlight from '$lib/components/molecules/SparklingHighlight.svelte';
	import Socials from '$lib/components/molecules/Socials.svelte';
	import DiscoverButton from '$lib/components/atoms/DiscoverButton.svelte';

function handleClick() {
	const el = document.querySelector('#projects');
	if (!el) return;
	el.scrollIntoView(true);
}
</script>

<section id="hero">
	<div class="info">
		<h1>Paul Miller</h1>
		<h2>
			I am a cat dad, gamer, and... 
			<SparklingHighlight color="secondary">Front End Developer!</SparklingHighlight>
		</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit voluptatibus commodi
			autem provident quam labore, libero beatae praesentium voluptate?
		</p>
		<div class="socials">
			<span>Socials:</span>
			<Socials />
		</div>

		<DiscoverButton side on:click={handleClick} on:keypress={handleClick}>Discover my work ↓</DiscoverButton>

	</div>
	<HeroImage />
</section>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';
	@import '$lib/scss/breakpoints.scss';

	#hero {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 50px;

		h1 {
			@include for-phone-only {
				text-align: center;
			}
		}
		
		.intro {
			font-weight: 500;
			font-size: 1.4rem;
			width: min(100%, 440px);
			display: flex;
			flex-direction: column;

			.left {
				text-align: left;
			}
			.right {
				text-align: right;
			}

			@include for-phone-only {
				display: none;
			}
		}

		@include for-phone-only {
			grid-template-columns: 1fr;
			justify-items: center;
			gap: 20px;
			padding: 40px 0 50px;

		}

		.info {
			display: flex;
			flex-direction: column;
			gap: 20px;
			h2 {
				@include for-phone-only {
					text-align: center;
				}
			}

			p {
				@include for-phone-only {
					text-align: justify;
				}
			}

			@include for-phone-only {
				gap: 20px;
			}
		}

		.socials {
			display: flex;
			align-items: center;
			gap: 15px;

			@include for-phone-only {
				justify-content: center;
				margin-bottom: 10px;
				span {
					display: none;
				}
			}
		}
	}

	@media screen and (max-width: 1240px) {
		h1 {
			min-height: 0vw;
			font-size: clamp(4rem, 10vw, 6.25rem);
		}
	}
	
</style>
