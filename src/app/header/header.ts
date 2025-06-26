import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { TranslationService } from '../_services/translation-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit, OnDestroy {
  currentLang: 'es' | 'en' = 'es';
  private langSubscription!: Subscription;

  constructor(public translationService: TranslationService, private renderer: Renderer2) {}

  ngOnInit() {
    this.langSubscription = this.translationService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  changeLanguage(lang: 'es' | 'en') {
    this.translationService.setLanguage(lang);
  }

  DownloadFile() {
    const link = this.renderer.createElement("a");
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/CV Pablo Sepúlveda Llorente.pdf');
    link.setAttribute('download', 'CV Pablo Sepúlveda Llorente.pdf');
    link.click();
    link.remove();
  }

  ngOnDestroy() {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }
}