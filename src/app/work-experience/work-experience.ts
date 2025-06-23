import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [],
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.scss'
})
export class WorkExperience {
    constructor(private titleService: Title) {
    this.titleService.setTitle("Pablo Sepúlveda Llorente - Work Experience")
  }
}
