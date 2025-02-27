import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: ['/', '/api/og/*'],
            disallow: [],
        },
        sitemap: 'https://ethantran.is-a.dev/sitemap.xml',
    };
}
