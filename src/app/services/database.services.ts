import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmailValidator } from '@angular/forms';
import { Observable, throwError } from 'rxjs';

interface Iperson{
    id : number,
    firstName : string,
    lastName : string,
    email : EmailValidator,
    comments : string
}

 @Injectable()
 export class DatabaseService {

   private API_URL = 'https://3wk54lov3i.execute-api.us-east-2.amazonaws.com/dev/form/';

   constructor(private http: HttpClient) { }

   createPerson(lastName, firstName, email, comments, option) {
     
     let headers = new HttpHeaders({'Content-Type' : 'application/json'});
     let options = { headers: headers};
     let INFO =  Object.assign(lastName, firstName, email, comments, option);
     let body = JSON.stringify(INFO);
     return this.http.post(this.API_URL, body, options).subscribe(
        data => {
            return true;
          },
          error => {
            console.error("Error creating item");
            return throwError("Error creating person");
          }
     );
   }

   getInfo(id: number) : Observable<Iperson>{
    return this.http.get<Iperson>(this.API_URL + id);
   }
   getListInfo() : Observable<[Iperson]>{
    return this.http.get<[Iperson]>(this.API_URL);
   }
   update(id, lastName, firstName, email, comments, option): Observable<Iperson> {

    let headers = new HttpHeaders({'Content-Type' : 'application/json'});
    let options = { headers: headers};
    let INFO =  Object.assign(lastName, firstName, email, comments, option);
    let body = JSON.stringify(INFO);
    console.log("update_ok");
    return this.http.put<Iperson>(this.API_URL + id, body, options);
   }
   delete(id): Observable<Iperson> {
    console.log("delete_ok");
    return this.http.delete<Iperson>(this.API_URL + id);
   }
 }