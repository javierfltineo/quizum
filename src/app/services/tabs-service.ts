import { ValidationService } from './validation';
import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class TabsService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getTitle = (): string => 'Tabs';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'tab/0/tab/tab1', 'title': 'Footer tab - text', 'theme': 'layout1' },
      { 'url': 'tab/1/tab/tab4', 'title': 'Footer tab - icons', 'theme': 'layout2' },
      { 'url': 'tab/2/tab/tab7', 'title': 'Header tab - text', 'theme': 'layout3' }
    ];
  }

  getDataForTheme = (menuItem: any): any => {
    return this[
      'getDataFor' +
      menuItem.charAt(0).toUpperCase() +
      menuItem.slice(1)
    ]();
  }

  //* Data Set for page 1
  getDataForTab1 = (): any => {
    return {
      'items': [
        {
          'id': 1,
          'title': 'Fortuitu ad aeroportus',
          'titleHeader': 'Simul quanta praecinctionis',
          'description': `Contra opinione vulgi, accumsan non tantum temere text.
          Quod habet radices in fragmen literaturam Romanam classicam a XLV BC, MM facit super annos. Richard McClintock`,
          'image': 'assets/imgs/background/1.jpg',
          'button': 'EXPLORE',
          'shareButton': 'SHARE'
        },
        {
          'id': 2,
          'title': 'Hoc est exortum',
          'titleHeader': 'Pedestres sub imprudentia contentum',
          'description': `Contra opinione vulgi, accumsan non tantum temere text.
          Quod habet radices in fragmen literaturam Romanam classicam a XLV BC, MM facit super annos. Richard McClintock`,
          'image': 'assets/imgs/background/2.jpg',
          'button': 'EXPLORE',
          'shareButton': 'SHARE'
        },
        {
          'id': 3,
          'title': 'Communications moderatoris',
          'titleHeader': 'Technica et Internet habeat facultatem',
          'description': `Contra opinione vulgi, accumsan non tantum temere text.
          Quod habet radices in fragmen literaturam Romanam classicam a XLV BC, MM facit super annos. Richard McClintock`,
          'image': 'assets/imgs/background/5.jpg',
          'button': 'EXPLORE',
          'shareButton': 'SHARE'
        },
        {
          'id': 4,
          'title': 'Tabulas scripto munus agere providere',
          'titleHeader': 'Ut adeptus est atrium',
          'description': `Contra opinione vulgi, accumsan non tantum temere text.
          Quod habet radices in fragmen literaturam Romanam classicam a XLV BC, MM facit super annos. Richard McClintock`,
          'image': 'assets/imgs/background/3.jpg',
          'button': 'EXPLORE',
          'shareButton': 'SHARE'
        },
        {
          'id': 5,
          'title': 'In outpatient nuntiatum ministerium',
          'titleHeader': 'Testis unus',
          'description': `Contra opinione vulgi, accumsan non tantum temere text.
          Quod habet radices in fragmen literaturam Romanam classicam a XLV BC, MM facit super annos. Richard McClintock`,
          'image': 'assets/imgs/background/1.jpg',
          'button': 'EXPLORE',
          'shareButton': 'SHARE'
        }
      ]
    };
  }

  //* Data Set for page 2
  getDataForTab2 = (): any => {
    return {
        'headerTitle': "List Frends",
        "items": [
          {
            "title": "Isabel Villar",
            "subtitle": "@isabel.villar",
            "follow": "follow",
            "avatar": "assets/imgs/avatar/17.jpg",
            "iconButton": "md-person-add",
          },
          {
            "title": "Silvia Salvador",
            "subtitle": "@silvia.salvador",
            "follow": "follow",
            "avatar": "assets/imgs/avatar/16.jpg",
            "iconButton": "md-person-add",
          },
          {
            "title": "Marguerite Thibault",
            "subtitle": "@marguerite.thib",
            "follow": "follow",
            "avatar": "assets/imgs/avatar/15.jpg",
            "iconButton": "md-person-add",
          },
          {
            "title": "Marianne Maillet",
            "subtitle": "@marianne.maillet",
            "follow": "follow",
            "avatar": "assets/imgs/avatar/14.jpg",
            "iconButton": "md-person-add",
          },
          {
            "title": "Julie Martins",
            "subtitle": "@julie.martins",
            "follow": "follow",
            "avatar": "assets/imgs/avatar/13.jpg",
            "iconButton": "md-person-add",
          },
          {
            "title": "Sofia Zepeda",
            "subtitle": "@sofia.zepeda",
            "follow": "follow",
            "avatar": "assets/imgs/avatar/12.jpg",
            "iconButton": "md-person-add",
          },
          {
            "title": "Nathalie Voisin",
            "subtitle": "@nathalie.voisin",
            "follow": "follow",
            "avatar": "assets/imgs/avatar/11.jpg",
            "iconButton": "md-person-add",
          }
        ]
    };
  }

  //* Data Set for page 3
  getDataForTab3 = (): any => {
    return {
      'allComments': '2121 Comments',
      'items': [
          {
              'id': 1,
              'image': 'assets/imgs/avatar/16.jpg',
              'title': 'Erica Romaguera',
              'time': '18 August 2018 at 12:20pm',
              'description': 'If you could have any kind of pet, what would you choose?'
          },
          {
              'id': 2,
              'image': 'assets/imgs/avatar/15.jpg',
              'title': 'Caleigh Jerde',
              'time': '18 August 2018 at 8:13pm',
              'description': 'If you could learn any language, what would you choose?'
          },
          {
              'id': 3,
              'image': 'assets/imgs/avatar/14.jpg',
              'title': 'Lucas Schultz',
              'time': '18 August 2018 at 5:22pm',
              'description': 'Life is about making an impact, not making an income.'
          },
          {
              'id': 4,
              'image': 'assets/imgs/avatar/13.jpg',
              'title': 'Carole Marvin',
              'time': '18 August 2018 at 7:36am',
              'description': `I\’ve learned that people will forget what you said,
               people will forget what you did, but people will never forget how you made them feel`
          },
          {
              'id': 5,
              'image': 'assets/imgs/avatar/12.jpg',
              'title': 'Doriana Feeney',
              'time': '18 August 2018 at 5:28am',
              'description': 'Definiteness of purpose is the starting point of all achievement.'
          },
          {
              'id': 6,
              'image': 'assets/imgs/avatar/11.jpg',
              'title': 'Nia Gutkowski',
              'time': '18 August 2018 at 11:27pm',
              'description': 'Life is what happens to you while you’re busy making other plans'
          }
      ]
    };
  }

  //* Data Set for page 4
  getDataForTab4 = (): any => {
    return {
        'items': [
            {
                'id': 1,
                'avatar': 'assets/imgs/avatar/10.jpg',
                'avatarTitle': 'Katlynn Pouros',
                'avatarSubtitle': 'from Los Angeles',
                'time': '15 min ago',
                "iconButton": "md-person-add",
                "follow": "follow",
                'image': 'assets/imgs/background/34.jpg',
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
                "iconButton": "md-person-add",
                "follow": "follow",
                'image': 'assets/imgs/background/35.jpg',
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
                "iconButton": "md-person-add",
                "follow": "follow",
                'image': 'assets/imgs/background/36.jpg',
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
                "iconButton": "md-person-add",
                "follow": "follow",
                'image': 'assets/imgs/background/37.jpg',
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
                "follow": "follow",
                "iconButton": "md-person-add",
                'image': 'assets/imgs/background/16.jpg',
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
                "iconButton": "md-person-add",
                "follow": "follow",
                'image': 'assets/imgs/background/38.jpg',
                'title': 'Women in the Slaves',
                'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
            }
        ]
    };
  }

  //* Data Set for page 5
  getDataForTab5 = (): any => {
    return {
      'allComments': '2121 Comments',
      'items': [
          {
              'id': 1,
              'image': 'assets/imgs/avatar/16.jpg',
              'title': 'Erica Romaguera',
              'time': '18 August 2018 at 12:20pm',
              'description': 'If you could have any kind of pet, what would you choose?'
          },
          {
              'id': 2,
              'image': 'assets/imgs/avatar/15.jpg',
              'title': 'Caleigh Jerde',
              'time': '18 August 2018 at 8:13pm',
              'description': 'If you could learn any language, what would you choose?'
          },
          {
              'id': 3,
              'image': 'assets/imgs/avatar/14.jpg',
              'title': 'Lucas Schultz',
              'time': '18 August 2018 at 5:22pm',
              'description': 'Life is about making an impact, not making an income.'
          },
          {
              'id': 4,
              'image': 'assets/imgs/avatar/13.jpg',
              'title': 'Carole Marvin',
              'time': '18 August 2018 at 7:36am',
              'description': `I’ve learned that people will forget what you said,
               people will forget what you did, but people will never forget how you made them feel`
          },
          {
              'id': 5,
              'image': 'assets/imgs/avatar/12.jpg',
              'title': 'Doriana Feeney',
              'time': '18 August 2018 at 5:28am',
              'description': 'Definiteness of purpose is the starting point of all achievement.'
          },
          {
              'id': 6,
              'image': 'assets/imgs/avatar/11.jpg',
              'title': 'Nia Gutkowski',
              'time': '18 August 2018 at 11:27pm',
              'description': 'Life is what happens to you while you’re busy making other plans'
          }
      ]
    };
  }

  //* Data Set for page 6
  getDataForTab6 = (): any => {
    return {
        'yourName': 'Your Name',
        'title': 'Title',
        'description': 'Enter a description',
        'button': ' Write Comment'
    };
  }

  //* Data Set for page 7
  getDataForTab7 = (): any => {
    return {
        'headerImage': 'assets/imgs/background/21.jpg',
        'title': 'Infinit pontem in Sinis',
        'subtitle': 'per marescalluml',
        'category': 'Category',
        'avatar': 'assets/imgs/avatar/13.jpg',
        'shareIcon': 'ellipsis-horizontal',
        'actionSheet': {
            'buttons': [
                {
                    'text': 'Add to Cart',
                    'role': 'destructive'
                },
                {
                    'text': 'Add to Favorites'
                },
                {
                    'text': 'Read more info'
                },
                {
                    'text': 'Delete Item'
                },
                {
                    'text': 'Cancel',
                    'role': 'cancel'
                }
            ]
        },
        'items': [
            {
                'id': 1,
                'subtitle': "Hoc est, visu nova thriller, posuit orbem in fimbriis modern arte, quae est tenebrosa, haunting, torta - vertit se et in suo modo. Non quod objective, et arte discipulus apud Notingham, nuper Jack quae ducitur 'diluvium, ' frigus, saeva enfant inexpugnabiles omnes modern art. Et vadit ad deversorium cubiculum vult bibere et cetera id exuendum statum tunc illa e somno evigilans in lecto suo."
            },
            {
                'id': 2,
                'subtitle': 'Percussas pavore est, sane, sed etiam in auribus eorum amplius diluvium ad inveniendum, qui utitur maxime auctoribus imaginum cinematographicarum praebere video camera ejus vita (hoc est ars, ut videtur). Et obliti sunt ea nocte in hotel cubiculum terminus sursum in quodam loco quis gallery? Si illa ad magistratus? Et factum est, ut quod deest illi amice Jenny?'
            },
            {
                'id': 3,
                'subtitle': 'It takes sursum magis, nimis longum est aedificate (usque ad paginam fere CLX) Ad validam in mia quia actio, sed altiore hoc est a dolor modern thriller, et fortiter mentis habitu femineo (adhuc inusitato scelus ficta). Jaq Hazell vigilare sit an author.'
            },
            {
                'id': 4,
                'subtitle': 'Vesalius habet cum ramosis in lupinotuum, conscripserit et comici librorum, sed saeva Lane videt eum quasi animam suam antiquis nota mundo, quamvis tempus suum ingenia sunt paulo plus crevit et hi qui crediderant, cum ex Novus York ad urbem est viridius, affluentes, et suburbana earum.'
            }
        ]
    };
  }

  //* Data Set for page 8
  getDataForTab8 = (): any => {
    return {
      'allComments': '2121 Comments',
      'items': [
          {
              'id': 1,
              'image': 'assets/imgs/avatar/16.jpg',
              'title': 'Erica Romaguera',
              'time': '18 August 2018 at 12:20pm',
              'description': 'If you could have any kind of pet, what would you choose?'
          },
          {
              'id': 2,
              'image': 'assets/imgs/avatar/15.jpg',
              'title': 'Caleigh Jerde',
              'time': '18 August 2018 at 8:13pm',
              'description': 'If you could learn any language, what would you choose?'
          },
          {
              'id': 3,
              'image': 'assets/imgs/avatar/14.jpg',
              'title': 'Lucas Schultz',
              'time': '18 August 2018 at 5:22pm',
              'description': 'Life is about making an impact, not making an income.'
          },
          {
              'id': 4,
              'image': 'assets/imgs/avatar/13.jpg',
              'title': 'Carole Marvin',
              'time': '18 August 2018 at 7:36am',
              'description': `I\’ve learned that people will forget what you said,
               people will forget what you did, but people will never forget how you made them feel`
          },
          {
              'id': 5,
              'image': 'assets/imgs/avatar/12.jpg',
              'title': 'Doriana Feeney',
              'time': '18 August 2018 at 5:28am',
              'description': 'Definiteness of purpose is the starting point of all achievement.'
          },
          {
              'id': 6,
              'image': 'assets/imgs/avatar/11.jpg',
              'title': 'Nia Gutkowski',
              'time': '18 August 2018 at 11:27pm',
              'description': 'Life is what happens to you while you’re busy making other plans'
          }
      ]
    };
  }

  //* Data Set for page 9
  getDataForTab9 = (): any => {
    return {
      "map": {
          "lat": 40.712562,
          "lng": -74.005911,
          "zoom": 15,
          "mapTypeControl": true,
          "streetViewControl": true,
          "styles": [
              {"elementType": 'geometry', "stylers": [{"color": '#242f3e'}]},
              {"elementType": 'labels.text.stroke', "stylers": [{"color": '#242f3e'}]},
              {"elementType": 'labels.text.fill', "stylers": [{"color": '#746855'}]},
              {
                  "featureType": 'administrative.locality',
                  "elementType": 'labels.text.fill',
                  "stylers": [{color: '#d59563'}]
              },
              {
                  "featureType": 'poi',
                  "elementType": 'labels.text.fill',
                  "stylers": [{color: '#d59563'}]
              },
              {
                  "featureType": 'poi.park',
                  "elementType": 'geometry',
                  "stylers": [{"color": '#263c3f'}]
              },
              {
                  "featureType": 'poi.park',
                  "elementType": 'labels.text.fill',
                  "stylers": [{"color": '#6b9a76'}]
              },
              {
                  "featureType": 'road',
                  "elementType": 'geometry',
                  "stylers": [{"color": '#38414e'}]
              },
              {
                  "featureType": 'road',
                  "elementType": 'geometry.stroke',
                  "stylers": [{"color": '#212a37'}]
              },
              {
                  "featureType": 'road',
                  "elementType": 'labels.text.fill',
                  "stylers": [{"color": '#9ca5b3'}]
              },
              {
                  "featureType": 'road.highway',
                  "elementType": 'geometry',
                  "stylers": [{"color": '#746855'}]
              },
              {
                  "featureType": 'road.highway',
                  "elementType": 'geometry.stroke',
                  "stylers": [{"color": '#1f2835'}]
              },
              {
                  "featureType": 'road.highway',
                  "elementType": 'labels.text.fill',
                  "stylers": [{"color": '#f3d19c'}]
              },
              {
                  "featureType": 'transit',
                  "elementType": 'geometry',
                  "stylers": [{"color": '#2f3948'}]
              },
              {
                  "featureType": 'transit.station',
                  "elementType": 'labels.text.fill',
                  "stylers": [{"color": '#d59563'}]
              },
              {
                  "featureType": 'water',
                  "elementType": 'geometry',
                  "stylers": [{"color": '#17263c'}]
              },
              {
                  "featureType": 'water',
                  "elementType": 'labels.text.fill',
                  "stylers": [{"color": '#515c6d'}]
              },
              {
                  "featureType": 'water',
                  "elementType": 'labels.text.stroke',
                  "stylers": [{"color": '#17263c'}]
              }
          ]
      },
        "slider": [
          {
          "id": 1,
          "image": "assets/imgs/background/16.jpg",
          "title": "Free Ride Tour",
          "subtitle": "Best Offer",
          },
          {
            "id": 2,
            "image": "assets/imgs/background/13.jpg",
            "title": "Main Stage Event",
            "subtitle": "Main Event",
          },
          {
            "id": 3,
            "image": "assets/imgs/background/19.jpg",
            "title": "Bridge Tour",
            "subtitle": "Mountain",
          },
          {
          "id": 4,
          "image": "assets/imgs/background/21.jpg",
          "title": "Free Ride Tour",
          "subtitle": "Best Tourt",
          },
          {
          "id": 5,
          "image": "assets/imgs/background/6.jpg",
          "title": "Mountain Trout",
          "subtitle": "Mountain",
          },
          {
          "id": 6,
          "image": "assets/imgs/background/10.jpg",
          "title": "Sea ture",
          "subtitle": "Bridge Tour",
          },
          {
          "id": 7,
          "image": "assets/imgs/background/11.jpg",
          "title": "Free Ride Tour",
          "subtitle": "Best Events",
          },
          {
          "id": 8,
          "image": "assets/imgs/background/19.jpg",
          "title": "Mountain Trout",
          "subtitle": "Mountain",
          },
          {
          "id": 9,
          "image": "assets/imgs/background/16.jpg",
          "title": "Sea ture",
          "subtitle": "Best Events",
          },
          {
          "id": 10,
          "image": "assets/imgs/background/21.jpg",
          "title": "Free Ride Tour",
          "subtitle": "Main Event",
          }
      ]
    };
  }

  load(item: string): Observable<any> {
    this.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('tab/' + item)
          .valueChanges()
          .subscribe(snapshot => {
            this.loadingService.hide();
            observer.next(snapshot);
            observer.complete();
          }, err => {
            this.loadingService.hide();
            observer.error([]);
            observer.complete();
          });
      });
    } else {
      return new Observable(observer => {
        this.loadingService.hide();
        observer.next(this.getDataForTheme(item));
        observer.complete();
      });
    }
  }
}
