const fs = require("fs");


async function fetchRoutes() {
    const staticRoutes = [
        { url: "https://www.shawnastaff.com/", lastModified: new Date().toISOString(), changeFreq: "daily" },
        { url: "https://www.shawnastaff.com/about", lastModified: new Date().toISOString(), changeFreq: "daily" },
        { url: "https://www.shawnastaff.com/contact", lastModified: new Date().toISOString(), changeFreq: "daily" },
        { url: "https://www.shawnastaff.com/projects", lastModified: new Date().toISOString(), changeFreq: "daily" },
    ];
    const routes = [...staticRoutes];
    return routes;
};

function buildSitemap(data) {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${data.map(
        ({ url, lastModified, changeFreq }) => `<url>
    <loc>${url}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${changeFreq}</changefreq>
  </url>`
    )
            .join("\n")}
</urlset>`;

    return xml;
}


async function generateSitemap() {
    const data = await fetchRoutes();
    const sitemapXml = buildSitemap(data);

    fs.writeFileSync("public/sitemap.xml", sitemapXml, "utf-8");
}

generateSitemap();
