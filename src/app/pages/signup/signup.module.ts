import { SignupComponent } from './component/signup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import { EsButtonDirective } from 'src/app/directives/es-button.directive';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    TranslateModule,
    MatButtonModule,
    MatRippleModule,
    FormsModule,
  ],
  declarations: [SignupComponent,EsButtonDirective]
})
export class SignupModule { }
