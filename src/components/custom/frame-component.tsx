import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import BlurImage from './blur-image';

interface FrameComponentProps {
    images: string[]; // mảng ảnh
    videos?: string[]; // mảng video (optional)
    video?: string; // hoặc là video đơn (optional)
    width: string;
    height: string;
    className?: string;
    label: string;
    borderSize: number; // dùng chung từ defaultProps luôn nha
    borderRadius: number;
}

export function FrameComponent({
    images,
    videos,
    video,
    width,
    height,
    className = '',
    label,
    borderSize,
    borderRadius,
}: FrameComponentProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Ưu tiên mảng videos nếu có; nếu chỉ có video đơn thì bọc thành mảng
    const videoList = videos ? videos : video ? [video] : [];

    // Khi hover có video => ưu tiên video, không thì ảnh
    const mediaList = isHovered && videoList.length > 0 ? videoList : images;

    const nextMedia = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % mediaList.length);
    };

    const prevMedia = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setCurrentIndex(
            (prev) => (prev - 1 + mediaList.length) % mediaList.length,
        );
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        // Nếu không có video, và có ảnh thứ 2 khác ảnh đầu => chuyển sang ảnh đó
        if (
            videoList.length === 0 &&
            images.length > 1 &&
            images[0] !== images[1]
        ) {
            setCurrentIndex(1);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setCurrentIndex(0);
    };

    return (
        <div
            className={`relative ${className}`}
            style={{
                width,
                height,
                overflow: 'hidden',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                style={{
                    width: `${borderSize}%`,
                    height: `${borderSize}%`,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    overflow: 'hidden',
                    borderRadius: `${borderRadius}px`,
                }}
            >
                {isHovered && videoList.length > 0 ? (
                    // Video chỉ load/autoPlay khi hover => đỡ “nặng”
                    <video
                        src={mediaList[currentIndex]}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="none" // hoặc "metadata", tuỳ bạn muốn tối ưu
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                ) : (
                    // Sử dụng Next.js Image với loading="lazy" để giảm giật/lag
                    <Image
                        src={mediaList[currentIndex]}
                        alt={label}
                        fill // Thay cho layout="fill" trong Next.js 13
                        style={{ objectFit: 'cover' }}
                        loading="lazy" // Lazy load
                        quality={75} // Giảm chất lượng chút để giảm size
                    />
                )}
            </div>
            {isHovered && mediaList.length > 1 && (
                <>
                    <div className="absolute bottom-0 left-0 right-0 z-10 bg-black bg-opacity-50 p-2">
                        <Label className="font-bold text-white">{label}</Label>
                    </div>
                    <Button
                        onClick={prevMedia}
                        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 transform rounded-full bg-gray-700 p-2 text-white"
                    >
                        <ChevronLeft />
                    </Button>
                    <Button
                        onClick={nextMedia}
                        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 transform rounded-full bg-gray-700 p-2 text-white"
                    >
                        <ChevronRight />
                    </Button>
                </>
            )}
        </div>
    );
}
