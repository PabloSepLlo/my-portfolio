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
          en: "Internship in 'Grado Superior en Desarrollo de Aplicaciones Web'.\n\nParticipation in the development of features using both .NET and Angular, applying principles of Clean Architecture and Domain-Driven Design (DDD) within an agile environment based on the Scrum methodology.\n\nThe development cycle was managed through Azure DevOps, implementing tasks defined in PBIs (Product Backlog Items), as well as creating and managing Pull Requests.\n\nDevelopment of a messaging service using Azure Service Bus Emulator for local testing, along with research and familiarization with ASP.NET Core Aspire, focusing on its modular approach and communication between distributed services.",
          es: "Desarrollador .Net Junior.\n\nUso de tecnologías ASP.NET Core, Blazor y SQL Server.\n\nDesarrollo de nuevas funcionalidades.\n\nMantenimiento de aplicaciones web.\n\nResolución de incidencias."
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
