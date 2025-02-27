// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://ethantran.is-a.dev',
            lastModified: new Date().toISOString(),
        },
    ];
}
