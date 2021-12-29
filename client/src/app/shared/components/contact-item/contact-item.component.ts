import { Component, Input, OnInit } from '@angular/core';
import { IContact } from 'src/app/models';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {

  @Input() detail?: IContact;
  constructor() { }

  ngOnInit(): void {
  }

}
