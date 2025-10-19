import { Injectable } from '@angular/core';
import { Experience } from '../_models/Experience';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  experiences: Experience[] = [
      {
        id: 0,
        name: "ICP",
        logo: "assets/Logo-ICP.png",
        description: {
          en: ".NET Junior Developer.\n\nParticipation in the design, development, and maintenance of web applications using technologies such as ASP.NET Core, Blazor, and SQL Server.\n\nContributed to the development of new features and the optimization of existing modules, applying best programming practices and design patterns focused on scalability and maintainability.\n\nResponsible for the maintenance and evolution of existing applications, ensuring proper operation and adapting them to new business requirements.\n\nHandled technical issue resolution, analyzing and fixing errors efficiently to guarantee system stability and performance.",
          es: "Desarrollador .Net Junior.\n\nParticipación en el diseño, desarrollo y mantenimiento de aplicaciones web utilizando tecnologías como ASP.NET Core, Blazor y SQL Server.\n\nContribuciön al desarrollo de nuevas funcionalidades y a la optimización de módulos existentes, aplicando buenas prácticas de programación y patrones de diseño orientados a la escalabilidad y mantenibilidad del software..\n\nRealización de mantenimiento y evolución de aplicaciones existentes, asegurando su correcto funcionamiento y adaptándolas a nuevas necesidades del negocio.\n\nResolución de incidencias técnicas, analizando y corrigiendo errores de manera eficiente para garantizar la estabilidad y el rendimiento del sistema."
        }
      },
      {
        id: 0,
        name: "Logisfashion",
        logo: "assets/logis.webp",
        description: {
          en: "Internship in 'Grado Superior en Desarrollo de Aplicaciones Web'.\n\nParticipation in the development of features using both .NET and Angular, applying principles of Clean Architecture and Domain-Driven Design (DDD) within an agile environment based on the Scrum methodology.\n\nThe development cycle was managed through Azure DevOps, implementing tasks defined in PBIs (Product Backlog Items), as well as creating and managing Pull Requests.\n\nDevelopment of a messaging service using Azure Service Bus Emulator for local testing, along with research and familiarization with ASP.NET Core Aspire, focusing on its modular approach and communication between distributed services.",
          es: "Prácticas del Grado Superior en Desarrollo de Aplicaciones Web.\n\nParticipación en el desarrollo de funcionalidades tanto en .NET como en Angular, aplicando principios de Clean Architecture y Domain-Driven Design (DDD) en un entorno ágil basado en la metodología Scrum.\n\nEl ciclo de desarrollo se gestionó a través de Azure DevOps, implementando tareas definidas en PBIs (Product Backlog Items), así como la creación y gestión de Pull Requests.\n\nDesarrollo de un servicio de mensajería utilizando Azure Service Bus Emulator para pruebas locales e investigación y familiarización sobre ASP.NET Core Aspire, con su enfoque modular y comunicaciones entre servicios distribuidos."
        }
      }
    ];

  constructor() { }

  GetExperiences() {
    return this.experiences;
  }

  GetExperienceById(id: number) {
    let experience = this.experiences.find(experience => experience.id == id);
    return experience;
  }
}
