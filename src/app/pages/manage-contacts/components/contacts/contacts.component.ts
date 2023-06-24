import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToasterServices } from 'src/app/shared/components/us-toaster/us-toaster.component';
import { ManageContactsService } from '../../manage-contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent  implements OnInit ,AfterViewInit {

  constructor(public dialog: MatDialog,
    private toaster: ToasterServices,
    private listService:ManageContactsService) {
  }
  ngOnInit() {
    this.getContacts();
    // this.addContact();
    // this.updateContact();
    // this.deleteContact();
    // this.contactsCount()
    // this.deleteContact();
    // this.undeleteList()
  }
  getContacts(){
  let shows=this.listService.display;
  let pageNum=this.listService.pageNum;
  let email=this.listService.email;
  let orderedBy=this.listService.orderedBy;
  let search=this.listService.search;
    this.listService.getContacts(email,shows,pageNum,orderedBy,search).subscribe(
      (res)=>{
      console.log("all contacts",res);
       },
       (err)=>{
         console.log(err);
       })
  }
  addContact(){
    this.listService.addContact("con2","98798399934","","","khamis.safy@gmail.com",["ls_44b7b8e2-87fa-4526-bfc7-c10ce5541397"]).subscribe(
      (res)=>{
        console.log("added successfully",res)
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  updateContact(){
    this.listService.updateContact("ct_7215c018-7c20-4a97-86f6-ae2e2b4a2ef0","update","098786876","company","note","khamis.safy@gmail.com").subscribe(
      (res)=>{
        console.log("updated successfully",res)
      },
      (err)=>{
        console.log(err)
      }
    )
  }
  deleteContact(){
    this.listService.deleteContact("khamis.safy@gmail.com",["ct_9ccb3954-33c2-4bf6-8045-0c66d929853e"]).subscribe(
      (res)=>{
        console.log("deleted successfully",res)
      },
      (err)=>{
        console.log(err) }
        )
  }
  contactsCount(){
    this.listService.contactsCount("khamis.safy@gmail.com").subscribe(
      (res)=>{
        console.log("contacts count",res)
      },
      (err)=>{
        console.log(err) }
        )
  }
  undeleteList(){
    this.listService.unDeleteList("khamis.safy@gmail.com",["ls_227b8063-0567-4fb5-9ea6-f81f9fa3499c"]).subscribe(
      (res)=>{
        console.log("undelete",res)
      },
      (err)=>{
        console.log(err) }
        )
  }
  ngAfterViewInit(): void {
  }

}

