import { useState } from "react"
import { Project, IProjectRepo } from "../core/entities/project"

const useProjects = (repo: IProjectRepo) => {
    const [projects] = useState<Project[]>(repo.getProjects())

    return {
        projects
    }
}

interface ProjectListProps {
    repo: IProjectRepo
}

const ProjectList = (props: ProjectListProps) => {
    const { projects } = useProjects(props.repo)

    return <div className="project-list">
        {projects.map((project: Project) => <li>{project.ownerRepo}</li>)}
    </div>
}

export default ProjectList