<script lang="ts">
  import "$lib/scss/global.scss";
  import type { Hst } from "@histoire/plugin-svelte";
  import Header from "./Header.svelte";

  export let Hst: Hst;
</script>

<Hst.Story title="Organisms/Header" layout={{ type: "single", iframe: true }}>
  <Hst.Variant title="Transparent Background">
    <Header />
  </Hst.Variant>

  <Hst.Variant title="With Background">
    <Header showBackground />
  </Hst.Variant>
</Hst.Story>
