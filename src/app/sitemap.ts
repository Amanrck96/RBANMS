import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.rbanmsfgc.edu.in';

  const routes = [
    '',
    '/about',
    '/academics',
    '/academics/courses-offered',
    '/admission',
    '/facilities',
    '/events',
    '/blog',
    '/gallery',
    '/contact',
    '/faq',
    '/career',
    '/alumni/activity',
    '/code-of-conduct',
    '/statutory-cells',
    '/governance',
    '/rti',
    '/naac',
    '/iqac',
    '/privacy-policy',
    '/terms-of-service',
    '/disclaimer',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
