<script lang="ts">
  import { dev } from "$app/environment";

  export let src: string;
  export let alt: string;
  export let fullBleed: boolean | undefined = undefined;
  export let width: string | undefined = undefined;
  export let height: string | undefined = undefined;

  export let formats: string[] = ["avif", "webp", "png"];
  export let widths: string[] | undefined = undefined;

  $: fileName = src.split(".")[0];

  function buildSrcset() {
    if (dev) return;

    let srcset = "";

    if (widths) {
      for (let i = 0; i < widths.length; i++) {
        srcset += `${fileName}-${widths[i]}.${formats[0]} ${widths[i]}w`;

        if (i < widths.length - 1) {
          srcset += ", ";
        }
      }
    } else {
      for (let i = 0; i < formats.length; i++) {
        srcset += `${fileName}.${formats[i]}`;

        if (i < formats.length - 1) {
          srcset += ", ";
        }
      }
    }

    return srcset;
  }
</script>

<figure>
  <img
    srcset={buildSrcset()}
    {src}
    {alt}
    loading="lazy"
    decoding="async"
    class:full-bleed={fullBleed}
    style:width
    style:height
  />
  <figcaption>{alt}</figcaption>
</figure>

<style lang="scss">
  figure {
    height: 100%;
    width: 100%;
    display: inline-block;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  figcaption {
    text-align: center;
    font-size: 0.9rem;
    margin: 0.5rem;
  }
</style>
