import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

type TranslationKey = 
  | 'about.title' 
  | 'about.description'
  | 'we.description'
  | 'header.download-cv'
  | 'nav.home'
  | 'nav.portfolio'
  | 'nav.work-experience';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private langSubject = new BehaviorSubject<'es' | 'en'>('es');
  public currentLang$ = this.langSubject.asObservable().pipe(distinctUntilChanged());

  private translations = {
    es: {
      'about.title': 'Sobre mí',
      'about.description': '¡Hola! Soy Pablo, desarrollador Full-Stack con un especial interés en el desarrollo Backend.\n\nMe apasiona construir soluciones tecnológicas eficientes, escalables y bien estructuradas, cuidando tanto la lógica del servidor como la experiencia del usuario final.\n\nSoy una persona curiosa y en constante aprendizaje, siempre explorando nuevas tecnologías. Me gusta colaborar en equipos ágiles, escribir código limpio y documentado, y participar activamente en revisiones de código y buenas prácticas de desarrollo.\n\nActualmente, estoy en búsqueda de oportunidades para crecer profesionalmente, contribuir en proyectos interesantes y seguir aprendiendo de cada desafío.',
      'we.description': 'Prácticas del Grado Superior en Desarrollo de Aplicaciones Web.\n\nParticipación en el desarrollo de funcionalidades tanto en .NET como en Angular, aplicando principios de Clean Architecture y Domain-Driven Design (DDD) en un entorno ágil basado en la metodología Scrum.\n\nEl ciclo de desarrollo se gestionó a través de Azure DevOps, implementando tareas definidas en PBIs (Product Backlog Items), así como la creación y gestión de Pull Requests.\n\nDesarrollo de un servicio de mensajería utilizando Azure Service Bus Emulator para pruebas locales e investigación y familiarización sobre ASP.NET Core Aspire, con su enfoque modular y comunicaciones entre servicios distribuidos.',
      'header.download-cv': 'Descargar CV',
      'nav.home': 'Inicio',
      'nav.portfolio': 'Proyectos',
      'nav.work-experience': 'Experiencia'
    },
    en: {
      'about.title': 'About Me',
      'about.description': 'Hi! I am Pablo, a Full-Stack Developer with a special interest in Backend development.\n\nI am passionate about building efficient, scalable, and well-structured technological solutions, paying close attention to both server-side logic and the end-user experience.\n\nI am a curious and continuous learner, always exploring new technologies. I enjoy collaborating in agile teams, writing clean and well-documented code, and actively participating in code reviews and best development practices.\n\nCurrently, I am looking for opportunities to grow professionally, contribute to meaningful projects, and keep learning from every challenge.',
      'we.description': 'Internship in Grado Superior en Desarrollo de Aplicaciones Web.\n\nParticipation in the development of features using both .NET and Angular, applying principles of Clean Architecture and Domain-Driven Design (DDD) within an agile environment based on the Scrum methodology.\n\nThe development cycle was managed through Azure DevOps, implementing tasks defined in PBIs (Product Backlog Items), as well as creating and managing Pull Requests.\n\nDevelopment of a messaging service using Azure Service Bus Emulator for local testing, along with research and familiarization with ASP.NET Core Aspire, focusing on its modular approach and communication between distributed services.',
      'header.download-cv': 'Download CV',
      'nav.home': 'Home',
      'nav.portfolio': 'Portfolio',
      'nav.work-experience': 'Work Experience'
    }
  };

  constructor() {
    const savedLang = this.getSavedLanguage();
    this.langSubject.next(savedLang);
  }

  private getSavedLanguage(): 'es' | 'en' {
    if (typeof window !== 'undefined' && window.localStorage) {
      const lang = localStorage.getItem('lang');
      return (lang === 'es' || lang === 'en') ? lang : 'es';
    }
    return 'es';
  }

  setLanguage(lang: 'es' | 'en'): void {
    this.langSubject.next(lang);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('lang', lang);
    }
  }
  
  translate(key: TranslationKey): string {
    return this.translations[this.langSubject.value][key] || key;
  }

  modalTranslate(content: {en: string; es:string} | string) : string {
    if (typeof content === 'string') return content;
    return content[this.langSubject.value] || content.en;
  }

  getCurrentLang(): string {
    return this.langSubject.value;
  }
}