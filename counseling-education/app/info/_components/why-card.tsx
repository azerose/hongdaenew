import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

interface iProps {
    img: string;
    alt: string;
    title: string;
    description: string;
}

const WhyCard = ({ img, alt, title, description }: iProps) => {
    return (
        <Card className="overflow-hidden">
            <div className="aspect-video w-full overflow-hidden relative">
                <Image
                    src={img}
                    alt={alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-gray-500 mb-4">{description}</p>
            </CardContent>
        </Card>
    );
};

export default WhyCard;
