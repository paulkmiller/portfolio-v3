import projects from "$lib/data/projects";
import { filteredPosts } from "$lib/data/blog-posts";

export async function load() {
  const posts = filteredPosts.slice(0, 4);

  return {
    projects,
    posts,
  };
}
