import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get<any>("http://localhost:8090/getcustomers");
  }
  addCustomer(user:any){
    return this.http.get("http://localhost:8081/addcustomer?id="+user.id+"&name="+user.name+"&mobile="+user.mobile+"&email="+user.email);
  }
  deleteCustomer(id:any){
    return this.http.get("http://localhost:8081/deletecustomer/?id="+id);
  }
}
