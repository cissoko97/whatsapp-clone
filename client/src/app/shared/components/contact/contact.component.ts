import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/dummy-serve/data-service/data.service';
import { IContact } from 'src/app/models';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  CONTACTS: Array<IContact> = new Array();
  constructor(private _themeService: ThemeService, private _dummyData: DataService) { }

  ngOnInit(): void {
    this.CONTACTS = this._dummyData.getContacts();
  }

  changeTheme() {
    this._themeService.setThemeValue();
  }

  log() {
  }

}
