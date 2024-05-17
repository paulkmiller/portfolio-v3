import { f as filteredPosts } from "../../../chunks/index3.js";
const projects = [
  {
    name: "PaulHealth & Blog",
    description:
      "Sveltekit 3.58 using Contentful as a headless CMS. Each component is configurable, the layout organized, and all contact entries are managed by and sent to Contentful. Deployed using GCP. Entire frontend is custom.",
    link: "https://paulhealth.ue.r.appspot.com/home/",
    image: "images/projects/paulHealth.png",
    tags: [
      { label: "Sveltekit" },
      { label: "Contentful" },
      { label: "Figma" },
      { label: "GCP", color: "secondary" },
    ],
  },
  {
    name: "Jumpcloud Signup & Onboarding",
    description:
      "Redesign & rebuild of signup + onboarding workflows for new accounts, enhancing user experience and conversion rates. Implemented a streamlined & intuitive interface using modern UX principles and A/B testing to optimize user engagement from initial point of contact.",
    link: "https://console.jumpcloud.com/signup",
    image: "images/projects/Jumpcloud.png",
    tags: [
      { label: "Vue2" },
      { label: "Grid | Flexbox" },
      { label: "Node" },
      { label: "Cypress | Jest" },
      { label: "AWS", color: "secondary" },
    ],
  },
  {
    name: "Multiplying Good",
    description:
      "Developed complete front end for Multiplying Good's visual overhaul, utilizing Pimcore as a headless CMS to deliver a dynamic, API-driven user experience. Implemented component-driven design before it was cool.",
    link: "https://www.multiplyinggood.org/",
    image: "images/projects/MultiplyingGood.png",
    tags: [
      { label: "HTML5" },
      { label: "Grid | Flexbox" },
      { label: "jQuery" },
      { label: "PHP" },
      { label: "Pimcore", color: "secondary" },
    ],
  },
  {
    name: "Politico Pro",
    description:
      "Enhanced PoliticoPro's WordPress theme to achieve WCAG 2.1 AAA compliance by integrating custom accessibility-focused plugins and modifying existing codebase to align with best practices for accessibility. This involved a detailed audit and iterative improvements.",
    link: "https://www.politicopro.com/",
    image: "images/projects/PoliticoPro.png",
    tags: [
      { label: "A11Y" },
      { label: "WAVE" },
      { label: "Lighthouse" },
      { label: "JAWS" },
      { label: "Wordpress", color: "secondary" },
    ],
  },
  {
    name: "Grafik",
    description:
      "Full rebuild of the corporate site for Grafik Digital. The site was built with WordPress, is fully responsive, and included a custom blog.",
    link: "https://grafik.agency/",
    image: "images/projects/Grafik.png",
    tags: [
      { label: "PHP" },
      { label: "jQuery" },
      { label: "SCSS" },
      { label: "Elementor" },
      { label: "A11Y" },
      { label: "Wordpress", color: "secondary" },
    ],
  },
];
async function load() {
  const posts = filteredPosts.slice(0, 4);
  return {
    projects,
    posts,
  };
}
export { load };
