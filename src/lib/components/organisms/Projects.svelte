<script lang="ts">
	import type { Project } from '$lib/utils/types';
	import ProjectCard from '$lib/components/molecules/ProjectCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';

	export let projects: Project[];
</script>

<ContentSection
	id="projects"
	title="code://work"
	description="Here is some of my past work"
>
	<div class="projects-container">
		<div class="two-group-grid">
			{#each projects as project}
				<ProjectCard
					name={project.name}
					description={project.description}
					image={project.image}
					tags={project.tags}
				/>
			{/each}
		</div>
	</div>
</ContentSection>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.projects-container {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 20px;
	}

	.two-group-grid {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 20px;

		@include for-phone-only {
			grid-template-columns: 1fr;
		}
	}

	.three-group-grid {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 20px;

		@media (max-width: 1085px) {
			grid-template-columns: 1fr 1fr;
		}

		@include for-phone-only {
			grid-template-columns: 1fr;
		}

		// Select every 3 elements, starting from position 2
		// And make it take up 2 rows
		// @media (min-width: 1086px) {
		// 	> :global(:nth-child(3n + 2)) {
		// 		grid-row: span 2;
		// 	}
		// }

		// Select every 3 elements, starting from position 1
		// And make it take up 2 columns
		// > :global(:nth-child(3n + 1)) {
		// 	@media (max-width: 1085px) {
		// 		grid-column: span 2;
		// 	}

		// 	@include for-tablet-portrait-down {
		// 		grid-template-columns: 1fr;
		// 		grid-column: unset;
		// 	}
		// }
	}
</style>
