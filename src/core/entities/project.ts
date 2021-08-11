export interface Project {
    ownerRepo: string
}

export interface IProjectRepo {
    getProjects(): Project[]
}