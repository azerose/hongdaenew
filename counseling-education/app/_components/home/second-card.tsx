import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface iProps {
    title: string;
    desc: string;
    icon: LucideIcon;
}

const SecondCard = ({ title, desc, icon: Icon }: iProps) => {
    return (
        <>
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="rounded-full bg-teal-100 p-3">
                        <Icon className="h-6 w-6 text-teal-700" />
                    </div>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-gray-500">{desc}</p>
                </CardContent>
            </Card>
        </>
    );
};

export default SecondCard;
