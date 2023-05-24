import { Component, OnInit, Renderer2 } from '@angular/core';
import { PluginsService } from 'src/app/services/plugins.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(public plugin:PluginsService,private render:Renderer2) {
  }
  ngOnInit(): void {
  }
  fixedSidebar(radio:any){
    radio.classList.toggle("switch");
    let body:any =document.querySelector(".default-layout");
    body.classList.toggle("resizable");

    let sidebar:any =document.querySelector(".sidebar-comp");
    sidebar.classList.toggle("sidebar-comp-fixed");

    let navbar:any =document.querySelector(".navbar-comp");
    navbar.classList.toggle("resizable-navbar");
  }

}
