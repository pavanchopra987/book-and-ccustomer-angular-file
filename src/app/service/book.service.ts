import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<any>("http://localhost:8090/getbooks");
  }
  addBook(user:any){
    return this.http.get("http://localhost:8080/addbook?id="+user.id+"&name="+user.name+"&author="+user.author);
  }
  deleteBook(id:any){
    return this.http.get("http://localhost:8080/deletebook/?id="+id);
  }
}
