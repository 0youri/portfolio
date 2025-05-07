export type Skill = {
    name: string;
    level?: string;
};

export type Skills = {
    name: string;
    icon: string;
    data: Skill[];
};

