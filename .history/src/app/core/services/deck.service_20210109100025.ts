import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Deck } from '../models/deck';
import { OdooRPCService } from './odoorpc.service';

const baseUrl = 'http://localhost:8080/api/decks';


@Injectable({ providedIn: 'root' })
export class DeckService {
    private deckSubject: BehaviorSubject<Deck>;
    public deck: Observable<Deck>;
    private router: Router;


    constructor(private odooService: OdooRPCService, private http: HttpClient) {
        this.deckSubject = new BehaviorSubject<Deck>(JSON.parse(localStorage.getItem('deck')));
        this.deck = this.deckSubject.asObservable();
    }

    public get deckValue(): Deck {
        return this.deckSubject.value;
    }

    create(data): Observable<Deck> {
      console.log(data);
      return this.http.post(baseUrl, data).subscribe(res => { this.books = res; });
;
    }

    getAll() {
        return [];
    }

    getById(id: string) {
        return this.http.get<Deck>(`${environment.apiUrl}/decks/${id}`);
    }

}
