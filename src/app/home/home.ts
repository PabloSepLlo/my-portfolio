import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslationService } from '../_services/translation-service';

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  constructor(private titleService: Title, public translationService: TranslationService) {
    this.titleService.setTitle("Pablo Sepúlveda Llorente - Home")
  }
  
}
