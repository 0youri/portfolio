export type Project = {
    rank: number;
    name: string;
    description: string;
    picture: string;
    tools: string[];
    link?: string | null;
    company?: string;
    github?: string;
};