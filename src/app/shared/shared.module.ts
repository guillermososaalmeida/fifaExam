import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

//@MATERIAL
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

//@I18N
import { TranslateModule } from '@ngx-translate/core';
import { LanguageMenuComponent } from '../components/language-menu/language-menu.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LanguageMenuComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    TranslateModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
