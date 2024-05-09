<script>
  import { onMount } from 'svelte';
  import particlesJS from 'particles.js';

  onMount(() => {
    particlesJS.load('particles-js', '/path/to/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  });
</script>

<div id="particles-js"></div>

<style>
  #particles-js {
    width: 100%;
    height: 100vh;
    background-color: #333;
  }
</style>
