import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageContactsComponent } from './manage-contacts/manage-contacts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessageComponent } from './message/message.component';
import { ChatsComponent } from './chats/chats.component';
import { CompaignsComponent } from './compaigns/compaigns.component';
import { TemplatesComponent } from './templates/templates.component';
import { UsersComponent } from './users/users.component';
import { DevicesComponent } from './devices/devices.component';
import { BotComponent } from './bot/bot.component';
import { BillingComponent } from './billing/billing.component';
import { VideosComponent } from './videos/videos.component';
import { NotesComponent } from './notes/notes.component';
import { HlpComponent } from './hlp/hlp.component';

const routes: Routes = [
  {path:'' , redirectTo:'DashboardComponent', pathMatch:'full'} ,
  {path:'dashboard' , component:DashboardComponent} ,
  {path:'message' , component:MessageComponent} ,
  {path:'chats' , component:ChatsComponent} ,
  {path:'compaigns' , component:CompaignsComponent} ,
  {path:'templates' , component:TemplatesComponent} ,
  {path:'manage-contacts' , component:ManageContactsComponent} ,
  {path:'users' , component:UsersComponent} ,
  {path:'devices' , component:DevicesComponent} ,
  {path:'bot' , component:BotComponent} ,
  {path:'billing' , component:BillingComponent} ,
  {path:'manage-contacts' , component:ManageContactsComponent} ,
  {path:'videos' , component:VideosComponent} ,
  {path:'notes' , component:NotesComponent} ,
  {path:'help' , component:HlpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
