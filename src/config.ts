export const SITE = {
  website: "https://bz-ev.com/", // replace this with your deployed domain
  author: "Piotr",
  desc: "A daily driver’s take on Toyota’s first full EV, bz4x — real-world energy use, everyday charging, and smart home integrations ",
  // More SEO-friendly site title — includes keyword 'Toyota bZ4X' and 'EV'
  title: "bZ-EV — Toyota bZ4X practical EV blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showTags: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Warsaw", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
