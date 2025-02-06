import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync } from "fs";

async function generateSitemap() {
    const links = [
        { url: "/", changefreq: "weekly", priority: 1.0 },
    ];

    const stream = new SitemapStream({ hostname: "https://www.lewyindev.vercel.app" });
    links.forEach((link) => stream.write(link));
    stream.end();

    const sitemap = await streamToPromise(stream).then((data) => data.toString());

    writeFileSync("./public/sitemap.xml", sitemap);
}

generateSitemap();
