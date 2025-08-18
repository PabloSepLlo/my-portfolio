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
          en: "Galeno is a patient data management and consultation application designed for clinics and healthcare professionals",
          es: "Galeno es una aplicación de gestión y consulta de datos de pacientes, orientado a clínicas o profesionales de la salud"
        },
        logo: "assets/logo_simple_blanco.jpg",
        description: {
          en: "Galeno is a management and consultation system tailored for patients receiving geriatric home care. The application allows users to enter and edit patient data, perform queries, and generate reports.",
          es: "Galeno es un sistema de gestion y consulta adaptado para pacientes que se encuentran en regimen de asistencia domiciliaria geriátrica. La aplicación permite introducir datos de pacientes, editarlos, realizar consultas y generar informes"
        },
        projectLink: "https://github.com/PabloSepLlo/GALENO",
        tags: ["assets/logos/php.svg", "assets/logos/javascript.svg", "assets/logos/mysql.svg", "assets/logos/bootstrap.svg", "assets/logos/html5.svg", "assets/logos/css3.svg"],
        pictures: ["assets/GALENO/menu.png", "assets/GALENO/formularios.png", "assets/GALENO/consultas.png", "assets/GALENO/informes.png"]
      },
      {
        id: 1,
        name: "Authentication .Net Lab",
        logo: "assets/logos/dotnetcore.svg",
        summary: {
          en: "Personal learning and experimentation space focused on Backend technologies, with the goal of exploring modern design patterns and architectural best practices to build a solid foundation for authentication in .NET applications — keeping a modular, testable, and scalable approach.",
          es: "Espacio personal de aprendizaje y experimentación con tecnologías Backend con el objetivo de explorar patrones de diseño modernos y buenas prácticas de arquitectura para construir una base sólida de autenticación en aplicaciones .NET, manteniendo un enfoque modular, testable y escalable."
        },
        description: {
          en: "This project is a practical lab focused on implementing JWT-based authentication, applying the principles of CQRS (Command and Query Responsibility Segregation) and Clean Architecture in .NET.",
          es: "Este proyecto es un laboratorio práctico centrado en la implementación de autenticación basada en JWT, utilizando los principios de CQRS (Command and Query Responsibility Segregation) y una arquitectura limpia (Clean Architecture) en .NET."
        },
        projectLink: "https://github.com/PabloSepLlo/DotNetLabAuth",
        tags: ["assets/logos/dot-net.svg", "assets/logos/dotnetcore.svg","assets/logos/swagger.svg"],
        pictures: ["assets/lab/code.png", "assets/lab/swagger.png", "assets/lab/ddd.jpg", "assets/lab/.net.png"]
      },
      {
        id: 2,
        name: "My Portfolio",
        logo: "assets/logos/angular.svg",
        summary: {
          en: "Portfolio developed with Angular",
          es: "Portfolio desarrollado en Angular"
        },
        description: {
          en: "This portfolio was developed using Angular and serves both as a presentation of my work and a demonstration of my frontend development skills. It includes an integrated translation service supporting both English and Spanish, highlighting internationalization features and a clean application architecture",
          es: "Este portafolio ha sido desarrollado utilizando Angular y funciona tanto como una presentación de mi trabajo como una demostración de mis habilidades en desarrollo frontend. Incluye un servicio de traducción integrado para soportar tanto inglés como español, destacando características de internacionalización y una arquitectura limpia de la aplicación"
        },
        projectLink: "https://github.com/PabloSepLlo/my-portfolio",
        tags: ["assets/logos/angular.svg", "assets/logos/typescript.svg", "assets/logos/bootstrap.svg", "assets/logos/html5.svg", "assets/logos/sass.svg"],
        pictures: ["assets/PORTFOLIO/projects.png", "assets/PORTFOLIO/sobre_es.png", "assets/PORTFOLIO/sobre_en.png", "assets/PORTFOLIO/service.png"]
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
