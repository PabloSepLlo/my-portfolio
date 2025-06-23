import { Component, OnInit } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../_services/projects';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ ProjectCard, CommonModule ],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio implements OnInit {

  projects = {} as Project[];

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle("Pablo Sepúlveda Llorente - Portfolio")
  }

  ngOnInit(): void {
      this.projects = this.projectService.GetProjects();
  }
}
