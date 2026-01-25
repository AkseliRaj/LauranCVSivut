/**
 * Central project data used by galleryGrid.js and galleryItemPage.js.
 *
 * Each project can include:
 * - id: number (for React keys)
 * - slug: string (for URL, e.g. /gallery/maranasati)
 * - title: string (main title, e.g. "Maranasati")
 * - titleGrid: string (optional; used in gallery grid overlay, e.g. "MARANASATI")
 * - subtitle: string (grid overlay caption)
 * - thumbnail: string (image URL for grid; use an imported local asset or external URL; falls back to images[0] if omitted)
 * - date: string (e.g. "2.4.2025 - 17.5.2025")
 * - images: string[] (carousel image URLs; can mix imported assets and external URLs)
 * - photographers: string[] (credit for carousel images)
 * - description: string[] (paragraphs for the detail page)
 * - credits: { label: string, names: string }[]
 * - links: { url: string, label?: string }[]
 */

// Import local images here so the bundler includes them. Use the variable in thumbnail or images.
import profilePicture from "../assets/webp/profilePicture.webp";

export const projects = [
  {
    id: 1,
    slug: "domicile",
    title: "Domicile",
    titleGrid: "DOMICILE",
    subtitle: "A short caption here",
    thumbnail: "https://picsum.photos/id/1025/800/800",
    date: null,
    images: ["https://picsum.photos/id/1025/800/600"],
    photographers: [],
    description: ["Project description to be added."],
    credits: [],
    links: [],
  },
  {
    id: 2,
    slug: "maranasati",
    title: "Maranasati",
    titleGrid: "MARANASATI",
    subtitle: "— our ink continues...",
    thumbnail: profilePicture,
    date: "2.4.2025 - 17.5.2025",
    images: [
      "https://picsum.photos/id/1011/800/600",
      "https://picsum.photos/id/1015/800/600",
      "https://picsum.photos/id/1018/800/600",
      "https://picsum.photos/id/1020/800/600",
      "https://picsum.photos/id/1022/800/600",
      "https://picsum.photos/id/1025/800/600",
    ],
    photographers: ["Aatu Nurminen"],
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
    credits: [
      { label: "Konsepti", names: "Joel Härkönen, Kalle Nurminen, Veli-Ville Sivén" },
      { label: "Ohjaus", names: "Joel Härkönen" },
      { label: "Lavastus", names: "Kalle Nurminen" },
      { label: "Musiikin sävellys ja sovitus", names: "Veli-Ville Sivén ja työhryhmä" },
      { label: "Äänisuunnittelu", names: "Veli-Ville Sivén" },
      { label: "Maskeeraus ja kampaussuunnittelu", names: "Veera Anttila" },
      { label: "Valosuunnittelu", names: "Aarne Turunen" },
      { label: "Sirkuskonsultit", names: "Jenni Lehtinen ja Sasu Peistola" },
    ],
    links: [
      { url: "https://teatteri.ouka.fi/naytelma/post-kabaree/", label: "https://teatteri.ouka.fi/naytelma/post-kabaree/" },
    ],
  },
  {
    id: 3,
    slug: "archive",
    title: "Archive",
    titleGrid: "ARCHIVE",
    subtitle: "Fog / memory / street",
    thumbnail: "https://picsum.photos/id/1005/800/800",
    date: null,
    images: ["https://picsum.photos/id/1005/800/600"],
    photographers: [],
    description: ["Project description to be added."],
    credits: [],
    links: [],
  },
  {
    id: 4,
    slug: "still-life",
    title: "Still Life",
    titleGrid: "STILL LIFE",
    subtitle: "Red glove study",
    thumbnail: "https://picsum.photos/id/1035/800/800",
    date: null,
    images: ["https://picsum.photos/id/1035/800/600"],
    photographers: [],
    description: ["Project description to be added."],
    credits: [],
    links: [],
  },
  {
    id: 5,
    slug: "gesture",
    title: "Gesture",
    titleGrid: "GESTURE",
    subtitle: "Hands in light",
    thumbnail: "https://picsum.photos/id/1027/800/800",
    date: null,
    images: ["https://picsum.photos/id/1027/800/600"],
    photographers: [],
    description: ["Project description to be added."],
    credits: [],
    links: [],
  },
];

/**
 * @param {string} slug
 * @returns {typeof projects[0] | null}
 */
export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) ?? null;
}
