import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { UsButtonComponent } from './components/us-button/us-button.component';
import { SrButtonComponent } from './components/sr-button/sr-button.component';
import { UsToasterComponent } from './components/us-toaster/us-toaster.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SideBarComponent,
    FooterComponent,
    HeaderComponent,
    UsButtonComponent ,
    SrButtonComponent ,
    UsToasterComponent
  ],
  exports:[
    SideBarComponent,
    FooterComponent,
    HeaderComponent,
    UsButtonComponent ,
    SrButtonComponent ,
    UsToasterComponent
  ]
})
export class SharedModule { }
