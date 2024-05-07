<script>
	import SparklingHighlight from '$lib/components/molecules/SparklingHighlight.svelte';
	import Socials from '$lib/components/molecules/Socials.svelte';
	import Image from '$lib/components/atoms/Image.svelte';
	import Tooltip from '$lib/components/atoms/Tooltip.svelte';
	import Sparkles from '$lib/components/atoms/Sparkles.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import EmailIcon from '$lib/icons/socials/email.svelte';
	import FeaturesIcon from '$lib/icons/features.svelte';
</script>

<section id="about" class="wrapper">
	<div class="text">
		<h2>Bio</h2>
		<p>
			For years, I have worked as a web developer primarily focused on the Frontend with JavaScript and its many frameworks, with pivots to Ruby on Rails, PHP / Wordpress / Pimcore, along with Vue & Node. My experience ranges from small early stage startups to large enterprise level companies. Over time, I have been responsible for developing a range of different products including custom content management / live-service applications, brochure and multi-site applications, WCAG compliant frontend frameworks, spikes and subsequent epics, and been the frontrunner in various efforts towards making projects I am involved with as WCAG compliant as possible given time constraints.
		</p>
	</div>
		<div class="ctas">
			<Sparkles>
				<Button href="#">
					<EmailIcon slot="icon" />
					Contact
				</Button>
			</Sparkles>
			<Button color="primary" href="https://histoire-sveltekit-static-blog-template.vercel.app/">
				<FeaturesIcon slot="icon" />
				Site Component Library
			</Button>
		</div>
</section>



<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	#about {
		position: relative;
		display: grid;
		grid-template-columns: 1fr;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 50px;

		@include for-phone-only {
			grid-template-columns: 1fr;
			justify-items: center;
			gap: 20px;
		}

		.ctas {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			gap: 10px;
			width: 100%;
		}

		.info {
			display: flex;
			flex-direction: column;
			gap: 10px;
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

		.image {
			width: 220px;
			height: 220px;
		}
	}
</style>
