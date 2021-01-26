import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  token: string = ""

  constructor(
    public httpClient: HttpClient
  ) {
    super(httpClient, "user")
   }

   async login(username: string, password: string) {
    try {
      var res = await this.httpClient.post(environment.baseUrl + this.collection + "/login", { username: username, password: password }).toPromise()
      this.token = res["access_token"];
      console.log("res", this.token)

    } catch (error) {
      console.log("error", error)
    }
  }
}
