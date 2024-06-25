import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../../shared/enums/language.enum';

@Component({
  selector: 'app-language-menu',
  templateUrl: './language-menu.component.html',
  styleUrl: './language-menu.component.scss',
})
export class LanguageMenuComponent implements OnInit {
  translator = inject(TranslateService);
  readonly languages = Language; //readonly is used to prevent the languages property from being modified

  ngOnInit() {
    this.translator.setDefaultLang(Language.SPANISH);
  }

  switchLanguage(language: string) {
    this.translator.use(language);
  }
}
