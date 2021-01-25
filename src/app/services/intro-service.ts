import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class IntroService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) {}

    // Set data for - WIZARD MAIN
    getData = (): any => {
        return {
            'btnPrev': 'Previous',
            'btnNext': 'Next',
            'btnFinish': 'Finish',
            'items': [
                {
                  "logo": "assets/imgs/logo/1.png",
                  "backgroundImage": "assets/imgs/background/36.jpg",
                  "title": "Welcome to our new Ionic 4 / Angular 7 UI Theme / Template App - Zekky",
                  "description": "Finished layouts and components for Ionic 4. Ready to use!"
                },
                {
                  "logo": "assets/imgs/logo/1.png",
                  "backgroundImage": "assets/imgs/background/37.jpg",
                  "title": "For Developers",
                  "description": "Save hours of developing. Tons of funcional components."
                },
                {
                  "logo": "assets/imgs/logo/1.png",
                  "backgroundImage": "assets/imgs/background/3.jpg",
                  "title": "For Designers",
                  "description": "Endless possibilities. Combine layouts as you wish."
                }
            ]
        };
    }

    load(): Observable<any> {
        const that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('intro')
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
                observer.next(this.getData());
                observer.complete();
            });
        }
    }
}
