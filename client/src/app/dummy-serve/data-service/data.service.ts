import { Injectable } from '@angular/core';
import { IContact } from 'src/app/models';
import { CONTACTS } from '../dummy_data';


@Injectable()
export class DataService {

  constructor() { }

  getContacts(): Array<IContact> {
    return CONTACTS;
  }
}
