import { Component, Input } from '@angular/core';
import { Experience } from '../_models/Experience';
import { TranslationService } from '../_services/translation-service';

@Component({
  selector: 'app-experience-card',
  imports: [],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.scss'
})
export class ExperienceCard {
  @Input() experience!: Experience;
  constructor(public translationService: TranslationService) {

  }
}

