import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageContactsRoutes } from './manage-contacts.routing';
import { ManageContactsService } from './manage-contacts.service';
import { ContactsComponent } from './components/contacts/contacts.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ListsComponent } from './components/lists/lists.component';
import { MatIconModule } from '@angular/material/icon';
import { AddListComponent } from './components/lists/addList/addList.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ManageContactsComponent } from './component/manage-contacts.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ManageContactsRoutes,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    ManageContactsComponent,
    ContactsComponent,
    ListsComponent,
    AddListComponent
  ],
  providers:[ManageContactsService]
})
export class ManageContactsModule { }
