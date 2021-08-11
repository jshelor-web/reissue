import { Project, IProjectRepo } from "../core/entities/project"

export class MemProjectRepo implements IProjectRepo {
    projects: Project[] = [
        {
            ownerRepo: "jshelor-web/reissue"
        }
    ]

    getProjects(): Project[] {
        return this.projects
    }
}