import { HttpClient } from '@angular/common/http';
 import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

 @Injectable({
   providedIn: 'root'
 })
export class BaseService {

 

  constructor(
    public httpClient: HttpClient,
    public collection: string
  ) { }

  getAllMazo() {
    return this.httpClient.get(environment.baseUrl +"/mazo", {})
  }

  getById(id: string) {
    return this.httpClient.get(environment.baseUrl + this.collection + "/" + id, {})
  }

  save(data: any) {
    return this.httpClient.post(environment.baseUrl + this.collection, data)
  }

  delete(id: string) {
    return this.httpClient.delete(environment.baseUrl + `${this.collection}/${id}`)
  }

  getMazoByUserId(mazoId: string) {
    return this.httpClient.get(environment.baseUrl + this.collection + `/mazo/${mazoId}`, {})

  }
}




  



  

