import Contact from './contact.svelte';
import About from './about.svelte';

const routes = [
  { name: '/about', component: About },
  { name: '/contact', component: Contact },
];

export { routes };
