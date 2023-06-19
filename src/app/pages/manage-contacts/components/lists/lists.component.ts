import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddListComponent } from './addList/addList.component';


const ELEMENT_DATA:any = [

  {name: 'Carbon',   create_at: '24 May 2023', total: "20,000"},
  {name: 'Nitrogen', create_at: '24 May 2023', total: "20,000"},
  {name: 'Nitrogen', create_at: '24 May 2023', total: "20,000"},
  {name: 'Carbon',   create_at: '24 May 2023', total: "20,000"},
  {name: 'Nitrogen', create_at: '24 May 2023', total: "20,000"},
  {name: 'Nitrogen', create_at: '24 May 2023', total: "20,000"},
  {name: 'Carbon',   create_at: '24 May 2023', total: "20,000"},
  {name: 'Nitrogen', create_at: '24 May 2023', total: "20,000"},
  {name: 'Carbon',   create_at: '24 May 2023', total: "20,000"},
  {name: 'Nitrogen', create_at: '24 May 2023', total: "20,000"},
  {name: 'Nitrogen', create_at: '24 May 2023', total: "20,000"},
  {name: 'Carbon',   create_at: '24 May 2023', total: "20,000"},
  {name: 'Nitrogen', create_at: '24 May 2023', total: "20,000"},
  {name: 'Nitrogen', create_at: '24 May 2023', total: "20,000"},
  {name: 'Carbon',   create_at: '24 May 2023', total: "20,000"},
  {name: 'Nitrogen', create_at: '24 May 2023', total: "20,000"},
];

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})


export class ListsComponent implements OnInit ,AfterViewInit  {
  @ViewChild(MatPaginator)  paginator!: MatPaginator;
  toppings = new FormControl('');
  @ViewChild(MatSort) sort: MatSort;
  toppingList: string[] = ['Name', 'Create At	', 'Total Contacts'];
  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getData()
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }

  displayedColumns: string[] = ['select', 'name', 'create_at', 'total',"edit"];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  selection = new SelectionModel<any>(true, []);
getData(){
  console.log('Data returned successfully')
}
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  edit(element){
    console.log(element)
  }
  onSortChange(event){
    console.log(event)
    this.dataSource.data
  }
  onRowClick(row:any){}

  openEditModal(data){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.height='85vh';
    dialogConfig.width='35vw';
    dialogConfig.maxWidth='100%';
    dialogConfig.minWidth='300px';
    dialogConfig.maxHeight='85vh';
    dialogConfig.data= data;
    const dialogRef = this.dialog.open(AddListComponent,dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.getData()
      }
    });

  }
  onPageChange(e){
    console.log(e)
    this.getData()
  }
}
