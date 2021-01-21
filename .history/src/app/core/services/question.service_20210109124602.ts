import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Question } from '../models/question';
import { OdooRPCService } from './odoorpc.service';

const baseUrl = 'http://localhost:8080/api/questions';


@Injectable({ providedIn: 'root' })
export class QuestionService {
    private questionSubject: BehaviorSubject<Question>;
    public question: Observable<Question>;
    private router: Router;


    constructor(private odooService: OdooRPCService, private http: HttpClient) {
        this.questionSubject = new BehaviorSubject<Question>(JSON.parse(localStorage.getItem('question')));
        this.question = this.questionSubject.asObservable();
    }

    public get questionValue(): Question {
        return this.questionSubject.value;
    }

    create(data): Observable<any> {
      console.log(data);
      return this.http.post(baseUrl, data);
    }

    update(data): Observable<any> {
      return this.http.put(baseUrl + '/' + data['id'], data);
    }

    find() {
        return this.http.get<Question>(baseUrl);
    }

    getById(id: string) {
        return this.http.get<Question>(baseUrl + '/' + id);
    }

}
