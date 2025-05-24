export interface MenuItem {
    id: number;
    title: string;
    link: string;
    submenu?: {
        title: string;
        link: string;
    }[];
}
