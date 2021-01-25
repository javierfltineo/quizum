import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class DeckService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'dragAndDrop';

    getTitle = (): string => 'Drag and Drop';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'drag-and-drop/0', 'title': 'Small item + header', 'theme': 'layout1' },
            { 'url': 'drag-and-drop/1', 'title': 'Products + CTA header', 'theme': 'layout2' },
            { 'url': 'drag-and-drop/2', 'title': 'Medium item with avatar', 'theme': 'layout3' }
        ];
    }

    //* Data Set for page 2
    getDataForList = (): any => {
        return {
            'toolbarTitle': 'Decks',
            "title": "Estudia un mazo!",
            "subtitle": "Selecciona el mazo que desees estudiar para comenzar.",
            "items": [
                {
                    "id": 1,
                    "title": "Python",
                    "subtitle": "Todo sobre python",
                    "image": "assets/imgs/decks/python.png",
                    "iconDelete" : "trash",
                    "msgDelete" : "Eliminar",
                },
                {
                    "id": 2,
                    "title": "Odoo",
                    "subtitle": "Aprende todo sobre el mejor ERP Open Source",
                    "image": "assets/imgs/decks/odoo.png",
                    "iconDelete" : "trash",
                    "msgDelete" : "Eliminar",
                },
            ]
        };
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
                observer.next(this.getDataForList());
                observer.complete();
            });
        }
    }
}
