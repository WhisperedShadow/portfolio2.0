import * as fs from "fs";

const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); 
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const pages = [
  { url: "/", priority: "1.0" },
  { url: "/about", priority: "0.9" },
  { url: "/projects", priority: "0.8" },
  { url: "/contact", priority: "0.7" },
];

const generateSitemap = () => {
  const currentDate = getCurrentDate();

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          (page) => ` 
      <url>
          <loc>https://duraiponsingh.tech${page.url}</loc>
          <lastmod>${currentDate}</lastmod> 
          <changefreq>monthly</changefreq>
          <priority>${page.priority}</priority>
      </url>
      `
        )
        .join("")}
  </urlset>`;

  fs.writeFileSync("./public/sitemap.xml", sitemapContent, "utf8");
};

generateSitemap();