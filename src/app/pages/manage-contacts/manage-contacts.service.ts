import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '@env/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ManageContactsService {

  constructor(private http:HttpClient) { }

  addList(data:any){
    return this.http.post(env.api + 'api/Contacts/addNewList',data)
  }

}
