import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class MapsService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

    getTitle = (): string => 'Maps';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'maps/0', 'title': 'GMAPS + Location  Details', 'theme': 'layout1' },
            { 'url': 'maps/1', 'title': 'GMAPS + About Us', 'theme': 'layout2' },
            { 'url': 'maps/2', 'title': 'Full Screen View', 'theme': 'layout3' }
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
            'toolbarTitle': 'GMAPS + Location  Details',
            'title': 'Best Restaurants for Power Lunches',
            'titleDescription': 'The iconic restaurant that has defined the term power lunch since 1959 is the one and only Four Seasons.',
            'reviews': '4.12 (78 reviews)',
            'contentDescription': `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris.
             Consequat gravida pretium ligula lectus;
             Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!`,
            'iconLoacation': 'icon-map-marker-radius',
            'iconLoacationText': 'Design Street, New York, USA',
            'iconWatch': 'icon-alarm',
            'iconWatchText': '8:00 to 16:00 working days',
            'iconPhone': 'icon-phone',
            'iconPhoneText': '333 222 111',
            'iconEarth': 'icon-earth',
            'iconEarthText': 'www.csform.com',
            'iconEmail': 'icon-email-outline',
            'iconEmailText': 'dev@csform.com',
            'iconsStars': [
                {
                    'iconActive': 'icon-star',
                    'iconInactive': 'icon-star-outline',
                    'isActive': true
                },
                {
                    'iconActive': 'icon-star',
                    'iconInactive': 'icon-star-outline',
                    'isActive': true
                },
                {
                    'iconActive': 'icon-star',
                    'iconInactive': 'icon-star-outline',
                    'isActive': true
                },
                {
                    'iconActive': 'icon-star',
                    'iconInactive': 'icon-star-outline',
                    'isActive': true
                },
                {
                    'iconActive': 'icon-star',
                    'iconInactive': 'icon-star-outline',
                    'isActive': false
                }
            ],
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
            }
        };
    }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle': 'GMAPS + About Us',
            'title': 'Creative Studio Form',
            'titleDescription': 'Design & Development agency',
            'contentTitle': 'About us',
            'contentDescription': `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris.
             Consequat gravida pretium ligula lectus;
              Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!`,
            'iconLoacation': 'icon-map-marker-radius',
            'iconLoacationText': 'Design Street, New York, USA',
            'iconWatch': 'icon-alarm',
            'iconWatchText': '8:00 to 16:00 working days',
            'iconPhone': 'icon-phone',
            'iconPhoneText': '333 222 111',
            'iconEarth': 'icon-earth',
            'iconEarthText': 'www.csform.com',
            'iconEmail': 'icon-email-outline',
            'iconEmailText': 'dev@csform.com',
            'titleMap': 'Here we are :',
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
            }
        };
    }

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'toolbarTitle': 'Full Screen View',
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
            }
        };
    }

    load(item: any): Observable<any> {
        this.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('maps/' + item.theme)
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
