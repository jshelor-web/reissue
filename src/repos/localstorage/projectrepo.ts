import { Project, IProjectRepo } from "../../core/entities/project"

export class ProjectRepo implements IProjectRepo {
    getProjects(): Project[] {
        const projectsStr = localStorage.getItem("projects")

        if (!projectsStr) {
            return []
        }

        return JSON.parse(projectsStr)
    }

    // [{"ownerRepo":"jshelor-web/reissue"},{"ownerRepo":"nwehr/reissue"}]
}