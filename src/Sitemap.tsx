import React from 'react';

const Sitemap = () => {
  const pages = [
    { path: '/', lastModified: '2023-03-01', priority: '1.0', changefreq: 'daily' },
    { path: '/about', lastModified: '2023-03-01', priority: '0.8', changefreq: 'monthly' },
    { path: '/services', lastModified: '2023-03-01', priority: '0.5', changefreq: 'monthly' },
    { path: '/projects', lastModified: '2023-03-01', priority: '0.5', changefreq: 'monthly' },
    { path: '/investors', lastModified: '2023-03-01', priority: '0.5', changefreq: 'monthly' },
    { path: '/media', lastModified: '2023-03-01', priority: '0.5', changefreq: 'monthly' },
    { path: '/careers', lastModified: '2023-03-01', priority: '0.5', changefreq: 'monthly' },
    { path: '/contact', lastModified: '2023-03-01', priority: '0.5', changefreq: 'monthly' },
    { path: '/not-found', lastModified: '2023-03-01', priority: '0.1', changefreq: 'never' },
  ];

  const generateSitemap = () => {
    return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">
        ${pages
          .map(
            (page) => `
            <url>
              <loc>${window.location.origin}${page.path}</loc>
              <lastmod>${page.lastModified}</lastmod>
              <priority>${page.priority}</priority>
              <changefreq>${page.changefreq}</changefreq>
            </url>`
          )
          .join('')}
      </urlset>`;
  };

  // Set the content type to XML
  const sitemapXML = generateSitemap();
  return (
    <div>
      <pre>{sitemapXML}</pre>
    </div>
  );
};

export default Sitemap;