import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Option } from '../models/option';
import { OdooRPCService } from './odoorpc.service';

const baseUrl = 'http://localhost:8080/api/options';


@Injectable({ providedIn: 'root' })
export class OptionService {
    private optionSubject: BehaviorSubject<Option>;
    public option: Observable<Option>;
    private router: Router;


    constructor(private odooService: OdooRPCService, private http: HttpClient) {
        this.optionSubject = new BehaviorSubject<Option>(JSON.parse(localStorage.getItem('option')));
        this.option = this.optionSubject.asObservable();
    }

    public get optionValue(): Option {
        return this.optionSubject.value;
    }

    create(data): Observable<any> {
      console.log(data);
      return this.http.post(baseUrl, data);
    }

    update(data): Observable<any> {
      return this.http.put(baseUrl + '/' + data['id'], data);
    }

    find() {
        return this.http.get<Option>(baseUrl);
    }

    getById(id: string) {
        return this.http.get<Option>(baseUrl + '/' + id);
    }

}
