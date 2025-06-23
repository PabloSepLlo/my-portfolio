import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
      {
        id: 0,
        name: "Galeno",
        summary: "Galeno es una aplicación de gestión de pacientes",
        logo: "assets/logo_simple_blanco.jpg",
        description: "Descripción de Galeno",
        projectLink: "https://github.com/PabloSepLlo/GALENO",
        tags: ["assets/logos/php.svg", "assets/logos/javascript.svg", "assets/logos/mysql.svg", "assets/logos/bootstrap.svg", "assets/logos/html5.svg", "assets/logos/css3.svg"],
        pictures: ["assets/GALENO/menu.png", "assets/GALENO/formularios.png", "assets/GALENO/consultas.png", "assets/GALENO/informes.png"]
      },
      {
        id: 1,
        name: "Lab .Net",
        logo: "assets/linkedin.jpeg",
        summary: "Diferentes proyectos de práctica para Backen en .Net",
        description: '',
        projectLink: '',
        tags: [],
        pictures: ["assets/logo_simple_blanco.jpg", "assets/logo_simple_blanco.jpg"]
      }
    ];

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) {
    let project = this.projects.find(project => project.id == id);
    return project;
  }
}
