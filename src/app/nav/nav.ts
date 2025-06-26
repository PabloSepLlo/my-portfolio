import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../_services/translation-service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav {

  constructor(public translationService: TranslationService) {}

}
