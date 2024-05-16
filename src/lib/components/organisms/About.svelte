<script>
  import Sparkles from "$lib/components/atoms/Sparkles.svelte";
  import Button from "$lib/components/atoms/Button.svelte";
  import EmailIcon from "$lib/icons/socials/email.svelte";
</script>

<section id="about" class="wrapper">
  <div class="text">
    <!-- <h2>Hello!</h2> -->
    <p>
      Hey there! I'm Paul, a frontend developer who loves bringing designs to
      life through code. There's nothing quite like the thrill of transforming a
      static mockup into an interactive, engaging experience that users can
      enjoy.
    </p>
    <p>
      Over the years, I've had the opportunity to work with a wide range of
      technologies, from JavaScript frameworks like React and Vue to backend
      systems like Ruby on Rails and PHP. More recently, I've been diving into
      Sveltekit and Go, along with headless CMS solutions like Strapi and
      Contentful.
    </p>
    <p>
      If you're looking for a frontend developer who's equal parts creative and
      technical, I'd love to chat. Feel free to check out my blog if you want to
      see what I'm up too! And if you've got a design that you're dying to see
      brought to life, let's definitely talk!
    </p>
  </div>
  <div class="ctas">
    <Sparkles>
      <Button href="mailto:paulkerrymiller@gmail.com">
        <EmailIcon slot="icon" />
        Contact Me
      </Button>
    </Sparkles>
  </div>
</section>

<style lang="scss">
  @import "$lib/scss/breakpoints.scss";

  #about {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 50px;
    gap: 20px;

    @include for-phone-only {
      grid-template-columns: 1fr;
      justify-items: center;
      gap: 20px;
    }

    .text {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .ctas {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 10px;
      width: 100%;
    }
  }
</style>
