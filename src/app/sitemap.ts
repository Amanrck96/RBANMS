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
    '/college-info',
    '/scholarships',
    '/departments',
    '/research',
    '/ncc',
    '/aicte',
    '/activities',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' || route === '/college-info') ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/college-info' ? 0.95 : 0.8,
  }));
}
