export type Social = {
    name: string;
    link: string;
    icon: string;
}


export type Profile = {
    name: string;
    position: string;
    avater: string;
    description: string;
    socials: Social[];
};