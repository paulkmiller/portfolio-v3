import { f as filteredPosts } from "../../../chunks/index3.js";
const projects = [
  {
    name: '<a href="https://paulhealth.ue.r.appspot.com/home/" target="_blank">PaulHealth & Blog</a>',
    description: "Sveltekit 1.0 using Contentful as a headless CMS. Each component is configurable, the layout organized, and all contact entries are managed by and sent to Contentful. Deployed using GCP.",
    image: "images/projects/paulHealth.png",
    tags: [
      { label: "Sveltekit" },
      { label: "Contentful" },
      { label: "GCP", color: "secondary" }
    ]
  },
  {
    name: '<a href="https://console.jumpcloud.com/signup" target="_blank">Jumpcloud Signup & Onboarding</a>',
    description: "Part of the growth team, I focused on the signup design and onboarding processes when first signing up for a Jumpcloud accout.",
    image: "images/projects/Jumpcloud.png",
    tags: [
      { label: "Vue2" },
      { label: "Grid | Flexbox" },
      { label: "Node" },
      { label: "Cypress | Jest" },
      { label: "AWS", color: "secondary" }
    ]
  },
  {
    name: '<a href="https://www.multiplyinggood.org/" target="_blank">Multiplying Good</a>',
    description: "Built entire Front End for Multiplying Good's visual refresh. The site is built with Pimcore as a headless CMS.",
    image: "images/projects/MultiplyingGood.png",
    tags: [
      { label: "HTML5" },
      { label: "Grid | Flexbox" },
      { label: "jQuery" },
      { label: "PHP" },
      { label: "Pimcore", color: "secondary" }
    ]
  },
  {
    name: '<a href="https://www.politicopro.com/" target="_blank">Politico Pro</a>',
    description: "Turned PoliticoPro into a WCAG AAA Compliant site using the existing codebase. This was a huge project that required a lot of attention to detail.",
    image: "images/projects/PoliticoPro.png",
    tags: [
      { label: "A11Y" },
      { label: "WAVE" },
      { label: "Lighthouse" },
      { label: "JAWS" }
    ]
  },
  {
    name: '<a href="https://grafik.agency/" target="_blank">Grafik</a>',
    description: "Full rebuild of the corporate site for Grafik Digital. The site was built with WordPress, is fully responsive, and included a custom blog.",
    image: "images/projects/Grafik.png",
    tags: [
      { label: "WordPress" },
      { label: "PHP" },
      { label: "jQuery" },
      { label: "Elementor" },
      { label: "A11Y" }
    ]
  }
];
async function load() {
  const posts = filteredPosts.slice(0, 4);
  return {
    projects,
    posts
  };
}
export {
  load
};
