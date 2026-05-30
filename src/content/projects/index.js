// Auto-loads every project's meta.js and index.mdx using Vite's import.meta.glob.
// Add a new case study or project by creating a folder under ./<slug>/ with meta.js + index.mdx.

const metaMods = import.meta.glob('./*/meta.js', { eager: true });
const mdxMods  = import.meta.glob('./*/index.mdx');

const projects = {};
for (const path in metaMods) {
  const slug = path.replace('./', '').replace('/meta.js', '');
  projects[slug] = {
    slug,
    meta: metaMods[path].default,
    load: mdxMods[`./${slug}/index.mdx`], // dynamic import
  };
}

export function getProject(slug) {
  return projects[slug] || null;
}

export function listProjects(kind) {
  return Object.values(projects)
    .filter((p) => (kind ? p.meta.kind === kind : true))
    .sort((a, b) => (a.meta.order ?? 99) - (b.meta.order ?? 99));
}
