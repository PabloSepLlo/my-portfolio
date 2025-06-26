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
        summary: {
          en: "Patient management application",
          es: "Galeno es una aplicación de gestión de pacientes"
        },
        logo: "assets/logo_simple_blanco.jpg",
        description: {
          en: "Patient management application",
          es: "Galeno es una aplicación de gestión de pacientes"
        },
        projectLink: "https://github.com/PabloSepLlo/GALENO",
        tags: ["assets/logos/php.svg", "assets/logos/javascript.svg", "assets/logos/mysql.svg", "assets/logos/bootstrap.svg", "assets/logos/html5.svg", "assets/logos/css3.svg"],
        pictures: ["assets/GALENO/menu.png", "assets/GALENO/formularios.png", "assets/GALENO/consultas.png", "assets/GALENO/informes.png"]
      },
      {
        id: 1,
        name: "Lab .Net",
        logo: "assets/linkedin.jpeg",
        summary: {
          en: "Patient management application",
          es: "Galeno es una aplicación de gestión de pacientes"
        },
        description: {
          en: "Patient management application",
          es: "Galeno es una aplicación de gestión de pacientes"
        },
        projectLink: '',
        tags: ["assets/logos/dot-net.svg", "assets/logos/dotnetcore.svg"],
        pictures: ["assets/logo_simple_blanco.jpg", "assets/logo_simple_blanco.jpg"]
      },
      {
        id: 1,
        name: "My portfolio",
        logo: "assets/linkedin.jpeg",
        summary: {
          en: "Patient management application",
          es: "Galeno es una aplicación de gestión de pacientes"
        },
        description: {
          en: "Patient management application",
          es: "Galeno es una aplicación de gestión de pacientes"
        },
        projectLink: '',
        tags: ["assets/logos/angular.svg", "assets/logos/typescript.svg", "assets/logos/bootstrap.svg", "assets/logos/html5.svg", "assets/logos/sass.svg"],
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
