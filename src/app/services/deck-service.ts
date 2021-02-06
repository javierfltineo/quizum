import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable, queueScheduler } from 'rxjs';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';
import { Mazo } from '../models/mazo.model';


import { BaseService } from './base.service';


@Injectable({ providedIn: 'root' })
export class DeckService implements IService {

    
    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService, private  baseService:BaseService ,
        ) { }
    public mazos:  Mazo[] = []
    
    public u :Mazo

    public mazo : any[] = []

    public decks: [] = []
    
    public aux;

    public userId: string ;
    

    
    getId = (): string => 'dragAndDrop';

    getTitle = (): string => 'Drag and Drop';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'drag-and-drop/0', 'title': 'Small item + header', 'theme': 'layout1' },
            { 'url': 'drag-and-drop/1', 'title': 'Products + CTA header', 'theme': 'layout2' },
            { 'url': 'drag-and-drop/2', 'title': 'Medium item with avatar', 'theme': 'layout3' }
        ];
    }

    
    getDataForList = (): any => {
       
        
        return {
            'toolbarTitle': 'Decks',
            "title": "Estudia un mazo!",
            "subtitle": "Selecciona el mazo que desees estudiar para comenzar.",
            "items": [
             {
                 "id": this.mazos[0]._id ,
                 "title": this.mazos[0].title,
                 "subtitle": this.mazos[0].description,
                 "image": "assets/imgs/decks/python.png",
                 "iconDelete" : "trash",
                 "msgDelete" : "Eliminar",
             },
             {
                 "id": this.mazos[1]._id ,
                 "title": this.mazos[1].title,
                 "subtitle": this.mazos[1].description,
                 "image": "assets/imgs/decks/odoo.png",
                 "iconDelete" : "trash",
                 "msgDelete" : "Eliminar",
             },
             ]
        };
    }

    //pruebas sin servidor

    getMazos(){
        var decks = []

        var aux = this.baseService.getDecks()
        for(let i = 0; i< aux.length ; i++){
            // console.log(aux[i]["_id"])
            // console.log(aux[i]["title"])
            // console.log(aux[i]["description"])
            decks[i] = {
                'id':aux[i]["_id"], 
                'title':aux[i]["title"],
                'subtitle': aux[i]["description"],
                "image": "assets/imgs/decks/python.png",
                "iconDelete" : "trash",
                "msgDelete" : "Eliminar",
            }
        }
        this.aux = {
            'toolbarTitle': 'Decks',
            "title": "Estudia un mazo!",
            "subtitle": "Selecciona el mazo que desees estudiar para comenzar.",
            "items": decks
        }
        
        
    }

    load(item: any): Observable<any> {
        const that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('listView/dragAndDrop/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                        that.loadingService.hide();
                        observer.next(snapshot);
                        observer.complete();
                    }, err => {
                        that.loadingService.hide();
                        observer.error([]);
                        observer.complete();
                    });
            });
        } else {
            
            return new Observable(observer => {
                that.loadingService.hide();
                
                this.getMazos()
                
                // observer.next(this.getDataForList());
                observer.next(this.aux);
                observer.complete();
            });
        }
    }
    
}
