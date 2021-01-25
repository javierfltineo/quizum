import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ListViewGoogleCardsService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'googleCards';

    getTitle = (): string => 'Google Cards';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'google-card/0', 'title': 'Styled cards', 'theme': 'layout1' },
            { 'url': 'google-card/1', 'title': 'Styled cards 2', 'theme': 'layout2' },
            { 'url': 'google-card/2', 'title': 'Full image cards', 'theme': 'layout3' },
            { 'url': 'google-card/3', 'title': 'Full image cards with avatar', 'theme': 'layout4' }
        ];
    }

    //* Data Set for page 1
    getDataForLayout1 = (): any => {
        return {
            'toolbarTitle' : 'Styled cards',
            "items": [
              {
                  "id": 1,
                  "title": "Avenue Fouquet",
                  "description": "Last year, reformist-backed candidates supported by Khatami enjoyed a clean sweep of all 30 seats allocated to Tehran in the parliamentary elections.",
                  "image": "assets/imgs/background/31.jpg",
                  "icon": "chevron-back"
              },
              {
                  "id": 2,
                  "title": "Rue Manon Garnier",
                  "description": "In 2013 his backing and that of Ayatollah Hashemi Rafsanjani were crucial in Rouhani’s victory.",
                  "image": "assets/imgs/background/24.jpg",
                  "icon": "chevron-back"
              },
              {
                  "id": 3,
                  "title": "Rue de Moulin",
                  "description": "At the end of the day, he’s not challenging Rouhani, he’s come to Rouhani’s support.",
                  "image": "assets/imgs/background/21.jpg",
                  "icon": "chevron-back"
              },
              {
                  "id": 4,
                  "title": "Boulevard de Lagarde",
                  "description": "Dozens of flights were reportedly cancelled at Beijing’s airport, the world’s second busiest",
                  "image": "assets/imgs/background/15.jpg",
                  "icon": "chevron-back"
              }
            ]
        };
    }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle' : 'Styled cards 2',
            "items": [
                {
                    "id": 1,
                    "title": "San Francisco",
                    "icon": "location",
                    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                    "image": "assets/imgs/background/32.jpg",
                    "priceText": "Price",
                    "price": "$750",
                    "button": "Buy Now",
                    "shareIcon": "ellipsis-horizontal",
                },
                {
                    "id": 2,
                    "title": "Paris",
                    "icon": "location",
                    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                    "image": "assets/imgs/background/33.jpg",
                    "priceText": "Price",
                    "price": "$1300",
                    "button": "Buy Now",
                    "shareIcon": "ellipsis-horizontal",
                },
                {
                    "id": 3,
                    "title": "Moscow",
                    "icon": "location",
                    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                    "image": "assets/imgs/background/19.jpg",
                    "priceText": "Price",
                    "price": "$1735",
                    "button": "Buy Now",
                    "shareIcon": "ellipsis-horizontal",
                },
                {
                    "id": 4,
                    "title": "San Francisco",
                    "icon": "location",
                    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                    "image": "assets/imgs/background/28.jpg",
                    "priceText": "Price",
                    "price": "$750",
                    "button": "Buy Now",
                    "shareIcon": "ellipsis-horizontal",
                },
                {
                    "id": 5,
                    "title": "Paris",
                    "icon": "location",
                    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                    "image": "assets/imgs/background/34.jpg",
                    "priceText": "Price",
                    "price": "$1300",
                    "button": "Buy Now",
                    "shareIcon": "ellipsis-horizontal",
                },
            ]
        };
    }

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'toolbarTitle' : 'Full image cards',
            "items": [
                {
                    "id": 1,
                    "button": "BUY",
                    "image": "assets/imgs/background/28.jpg",
                    "title": "Osteria Francescana",
                    "subtitle": "Modena, Italy",
                    "price": "$135.99",
                },
                {
                    "id": 2,
                    "button": "BUY",
                    "image": "assets/imgs/background/0.jpg",
                    "title": "Camping du Brec",
                    "subtitle": "Le Brec, France",
                    "price": "$312.99",
                },
                {
                    "id": 3,
                    "button": "BUY",
                    "image": "assets/imgs/background/33.jpg",
                    "title": "Park Winterberg",
                    "subtitle": "Winterberg, Germany",
                    "price": "$213.45",
                },
                {
                    "id": 4,
                    "button": "BUY",
                    "image": "assets/imgs/background/19.jpg",
                    "title": "Singapore Airlines",
                    "subtitle": "Singapore, ",
                    "price": "$338.60",
                },
                {
                    "id": 5,
                    "button": "BUY",
                    "image": "assets/imgs/background/32.jpg",
                    "title": "Osteria Francescana",
                    "subtitle": "Modena, Italy",
                    "price": "$410.85",
                },
                {
                    "id": 6,
                    "button": "BUY",
                    "image": "assets/imgs/background/34.jpg",
                    "title": "Park Winterberg",
                    "subtitle": "Winterberg, Germany",
                    "price": "$516.55",
                }
            ]
        };
    }

    //* Data Set for page 4
    getDataForLayout4 = (): any => {
        return {
            'toolbarTitle' : 'Full image cards with avatar',
            'items': [
                {
                    'id': 1,
                    'avatar': 'assets/imgs/avatar/10.jpg',
                    'avatarTitle': 'Katlynn Pouros',
                    'avatarSubtitle': 'from Los Angeles',
                    'time': '15 min ago',
                    'image': 'assets/imgs/background/16.jpg',
                    'title': 'Women in the Slaves',
                    'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                },
                {
                    'id': 2,
                    'avatar': 'assets/imgs/avatar/12.jpg',
                    'avatarTitle': 'Katlynn Pouros',
                    'avatarSubtitle': 'from Los Angeles',
                    'time': '21 min ago',
                    'image': 'assets/imgs/background/34.jpg',
                    'title': 'Women in the Slaves',
                    'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                },
                {
                    'id': 3,
                    'avatar': 'assets/imgs/avatar/13.jpg',
                    'avatarTitle': 'Katlynn Pouros',
                    'avatarSubtitle': 'from Los Angeles',
                    'time': '29 min ago',
                    'image': 'assets/imgs/background/35.jpg',
                    'title': 'Women in the Slaves',
                    'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                },
                {
                    'id': 4,
                    'avatar': 'assets/imgs/avatar/14.jpg',
                    'avatarTitle': 'Katlynn Pouros',
                    'avatarSubtitle': 'from Los Angeles',
                    'time': '32 min ago',
                    'image': 'assets/imgs/background/36.jpg',
                    'title': 'Women in the Slaves',
                    'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                },
                {
                    'id': 5,
                    'avatar': 'assets/imgs/avatar/15.jpg',
                    'avatarTitle': 'Katlynn Pouros',
                    'avatarSubtitle': 'from Los Angeles',
                    'time': '45 min ago',
                    'image': 'assets/imgs/background/37.jpg',
                    'title': 'Women in the Slaves',
                    'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                },
                {
                    'id': 6,
                    'avatar': 'assets/imgs/avatar/16.jpg',
                    'avatarTitle': 'Katlynn Pouros',
                    'avatarSubtitle': 'from Los Angeles',
                    'time': '21 min ago',
                    'image': 'assets/imgs/background/38.jpg',
                    'title': 'Women in the Slaves',
                    'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                }
            ]
        };
    }


    getDataForTheme = (menuItem: any): Array<any> => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    }

    load(item: any): Observable<any> {
        const that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('listView/googleCards/' + item.theme)
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
