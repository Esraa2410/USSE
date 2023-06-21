import { ManageContactsService } from './../../../manage-contacts.service';
import { ToasterServices } from './../../../../../shared/components/us-toaster/us-toaster.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ListData } from '../../../list-data';

@Component({
  selector: 'app-delete-list',
  templateUrl: './delete-list.component.html',
  styleUrls: ['./delete-list.component.scss']
})
export class DeleteListComponent implements OnInit {

  constructor(
    private toaster: ToasterServices,
    private listService:ManageContactsService,
    public dialogRef: MatDialogRef<DeleteListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ListData[],
  ) { }

  ngOnInit() {
    console.log(this.data)
    let body = this.data.map(res=>res.id)
    console.log(body)
  }
  submit(){
    let body = this.data.map(res=>res.id)
    this.listService.deleteList('khamis.safy@gmail.com',body).subscribe(
      (res)=>{
    console.log(res)

      },
      (err)=>{
        console.log(err)

      }
    )
  }
}
