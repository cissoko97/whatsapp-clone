import { Component } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'whatsapp-clone';

  native: String = '';
  darkMode = false;

  constructor(private _themeService: ThemeService) {

  }

  addEmoji(event: any) {
    console.log(event?.emoji?.native);
    this.native = `Bonjour ${event?.emoji?.native} D'accord Mais je ne sais pas comment faire ça`;
    this.darkMode = !this.darkMode;
  }

  changeTheme() {
    this._themeService.setThemeValue();
  }
}
