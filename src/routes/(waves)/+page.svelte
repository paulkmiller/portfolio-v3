<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
	import About from '$lib/components/organisms/About.svelte';
	import RecentPosts from '$lib/components/organisms/RecentPosts.svelte';
	import Projects from '$lib/components/organisms/Projects.svelte';
	import type { Project, BlogPost } from '$lib/utils/types';

	export let data: {
		projects: Project[];
		posts: BlogPost[];
	};

	let { projects, posts } = data;
</script>

<div class="container">
	<Hero />
	<About />
	<Projects {projects} />
	{#if posts && posts.length > 0}
	<RecentPosts {posts} />
	{/if}
</div>
