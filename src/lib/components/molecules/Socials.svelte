<script>
  import TelegramIcon from "$lib/icons/socials/telegram.svelte";
  import GitHubIcon from "$lib/icons/socials/github.svelte";
  import LinkedInIcon from "$lib/icons/socials/linkedin.svelte";
  import EmailIcon from "$lib/icons/socials/email.svelte";
  import RssIcon from "$lib/icons/rss.svelte";
  import CodepenIcon from "$lib/icons/socials/codepen.svelte";
  import InstagramIcon from "$lib/icons/socials/instagram.svelte";

</script>

<div class="socials">
  <a
    href="https://codepen.io/paulkmiller"
    target="_blank"
    rel="noopener noreferrer"
    title="See my Codepen profile"
  >
    <CodepenIcon />
  </a>
  <a
    href="https://github.com/paulkmiller"
    target="_blank"
    rel="noopener noreferrer"
    title="See my GitHub profile"
  >
    <GitHubIcon />
  </a>
  <a
    href="https://www.linkedin.com/in/paulmiller88/"
    target="_blank"
    rel="noopener noreferrer"
    title="Connect on LinkedIn"
  >
    <LinkedInIcon />
  </a>
  <a
    href="https://www.instagram.com/obewan_kanobi/"
    target="_blank"
    rel="noopener noreferrer"
    title="Connect on Instagram"
  >
    <InstagramIcon />
  </a>
  <a
    href="mailto:paulkerrymiller@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    title="Send an email"
  >
    <EmailIcon />
  </a>
</div>

<style lang="scss">
  @import "../../scss/breakpoints.scss";
  .socials {
    display: flex;
    align-items: center;
    gap: 20px;

    a {
      transition: all 0.2s ease-in-out;
      width: 24px;
      color: var(--color--text);
      fill: var(--color--text);

      &:hover {
        color: var(--color--primary);
        fill: var(--color--primary);
        filter: drop-shadow(0px 0px 3px var(--color--primary));
      }
    }
  }
</style>
