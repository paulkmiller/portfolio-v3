<script>
	import FooterWave from '$lib/icons/footer-wave.svelte';
	import Socials from '$lib/components/molecules/Socials.svelte';
	import ThemeToggle from '$lib/components/molecules/ThemeToggle.svelte';
	import RssLink from '$lib/components/atoms/RssLink.svelte';
</script>

<footer>
	<div class="wave">
		<FooterWave />
	</div>
	<div class="content">
		<div class="credits">
			Site powered by <a href="https://kit.svelte.dev/">Svelte</a>, <a href="https://iconoir.com/">Iconoir</a> and ☕
		</div>
		<div class="socials">
			<Socials />
			<RssLink />
			<ThemeToggle />
		</div>
	</div>
</footer>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';
	
	footer {
		height: 340px;
		width: 100%;
		background: linear-gradient(60deg, var(--color--waves-start) 0%, var(--color--waves-end) 100%);
		display: grid;
		grid-template-rows: 120px 1fr;

		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			gap: 10px;
			font-weight: 600;
			text-align: center;

			background-image: url(https://i.imgur.com/QQNxJfu.png);
    	background-size: 27%;

			@include for-phone-only {
				background-size: auto;
			}

			.credits {
				font-weight: 400;
				font-size: 90%;
				color: var(--color--white);
				margin-top: -10px;
			}

			.socials {
				display: flex;
				align-items: center;
				gap: 20px;
			}
		}

		a {
			&:hover {
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}
	}
</style>
