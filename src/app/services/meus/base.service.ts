import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BaseService {
  public httpClient: HttpClient
  constructor(
    handler: HttpBackend
    
  ) { 
    this.httpClient = new HttpClient(handler);
  }

  getAll() {
    return this.httpClient.get(environment.baseUrl , {})
  }

  getById(id: string) {
    return this.httpClient.get(environment.baseUrl  + "/" + id, {})
  }

  save(data: any) {
    return this.httpClient.post(environment.baseUrl , data)
  }

  delete(id: string) {
    return this.httpClient.delete(environment.baseUrl )
  }

  // async getMazoByUserId() {
  //   return await  this.httpClient.get(environment.baseUrl  + `mazo`, {})

  // }
  async getMazoByUserId() {
    return await  this.httpClient.get(environment.baseUrl  + `mazo`, {}).toPromise().then(
      r => {
          
         return Object.values(r)
          
      }
  ).catch( e => {
      alert('error fetching data');
  });

  }

  
}




  



  

