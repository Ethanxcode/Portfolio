'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const convertToBase64 = async (url: string) => {
    const response = await fetch(url);
    const blob = await response.blob();

    return new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(blob);
    });
};

export default function BlurImage({ src, alt }: { src: string; alt: string }) {
    const [blurDataURL, setBlurDataURL] = useState<string | null>(null);

    useEffect(() => {
        async function loadBlurImage() {
            const base64 = await convertToBase64(src);
            setBlurDataURL(base64);
        }

        loadBlurImage();
    }, [src]);

    return (
        <Image
            src={src}
            alt={alt}
            fill
            style={{ objectFit: 'cover' }}
            loading="lazy"
            placeholder={blurDataURL ? 'blur' : 'empty'}
            blurDataURL={blurDataURL || undefined}
        />
    );
}
