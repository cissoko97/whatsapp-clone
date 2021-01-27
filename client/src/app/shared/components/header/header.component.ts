import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Input() icon1: string = '';
  @Input() icon2: string = '';
  @Input() icon3: string = '';


  @Output() icon1OutPut: EventEmitter<any> = new EventEmitter();
  @Output() icon2OutPut: EventEmitter<any> = new EventEmitter();
  @Output() icon3OutPut: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onIcon1Click() {
    this.icon1OutPut.emit(null);
    console.log("icon 1");

  }

  onIcon2Click() {
    this.icon2OutPut.emit(null);
    console.log("icon 2");

  }

  onIcon3Click() {
    this.icon3OutPut.emit(null);
    console.log("icon 3");
  }


}
