import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { MessagesRoutes } from './messages.routing';

@NgModule({
  imports: [
    CommonModule,
    MessagesRoutes
  ],
  declarations: [MessagesComponent,MessagesComponent]
})
export class MessagesModule { }
