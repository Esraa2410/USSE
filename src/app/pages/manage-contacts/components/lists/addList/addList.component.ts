import { ToasterServices } from './../../../../../shared/components/us-toaster/us-toaster.component';
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
  isLoading = false
  name:any = new FormControl('',[Validators.required]);
  form = new FormGroup({
    name:this.name
  });

  isEdit:boolean =false

  constructor(
    private toaster: ToasterServices,
    private listService:ManageContactsService,
    public dialogRef: MatDialogRef<AddListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    if(this.data){
      this.isEdit = true
      this.fillingData()
    }else{
      this.isEdit = false
    }
  }
  fillingData(){
    this.form.patchValue({
      name: this.data.name
    })
  }
  submitAdd(){
    this.isLoading = true
    this.listService.addList(this.form.value).subscribe(
      (res)=>{
        this.isLoading = false
        console.log(res)
        this.onClose(true)
      },
      (err)=>{
        this.isLoading = false
        console.log(err)
        this.onClose(false)
      }
    )
  }
  onClose(data?): void {
    this.dialogRef.close(data);
  }
}
