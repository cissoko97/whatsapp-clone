import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { ChatViewComponent } from './components/chat-view/chat-view.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchFillComponent } from './components/search-fill/search-fill.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { DummyServeModule } from '../dummy-serve/dummy-serve.module';

@NgModule({
  declarations: [
    ContactInfoComponent,
    ChatViewComponent,
    ContactComponent,
    HeaderComponent,
    SearchFillComponent,
    ContactItemComponent
  ],
  imports: [
    CommonModule,
    DummyServeModule
  ],
  exports: [
    PickerModule,
    ChatViewComponent,
    ContactComponent,
    ContactInfoComponent,
    HeaderComponent,
    SearchFillComponent,
    ContactItemComponent
  ]
})
export class SharedModule { }
