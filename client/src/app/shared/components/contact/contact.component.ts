import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private _themeService: ThemeService) { }

  ngOnInit(): void {
  }

  changeTheme() {
    this._themeService.setThemeValue();
  }

  log() {
  }

}
