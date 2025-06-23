import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule],
  templateUrl: './project-modal.html',
  styleUrl: './project-modal.scss'
})
export class ProjectModal {
  @Input() project!: Project;

  constructor(public activeModal: NgbActiveModal) {

  }
}
