import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '@env/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageContactsService {

  constructor(private http:HttpClient) { }

  addList(data:any): Observable<any>{
    data = {...data,
      email: "khamis.safy@gmail.com"
    }
    return this.http.post(env.api + 'api/Contacts/addNewList',data)
  }

}
