import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
    const dialogRef = this.dialog.open(AddListComponent,
        {
          width: '70vw',
          height: '70vh',
        }
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
