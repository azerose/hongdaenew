import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface iProps {
    img: string;
    alt: string;
    title: string;
    description: string;
    link: string;
}

const ProgramCard = ({ img, alt, title, description, link }: iProps) => {
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
                <div className="flex justify-center items-center">
                    <Link href={link}>
                        <Button variant="ghost" className="flex items-center gap-1 text-teal-600">
                            자세히 보기 <ArrowRight className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProgramCard;
