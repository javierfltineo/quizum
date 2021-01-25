import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class AlertService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'alert';

    getTitle = (): string => 'Alert';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'alert/0', 'title': 'Alert Info', 'theme': 'layout1' },
            { 'url': 'alert/1', 'title': 'Alert Warning', 'theme': 'layout2' },
            { 'url': 'alert/2', 'title': 'Alert Subscribe', 'theme': 'layout3' }
        ];
    }

    getDataForTheme = (menuItem: any): any => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    }

    //* Data Set for page 1
    getDataForLayout1 = (): any => {
        return {
            'toolbarTitle': 'Alert Info',
            "items": [
                {
                  "id": 1,
                  "image": "assets/imgs/background/9.jpg",
                  "title": "Romantic masters",
                  "subtitle": "Speaking of romance, the bedroom in 2017 is all about romance. Bedroom design is..",
                },
                {
                  "id": 2,
                  "image": "assets/imgs/background/8.jpg",
                  "title": "Moody moments",
                  "subtitle": "f you’re seeking something extra special this year, start setting the mood at home",
                },
                {
                  "id": 3,
                  "image": "assets/imgs/background/7.jpg",
                  "title": "Butterfly Amour",
                  "subtitle": "Butterflies may be a symbol of femininity, but that no longer means they have to be relegated to a girl’s",
                },
                {
                  "id": 4,
                  "image": "assets/imgs/background/6.jpg",
                  "title": "Photo Editor",
                  "subtitle": "This free iPhone App boasts 120 million users and picked up Apple's App",
                },
                {
                  "id": 4,
                  "image": "assets/imgs/background/5.jpg",
                  "title": "Staying at Hotel Post Bezaus",
                  "subtitle": "Hotel Post Bezau has 58 rooms and suites with each room uniquely decorated",
                }
            ]
        };
    }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle': 'Alert Warning',
            "items": [
                {
                    "id": 1,
                    "category": "Prisma Labs",
                    "image": "assets/imgs/background/4.jpg",
                    "title": "Prisma Photo Editor",
                    "iconLike": "heart",
                    "iconComment": "chatbubbles",
                    "numberLike": "12",
                    "numberCommnet": "4",
                },
                {
                    "id": 2,
                    "category": "apple watch",
                    "image": "assets/imgs/background/3.jpg",
                    "title": "Built with your heart in mind",
                    "iconLike": "heart",
                    "iconComment": "chatbubbles",
                    "numberLike": "12",
                    "numberCommnet": "4",
                },
                {
                    "id": 3,
                    "category": "interior design trends",
                    "image": "assets/imgs/background/2.jpg",
                    "title": "Work It Baby: 14 Interior Design",
                    "iconLike": "heart",
                    "iconComment": "chatbubbles",
                    "numberLike": "12",
                    "numberCommnet": "4",
                }
            ]
        };
    }

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'toolbarTitle': 'Alert Subscribe',
            "items": [
                {
                    "id": 1,
                    "image": "assets/imgs/background/0.jpg",
                    "time": "MARCH 14, 2017",
                    "title": "Liberate Your Creativity",
                    "description": "FOur Graphic Designer templates empower you to design like never before. Liberate yourself",
                    "iconLike": "heart",
                    "iconComment": "chatbubbles",
                    "numberLike": "12",
                    "numberCommnet": "4",
                },
                {
                    "id": 2,
                    "image": "assets/imgs/background/1.jpg",
                    "time": "MARCH 14, 2017",
                    "title": "Revolutionary Design",
                    "description": "The innovative BeFunky Graphic Designer Toolset makes it simple to design however you want",
                    "iconLike": "heart",
                    "iconComment": "chatbubbles",
                    "numberLike": "12",
                    "numberCommnet": "4",
                },
                {
                    "id": 3,
                    "image": "assets/imgs/background/9.jpg",
                    "time": "MARCH 14, 2017",
                    "title": "Freedom To Create",
                    "description": "Our partnership with Pixabay provides the support you need to declare independence",
                    "iconLike": "heart",
                    "iconComment": "chatbubbles",
                    "numberLike": "12",
                    "numberCommnet": "4",
                },
                {
                    "id": 4,
                    "image": "assets/imgs/background/7.jpg",
                    "time": "MARCH 14, 2017",
                    "title": "What Is Graphic Design?",
                    "description": "Graphic design is the art of visual communication through the use of text, photos",
                    "iconLike": "heart",
                    "iconComment": "chatbubbles",
                    "numberLike": "12",
                    "numberCommnet": "4",
                }
            ]
        };
    }

    load(item: any): Observable<any> {
        const that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('alert/' + item.theme)
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
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
}
