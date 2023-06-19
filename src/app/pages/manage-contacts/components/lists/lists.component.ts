import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';

export interface PeriodicElement {
  position: number;
  name: string;
  create_at: string;
  total: string;
}

const ELEMENT_DATA: PeriodicElement[] = [

  {position:1  ,name: 'Hydrogen', create_at: '24 May 2023', total: "20,000"},
  {position:2  ,name: 'Helium',   create_at: '24 May 2023', total: "20,000"},
  {position:3  ,name: 'Lithium',  create_at: '24 May 2023', total: "20,000"},
  {position:4  ,name: 'Beryllium',create_at: '24 May 2023', total: "20,000"},
  {position:5  ,name: 'Boron',    create_at: '24 May 2023', total: "20,000"},
  {position:6  ,name: 'Carbon',   create_at: '24 May 2023', total: "20,000"},
  {position:7  ,name: 'Nitrogen', create_at: '24 May 2023', total: "20,000"},
  {position:8  ,name: 'Lithium',  create_at: '24 May 2023', total: "20,000"},
  {position:9  ,name: 'Beryllium',create_at: '24 May 2023', total: "20,000"},
  {position:10  ,name: 'Boron',    create_at: '24 May 2023', total: "20,000"},
  {position:11  ,name: 'Carbon',   create_at: '24 May 2023', total: "20,000"},
  {position:12  ,name: 'Nitrogen', create_at: '24 May 2023', total: "20,000"},
  {position:13  ,name: 'Carbon',   create_at: '24 May 2023', total: "20,000"},
  {position:14  ,name: 'Nitrogen', create_at: '24 May 2023', total: "20,000"},
  {position:15  ,name: 'Nitrogen', create_at: '24 May 2023', total: "20,000"},
  {position:16  ,name: 'Carbon',   create_at: '24 May 2023', total: "20,000"},
  {position:17  ,name: 'Nitrogen', create_at: '24 May 2023', total: "20,000"},
  {position:18  ,name: 'Nitrogen', create_at: '24 May 2023', total: "20,000"},
  {position:19  ,name: 'Carbon',   create_at: '24 May 2023', total: "20,000"},
  {position:20  ,name: 'Nitrogen', create_at: '24 May 2023', total: "20,000"},
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
  constructor() {
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }

  displayedColumns: string[] = ['select', 'position', 'name', 'create_at', 'total',"edit"];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

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
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  edit(element:PeriodicElement){
    console.log(element)
  }
  onRowClick(row:any){}
}
