import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '@env/environment.development';
import { Observable } from 'rxjs';
import { ListData } from './list-data';

@Injectable({
  providedIn: 'root'
})
export class ManageContactsService {
    display:number=5;
    pageNum:number=0;
    email:string="khamis.safy@gmail.com";
    orderedBy:string="";
    search:string="";
  constructor(private http:HttpClient) { }

  addList(name:string,email:string): Observable<ListData>{
    const data ={
    name:name,
    email:email
  }
  return this.http.post<ListData>(`${env.api}Contacts/addNewList`,data)
}

updateList(id:string,name:string,email:string): Observable<ListData>{
const data ={
    id:id,
    name:name,
    email:email
  }
  return this.http.put<ListData>(`${env.api}Contacts/updateList`,data)
}

deleteList(email:string,listArr:string[]): Observable<any>{
  return this.http.put(`${env.api}Contacts/deleteList?email=${email}`,listArr)
}
getList(email:string,showsNum:number,pageNum:number,orderedBy:string,search:string):Observable<any>{
  return this.http.get(`${env.api}Contacts/listLists?email=${email}&take=${showsNum}&scroll=${pageNum}&orderedBy=${orderedBy}&search=${search}`)
}
// 'http://dev-smpp.uaenorth.cloudapp.azure.com:5300/api/Contacts/listLists?email=khamis.safy%40gmail.com&take=2&scroll=0&orderedBy=nameASC&search=l'

}
