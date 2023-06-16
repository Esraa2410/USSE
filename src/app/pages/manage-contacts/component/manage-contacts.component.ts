import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddListComponent } from '../components/lists/addList/addList.component';

@Component({
  selector: 'app-manage-contacts',
  templateUrl: './manage-contacts.component.html',
  styleUrls: ['./manage-contacts.component.scss']
})
export class ManageContactsComponent {
  constructor(public dialog: MatDialog){

  }

  openModal(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.height='fit-content';
    dialogConfig.width='35vw';
    dialogConfig.maxWidth='100%';
    dialogConfig.minWidth='300px';
    dialogConfig.maxHeight='85vh';
    dialogConfig.minHeight='650px'
    const dialogRef = this.dialog.open(AddListComponent,dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
