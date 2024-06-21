import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../enums/language.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  translator = inject(TranslateService);
  readonly languages = Language; //readonly is used to prevent the languages property from being modified

  ngOnInit() {
    this.translator.setDefaultLang(Language.SPANISH);
  }

  switchLanguage(language: string) {
    this.translator.use(language);
  }
}
