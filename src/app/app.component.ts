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
    // this language will be used as a fallback when a translation isn't found in the current language
    //translate.setDefaultLang('fr');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    //translate.use('fr');


  //   translocoService.get('TITLE').subscribe((res: string) => {
  //     console.log('TITLE ', res);
  //     //=> 'hello world'
  // });
}

useLanguage(language: string): void {
  this.translocoService.setActiveLang(language);
  //document.location.reload();
}
}
