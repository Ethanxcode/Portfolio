import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

export async function getBlurDataURL(imagePath: string) {
    try {
        const absolutePath = path.join(process.cwd(), 'public', imagePath);
        const imageBuffer = fs.readFileSync(absolutePath);

        const resizedImage = await sharp(imageBuffer)
            .resize(10) // Resize nhỏ lại để tối ưu base64
            .toBuffer();

        return `data:image/webp;base64,${resizedImage.toString('base64')}`;
    } catch (error) {
        console.error(error);
        return '';
    }
}
