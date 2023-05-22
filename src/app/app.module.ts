import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageContactsComponent } from './manage-contacts/manage-contacts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompaignsComponent } from './compaigns/compaigns.component';
import { TemplatesComponent } from './templates/templates.component';
import { UsersComponent } from './users/users.component';
import { DevicesComponent } from './devices/devices.component';
import { BotComponent } from './bot/bot.component';
import { BillingComponent } from './billing/billing.component';
import { NotesComponent } from './notes/notes.component';
import { HelpComponent } from './help/help.component';
import { VideosComponent } from './videos/videos.component';
import { HlpComponent } from './hlp/hlp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidenavComponent,
    ManageContactsComponent,
    DashboardComponent,
    CompaignsComponent,
    TemplatesComponent,
    UsersComponent,
    DevicesComponent,
    BotComponent,
    BillingComponent,
    NotesComponent,
    HelpComponent,
    VideosComponent,
    HlpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
