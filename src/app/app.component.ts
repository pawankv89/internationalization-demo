import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'internationalization-demo';
  translocoService: TranslocoService;
  constructor(translocoService: TranslocoService) {
    this.translocoService = translocoService;
  }

  useLanguage(language: string): void {
    this.translocoService.setActiveLang(language);
    //document.location.reload();
    const title = this.translocoService.translate('TITLE');
    console.log('TITLE ', title);
  }
}
