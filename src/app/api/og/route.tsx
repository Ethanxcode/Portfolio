import { ImageResponse } from 'next/og';

export async function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    background: 'white',
                }}
            >
                {/* Chèn ảnh từ link */}
                <img
                    src="/og-image.jpg"
                    alt="Ethan Tran | Full-Stack Developer"
                    style={{
                        width: 200,
                        height: 200,
                        objectFit: 'cover',
                        marginBottom: 20,
                    }}
                />
            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    );
}
