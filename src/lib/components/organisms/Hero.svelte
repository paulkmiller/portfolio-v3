<script>
  import Tooltip from "$lib/components/atoms/Tooltip.svelte";
  import HeroImage from "$lib/components/atoms/HeroImage.svelte";
  import SparklingHighlight from "$lib/components/molecules/SparklingHighlight.svelte";
  import Socials from "$lib/components/molecules/Socials.svelte";
  import DiscoverButton from "$lib/components/atoms/DiscoverButton.svelte";

  function handleClick() {
    const el = document.querySelector("#projects");
    if (!el) return;
    el.scrollIntoView(true);
  }

  $: tip = "I move often, so check my Insta!";
</script>

<section id="hero">
  <div class="info">
    <h1>Paul Miller</h1>
    <h2>
      I am a cat dad and...
      <SparklingHighlight color="secondary"
        >Front End Developer!</SparklingHighlight
      >
    </h2>
    <p>
      Bringing Designs to Life <span class="secondary">&</span>
      probably <br /> 
        <Tooltip {tip}>
          <a href="https://www.instagram.com/obewan_kanobi/" target="_blank">exploring</a>
        </Tooltip> the area or petting my cats.
    </p>
    <!-- <p>
      Bringing Designs to Life <span class="secondary">&</span><br />
      Probably playing <Tooltip {tip}
        ><a href="https://steamcommunity.com/id/Kahram/" target="_blank"
          >games</a
        ></Tooltip
      > or petting my cats.
    </p> -->
    <div class="socials">
      <span>Socials:</span>
      <Socials />
    </div>
    <DiscoverButton side on:click={handleClick} on:keypress={handleClick}
      >Discover my work ↓</DiscoverButton
    >
  </div>
  <HeroImage />
</section>

<style lang="scss">
  @import "$lib/scss/_mixins.scss";
  @import "$lib/scss/breakpoints.scss";

  #hero {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 30px;

    @include for-phone-only {
      grid-template-columns: 1fr;
      justify-items: center;
      gap: 20px;
      padding: 40px 0 50px;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 15px;

      h1 {
        @include for-phone-only {
          text-align: left;
        }
      }

      h2 {
        @include for-phone-only {
          text-align: center;
        }
      }

      p {
        color: var(--color--text);
        @include for-phone-only {
          text-align: justify;
        }
      }

      .secondary {
        font-weight: 900;
        color: var(--color--secondary);
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
