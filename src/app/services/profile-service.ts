import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ProfileService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getTitle = (): string => 'Profile';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'profile/0', 'title': 'Profile With Avatar', 'theme': 'layout1' },
            { 'url': 'profile/1', 'title': 'Profile with Slider + Comments', 'theme': 'layout2' },
            { 'url': 'profile/2', 'title': 'Profile Basic', 'theme': 'layout3' },
            { 'url': 'profile/3', 'title': 'Profile with Slider', 'theme': 'layout4' },
            { 'url': 'profile/4', 'title': 'Profile with Big Image', 'theme': 'layout5' }
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
            'toolbarTitle': 'Profile With Avatar',
            "image": "assets/imgs/avatar/20.jpg",
            "title": "Samantha Kennedy",
            "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
            "category": "populary",
            "items": [
                {
                    "id": 1,
                    "category": "Engineering News",
                    "title": "Small flying robots haul heavy loads",
                    "like": {
                        "icon": "heart",
                        "number": "4",
                        "text": "Like",
                        "isActive": true
                    },
                    "comment": {
                        "icon": "chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                },
                {
                    "id": 2,
                    "category": "Bioengineering News",
                    "title": "Creating custom brains from the ground up",
                    "like": {
                        "icon": "heart",
                        "number": "4",
                        "text": "Like",
                        "isActive": true
                    },
                    "comment": {
                        "icon": "chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                },
                {
                    "id": 3,
                    "category": "Energy and Resources News",
                    "title": "3D-printed lithium-ion batteries",
                    "like": {
                        "icon": "heart",
                        "number": "4",
                        "text": "Like",
                        "isActive": true
                    },
                    "comment": {
                        "icon": "chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                }
            ]
        };
    }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle': 'Profile with Slider + Comments',
            "image": "assets/imgs/avatar/22.jpg",
            "title": "Carolyn Guerrero",
            "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
            "category": "populary",
            "followers": "Followers",
            "valueFollowers": "439",
            "following": "Following",
            "valueFollowing": "297",
            "posts": "Posts",
            "valuePosts": "43",
            "items": [
                {
                    "id": 1,
                    "category": "Engineering News",
                    "title": "New definition returns meaning to information",
                    "like": {
                        "icon": "heart",
                        "number": "4",
                        "text": "Like",
                        "isActive": true
                    },
                    "comment": {
                        "icon": "chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                },
                {
                    "id": 2,
                    "category": "Science News",
                    "title": "Investigating glaciers in depth",
                    "like": {
                        "icon": "heart",
                        "number": "4",
                        "text": "Like",
                        "isActive": true
                    },
                    "comment": {
                        "icon": "chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                },
                {
                    "id": 3,
                    "category": "Science News",
                    "title": "Nanodiamonds as photocatalysts",
                    "like": {
                        "icon": "heart",
                        "number": "4",
                        "text": "Like",
                        "isActive": true
                    },
                    "comment": {
                        "icon": "chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                }
            ]
        };
    }

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'toolbarTitle': 'Profile Basic',
            "image": "assets/imgs/avatar/24.jpg",
            "title": "Carolyn Guerrero",
            "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
            "category": "populary",
            "followers": "Followers",
            "valueFollowers": "439",
            "following": "Following",
            "valueFollowing": "297",
            "posts": "Posts",
            "valuePosts": "43",
            "items": [
                {
                    "id": 1,
                    "category": "architecture",
                    "backgroundCard": "assets/imgs/background/5.jpg",
                    "title": "Sea bridge opens between hong kong and china",
                    "like": {
                        "icon": "heart",
                        "number": "4",
                        "text": "Like",
                        "isActive": true
                    },
                    "comment": {
                        "icon": "chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                },
                {
                    "id": 2,
                    "category": "architecture",
                    "backgroundCard": "assets/imgs/background/21.jpg",
                    "title": "The World's longest sea crossing opens",
                    "like": {
                        "icon": "heart",
                        "number": "4",
                        "text": "Like",
                        "isActive": true
                    },
                    "comment": {
                        "icon": "chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                },
                {
                    "id": 3,
                    "category": "architecture",
                    "backgroundCard": "assets/imgs/background/2.jpg",
                    "title": "The 'bank of africa tower' will be tallest",
                    "like": {
                        "icon": "heart",
                        "number": "4",
                        "text": "Like",
                        "isActive": true
                    },
                    "comment": {
                        "icon": "chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                }
            ]
        };
    }

    //* Data Set for page 4
    getDataForLayout4 = (): any => {
        return {
            'toolbarTitle': 'Profile with Slider',
            "image": "assets/imgs/avatar/16.jpg",
            "title": "Katie Murray",
            "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
            "category": "populary",
            "followers": "Followers",
            "valueFollowers": "439",
            "following": "Following",
            "valueFollowing": "297",
            "posts": "Posts",
            "valuePosts": "43",
            "items": [
                {
                    "id": 1,
                    "category": "architecture",
                    "backgroundCard": "assets/imgs/background/21.jpg",
                    "title": "The World's longest sea crossing opens",
                    "like": {
                        "icon": "heart",
                        "number": "4",
                        "text": "Like",
                        "isActive": true
                    },
                    "comment": {
                        "icon": "chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                },
                {
                    "id": 2,
                    "category": "architecture",
                    "backgroundCard": "assets/imgs/background/5.jpg",
                    "title": "SSea bridge opens between hong kong and china",
                    "like": {
                        "icon": "heart",
                        "number": "4",
                        "text": "Like",
                        "isActive": true
                    },
                    "comment": {
                        "icon": "chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                },
                {
                    "id": 3,
                    "category": "architecture",
                    "backgroundCard": "assets/imgs/background/2.jpg",
                    "title": "The 'bank of africa tower' will be tallest",
                    "like": {
                        "icon": "heart",
                        "number": "4",
                        "text": "Like",
                        "isActive": true
                    },
                    "comment": {
                        "icon": "chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                }
            ]
        };
    }

    //* Data Set for page 5
    getDataForLayout5 = (): any => {
        return {
            'toolbarTitle': 'Profile with Big Image',
            "headerImage": "assets/imgs/background/26.jpg",
            "image": "assets/imgs/avatar/12.jpg",
            "title": "Jennifer Reid",
            "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
            "category": "populary",
            "followers": "Followers",
            "valueFollowers": "439",
            "following": "Following",
            "valueFollowing": "297",
            "posts": "Posts",
            "valuePosts": "43",
            "logoFacebook": "logo-facebook",
            "logoTwitter": "logo-twitter",
            "logoInstagram": "logo-instagram",
            "items": [
                {
                    "id": 1,
                    "iconPhone": "call",
                    "iconMail": "mail-open",
                    "iconGlobe": "globe",
                    "phone": "i598-968-5698987",
                    "mail": "dev@csform.com",
                    "globe": "csform.com",
                    "content": "Content",
                    "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    "title": "About",
                }
            ]
        };
    }

    load(item: any): Observable<any> {
        this.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('profile/' + item.theme)
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
