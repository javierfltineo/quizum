import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ParallaxService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

    getTitle = (): string => 'Parallax';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'parallax/0', 'title': 'News List', 'theme': 'layout1' },
            { 'url': 'parallax/1', 'title': 'Prifile', 'theme': 'layout2' },
            { 'url': 'parallax/2', 'title': 'Basic', 'theme': 'layout3' },
            { 'url': 'parallax/3', 'title': 'News', 'theme': 'layout4' }
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
          'toolbarTitle': 'Showbiz',
          "headerImage": "assets/imgs/background/12.jpg",
          "title": "Travel Buddy",
          "items": [
              {
                  "id": 1,
                  "title": "Victoria Simpson",
                  "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                  "image": "assets/imgs/avatar/24.jpg",
                  "imageAlt": "avatar",
                  "iconButton": "md-person-add",
                  "button": "Follow"
              },
              {
                  "id": 2,
                  "title": "Samantha Reynolds",
                  "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                  "image": "assets/imgs/avatar/10.jpg",
                  "imageAlt": "avatar",
                  "iconButton": "md-person-add",
                  "button": "Follow"
              },
              {
                  "id": 3,
                  "title": "Stacey Harris",
                  "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                  "image": "assets/imgs/avatar/11.jpg",
                  "imageAlt": "avatar",
                  "iconButton": "md-person-add",
                  "button": "Follow"
              },
              {
                  "id": 4,
                  "title": "Jacqueline Guyon",
                  "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                  "image": "assets/imgs/avatar/12.jpg",
                  "imageAlt": "avatar",
                  "iconButton": "md-person-add",
                  "button": "Follow"
              },
              {
                  "id": 5,
                  "title": "Mia Langevoort",
                  "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                  "image": "assets/imgs/avatar/13.jpg",
                  "imageAlt": "avatar",
                  "iconButton": "md-person-add",
                  "button": "Follow"
              },
              {
                  "id": 6,
                  "title": "Amy Simsek",
                  "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                  "image": "assets/imgs/avatar/14.jpg",
                  "imageAlt": "avatar",
                  "iconButton": "md-person-add",
                  "button": "Follow"
              },
              {
                  "id": 7,
                  "title": "Charlotte Sital",
                  "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                  "image": "assets/imgs/avatar/15.jpg",
                  "imageAlt": "avatar",
                  "iconButton": "md-person-add",
                  "button": "Follow"
              },
              {
                  "id": 8,
                  "title": "Iria Padrón",
                  "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                  "image": "assets/imgs/avatar/16.jpg",
                  "imageAlt": "avatar",
                  "iconButton": "md-person-add",
                  "button": "Follow"
              },
              {
                  "id": 9,
                  "title": "Laura Sarabia",
                  "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                  "image": "assets/imgs/avatar/17.jpg",
                  "imageAlt": "avatar",
                  "iconButton": "md-person-add",
                  "button": "Follow"
              },
              {
                  "id": 10,
                  "title": "Alexia Bañuelos",
                  "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                  "image": "assets/imgs/avatar/18.jpg",
                  "imageAlt": "avatar",
                  "iconButton": "md-person-add",
                  "button": "Follow"
              },
              {
                  "id": 11,
                  "title": "Erika Quiroz",
                  "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                  "image": "assets/imgs/avatar/19.jpg",
                  "imageAlt": "avatar",
                  "iconButton": "md-person-add",
                  "button": "Follow"
              },
              {
                  "id": 12,
                  "title": "Emma Banda",
                  "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                  "image": "assets/imgs/avatar/20.jpg",
                  "imageAlt": "Presque Isle Harbor",
                  "iconButton": "md-person-add",
                  "button": "Follow"
              }
          ]
       };
    }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle': 'Profile',
            "headerImage": "assets/imgs/background/36.jpg",
            "avatar": "assets/imgs/avatar/14.jpg",
            "title": "Jessica White",
            "subtitle": "Lorem ipsum dolor sit amet",
            "buttonFollowers": "Followers",
            "buttonFollowing": "Following",
            "buttonEvents": "Events",
            "followers": "2300",
            "following": "3230",
            "events": "230",
            "items": [
                {
                    "id": 1,
                    "title": "Paris",
                    "image": "assets/imgs/background/33.jpg",
                    "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
                    "iconLike": "heart",
                    "iconComment": "chatbubbles",
                    "like": "Likes",
                    "commnet": "Comments",
                    "share": "share",
                    "iconShere": "arrow-redo"
                },
                {
                    "id": 2,
                    "title": "Venice",
                    "image": "assets/imgs/background/32.jpg",
                    "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
                    "iconLike": "heart",
                    "iconComment": "chatbubbles",
                    "like": "Likes",
                    "commnet": "Comments",
                    "share": "share",
                    "iconShere": "arrow-redo"
                }
            ]
        };
    }

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'toolbarTitle': 'Product',
            "headerImage": "assets/imgs/background/37.jpg",
            "title": "Aurora Polaris",
            "date": "Marc 14. 1017",
            "iconLike": "heart",
            "iconComment": "chatbubbles",
            "likes": "3.7k",
            "comments": "352",
            "items": [
                  {
                    "id": 1,
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  },
                  {
                    "id": 2,
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  },
                  {
                    "id": 3,
                    "description": "Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                  },
                  {
                    "id": 4,
                    "description": "Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                  }
             ]
         };
    }

    //* Data Set for page 4
    getDataForLayout4 = (): any => {
        return {
            "toolbarTitle": "News",
            "headerImage": "assets/imgs/background/33.jpg",
            "avatarName": "by Myrtle Stiedemann",
            "title": "Infinit bridge made in China.",
            "subtitle": "Infinit bridge made in China. Locals said that is not possible",
            "avatar": "assets/imgs/avatar/24.jpg",
            "shareIcon": "ellipsis-horizontal",
            "iconLike": "heart",
            "iconComment": "chatbubbles",
            "numberLike": "12 Likes",
            "numberCommnet": "4 Comments",
            "items": [
                {
                    "id": 1,
                    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                {
                    "id": 2,
                    "title": "Lorem ipsum dolor sit amet",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                {
                    "id": 3,
                    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                },
                {
                    "id": 4,
                    "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                }
            ]
        };
    }

    load(item: any): Observable<any> {
        this.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('parallax/' + item.theme)
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
