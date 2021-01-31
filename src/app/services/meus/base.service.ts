import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BaseService {
  public httpClient: HttpClient
  public mazo : any[] = []
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
      await   this.httpClient.get(environment.baseUrl  + `mazo`, {}).toPromise().then(
      r => {
          
          this.mazo = Object.values(r)
            //  console.log(this.mazo)
      }
  ).catch( e => {
      alert('error fetching data');
  });
    return await this.mazo
    
  }
  login(username:string, password:string){
    return   this.httpClient.post(environment.baseUrl  + `users/login`, {"username":username , "password":password})
  }

  
}




  



  

