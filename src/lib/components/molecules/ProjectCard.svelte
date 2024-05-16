<script lang="ts">
  import Card from "$lib/components/atoms/Card.svelte";
  import Tag from "$lib/components/atoms/Tag.svelte";
  import Image from "../atoms/Image.svelte";
  import Open from "$lib/icons/open.svelte";
  import type { TagType } from "$lib/utils/types";

  export let name: string;
  export let description: string;
  export let link: string;
  export let image: string;
  export let tags: TagType[] | undefined;
</script>

<Card additionalClass="project-card" href={link}>
  <div class="image" slot="image">
    <Image src={image} alt="Picture describing the {name} project" />
  </div>
  <div class="content" slot="content">
    <div class="title">
      <span>{name}</span>
      <Open />
    </div>
    <h6>{description}</h6>
  </div>
  <div class="footer" slot="footer">
    {#if tags && tags.length > 0}
      <div class="tags">
        {#each tags as tag}
          <Tag color={tag.color}>{tag.label}</Tag>
        {/each}
      </div>
    {/if}
  </div>
</Card>

<style lang="scss">
  @import "$lib/scss/breakpoints.scss";

  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    font-size: 1.2rem;
    font-family: var(--font--title);
    font-weight: 700;

    :global(svg) {
      height: 25px;
      width: 25px;
    }
  }

  .tags {
    display: flex;
    align-items: center;
    gap: 5px;
    flex-wrap: wrap;
  }

  .footer {
    margin-top: 20px;
  }

  :global(.project-card .image) {
    @include for-phone-only {
      display: none;
    }
  }

  :global(.project-card figcaption) {
    display: none;
  }

  :global(.project-card .image img) {
    object-fit: cover;
  }
</style>
