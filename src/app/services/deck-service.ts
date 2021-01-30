import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable, queueScheduler } from 'rxjs';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';
import { Mazo } from '../models/mazo.model';


import { BaseService } from './meus/base.service';

@Injectable({ providedIn: 'root' })
export class DeckService implements IService {

    // constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService ,private mazoService:BaseService) { }
    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService, private  userService:BaseService) { }
    public mazos:  Mazo[] = []
    
    public u :Mazo

    public mazo : any[] = []

    public decks: [] 
    
    public aux;

    public userId: string;
    

    
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
                 "id": this.mazos[0].id ,
                 "title": this.mazos[0].name,
                 "subtitle": this.mazos[0].description,
                 "image": "assets/imgs/decks/python.png",
                 "iconDelete" : "trash",
                 "msgDelete" : "Eliminar",
             },
             {
                 "id": this.mazos[1].id ,
                 "title": this.mazos[1].name,
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
        
        const m = new Mazo(1,"Python","hola holita")
        const r = new Mazo(2,"Angular","Aprende python rapido y sencillo")
        const b = new Mazo(3,"Ionic","Aprende python rapido y sencillo")

        this.mazos.push(m)
        this.mazos.push(r)
        this.mazos.push(b)
            
        var decks = []
        
        for(let i= 0; i< this.mazos.length;i++){
            
            decks[i] = {
                'id':this.mazos[i].id, 
                'title':this.mazos[i].name,
                'subtitle': this.mazos[i].description,
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
     getMazos2(){
        //llamamos al servicio para recopilar todos los mazos
        //  const mazos = this.mazoService.getMazoByUserId(this.userId) 
        
        //     console.log("hola")
        //    var aux =   this.userService.getMazoByUserId().toPromise().then(
        //      r => {
                 
        //        this.mazo = Object.values(r)
                 
        //      }
        //  ).catch( e => {
        //      alert('error fetching data');
        //  });
        //    console.log(aux)
        //      console.log(this.mazo[0])
        //      console.log("caracola")
          
     var decks = []
    
     for(let i= 0; i< this.mazo.length ;i++){
         
         decks[i]  = {
             'id':this.mazo[i]._id, 
             'title':this.mazo[i].titulo,
             'subtitle': this.mazo[i].descripcion,
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
}
