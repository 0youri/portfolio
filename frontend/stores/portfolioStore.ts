import { defineStore } from 'pinia'

interface Portfolio {
    id: number;
    header: string;
    username: string;
    position: string;
    description: string;
    avatar: object;
    socialPlatforms: Array<object>;
    skills: Array<object>;
    projects: Array<object>;
}

interface Project {
    id: number;
    name: string;
    tools: string;
    link: string;
    github: string;
    company: string;
    background: object;
}

export const usePortfolioStore = defineStore("portfolioStore", () => {

    const { find } = useStrapi()
    const portfolio = ref<Portfolio | null>(null)
    const projects = ref<Array<Project> | null>(null)

    async function getPortfolio() {
        const { data } = await find<Portfolio>("portfolios", {
            populate: {
                socialPlatforms: {
                    populate: "*"
                },
                skills: {
                    populate: "*"
                },
                projects: {
                    populate: "*"
                }
            }
        }).then(res => {
            return { data: res.data }
        }).catch(e => { throw e })
        portfolio.value = data[0]
    }

    async function getProjects() {
        const { data } = await find<Portfolio>("portfolios", {
            populate: {
                projects: {
                    populate: "*"
                }
            }
        }).then(res => {
            return { data: res.data }
        }).catch(e => { throw e })

        projects.value = data[0].projects as Project[]
    }

    return {
        getPortfolio, portfolio,
        getProjects, projects
    }
});