import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../_models/Project';
import { NgbModal, NgbModalModule, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ProjectModal } from '../project-modal/project-modal';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, NgbModalModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard {
  @Input() project: Project = {} as Project;
  modalRef?: NgbModalRef;

  constructor(private modalService: NgbModal) {

  }

  OpenProjectModal() {

    const modalOptions: NgbModalOptions = {
      size: "lg",
      centered: true
    };
    
    this.modalRef = this.modalService.open(ProjectModal, modalOptions);

    this.modalRef.componentInstance.project = this.project;
  }
}
