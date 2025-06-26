export interface Project {
    id: number;
    name: string;
    logo: string;
    summary: {
        en: string,
        es: string
    };
    description: {
        en: string,
        es: string
    };
    projectLink: string;
    pictures: string[];
    tags: string[];
}