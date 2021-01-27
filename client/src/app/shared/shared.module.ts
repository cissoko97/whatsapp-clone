import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { ChatViewComponent } from './components/chat-view/chat-view.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    ContactInfoComponent,
    ChatViewComponent,
    ContactComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PickerModule,
    ChatViewComponent,
    ContactComponent,
    ContactInfoComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
