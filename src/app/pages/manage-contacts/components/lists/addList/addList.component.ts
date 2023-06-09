import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ManageContactsService } from '../../../manage-contacts.service';

@Component({
  selector: 'app-addList',
  templateUrl: './addList.component.html',
  styleUrls: ['./addList.component.scss']
})
export class AddListComponent implements OnInit {
  name:any = new FormControl('',[Validators.required]);
  email:any = new FormControl('khamis.safy@gmail.com',[Validators.required]);
  form = new FormGroup({
    name:this.name,
    email: this.email
  });
  constructor(
    private listService:ManageContactsService,
    public dialogRef: MatDialogRef<AddListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
  }
  submit(){
    this.listService.addList(this.form.value).subscribe(
      (res)=>{
        console.log(res)
      }
    )
  }
  onClose(): void {
    this.dialogRef.close();
  }
}
