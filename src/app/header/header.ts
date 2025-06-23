import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  constructor(private renderer: Renderer2) {

  }
  DownloadFile() {
    const link = this.renderer.createElement("a");
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/CV Pablo Sepúlveda Llorente.pdf');
    link.setAttribute('download', 'CV Pablo Sepúlveda Llorente.pdf');
    link.click();
    link.remove();
  }
}
