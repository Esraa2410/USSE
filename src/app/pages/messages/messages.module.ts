import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { MessagesRoutes } from './messages.routing';

@NgModule({
  imports: [
    CommonModule,
    MessagesRoutes,
    SharedModule
  ],
  declarations: [MessagesComponent,MessagesComponent]
})
export class MessagesModule { }
