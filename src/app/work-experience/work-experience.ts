import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ExperiencesService } from '../_services/experiences';
import { ExperienceCard } from '../experience-card/experience-card';
import { CommonModule } from '@angular/common';
import { Experience } from '../_models/Experience';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [ ExperienceCard, CommonModule, NgbCarouselModule ],
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.scss'
})
export class WorkExperience implements OnInit {

  experiences = {} as Experience[];

  constructor(private titleService: Title, public experienceService: ExperiencesService) {
    this.titleService.setTitle("Pablo Sepúlveda Llorente - Work Experience")
  }

  ngOnInit(): void {
      this.experiences = this.experienceService.GetExperiences();
  }
}
