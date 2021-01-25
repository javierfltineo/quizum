import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ActionSheetService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

    getId = (): string => 'actionSheet';

    getTitle = (): string => 'Action Sheet';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'action-sheet/0', 'title': 'Basic', 'theme': 'layout1' },
            { 'url': 'action-sheet/1', 'title': 'News', 'theme': 'layout2' },
            { 'url': 'action-sheet/2', 'title': 'With Text Header', 'theme': 'layout3' }
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
            'toolbarTitle': 'Basic',
            "headerImage": "assets/imgs/background/11.jpg",
            "shareIcon": "ellipsis-horizontal",
            "actionSheet": {
              "title": "Choose what to do with this card?",
                "buttons": [
                    {
                        "text": "Mark as read",
                        "role": "destructive"
                    },
                    {
                        "text": "Follow author"
                    },
                    {
                        "text": "Read more info"
                    },
                    {
                        "text": "More from category"
                    },
                    {
                        "text": "Cancel",
                        "role": "cancel"
                    }
                ]
            },
            "items": [
                {
                    "id": 1,
                    "title": " San Francisco",
                    "subtitle": "Golden Gate Bridge",
                    "category": "NEW OFFER",
                    "button": "$63.99",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                    "productDescriptions": [
                        {
                            "id": 1,
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
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
                }
            ]
        }
    };

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle': 'News',
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
            "actionSheet": {
                  "title": "Choose what to do with this card?",
                  "buttons": [
                      {
                          "text": "Mark as read",
                          "role": "destructive"
                      },
                      {
                          "text": "Follow author"
                      },
                      {
                          "text": "Read more info"
                      },
                      {
                          "text": "More from category"
                      },
                      {
                          "text": "Cancel",
                          "role": "cancel"
                      }
                  ]
              },
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
    };

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'toolbarTitle': 'With Text Header',
            "shareIcon": "ellipsis-horizontal",
            "actionSheet": {
                "title": "Choose what to do with this card?",
                "buttons": [
                    {
                        "text": "Mark as read",
                        "role": "destructive"
                    },
                    {
                        "text": "Follow author"
                    },
                    {
                        "text": "Read more info"
                    },
                    {
                        "text": "More from category"
                    },
                    {
                        "text": "Cancel",
                        "role": "cancel"
                    }
                ]
            },
            "items": [
              {
                  "id": 1,
                  "avatar": "assets/imgs/avatar/10.jpg",
                  "title": "Neil Roberts",
                  "subtitle": "neil@gmail.com",
                  "time" : "15min ago",
                  "image": "assets/imgs/background/19.jpg",
                  "cardTitle": "Paris",
                  "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
                  "iconLike": "heart",
                  "iconComment": "chatbubbles",
                  "numberLike": "12",
                  "numberCommnet": "31",
                  "share": "share",
                  "iconShere": "arrow-redo"

              },
              {
                  "id": 2,
                  "avatar": "assets/imgs/avatar/11.jpg",
                  "title": "Samantha Keny",
                  "subtitle": "sam@gmail.com",
                  "time" : "18min ago",
                  "image": "assets/imgs/background/33.jpg",
                  "cardTitle": "Moscow",
                  "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
                  "iconLike": "heart",
                  "iconComment": "chatbubbles",
                  "numberLike": "55",
                  "numberCommnet": "33",
                  "share": "share",
                  "iconShere": "arrow-redo"
              },
              {
                  "id": 3,
                  "avatar": "assets/imgs/avatar/12.jpg",
                  "title": "Liam Hughes",
                  "subtitle": "liam@gmail.com",
                  "time" : "20min ago",
                  "image": "assets/imgs/background/28.jpg",
                  "cardTitle": "London",
                  "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
                  "iconLike": "heart",
                  "iconComment": "chatbubbles",
                  "numberLike": "12",
                  "numberCommnet": "14",
                  "share": "share",
                  "iconShere": "arrow-redo"
              },
              {
                  "id": 4,
                  "avatar": "assets/imgs/avatar/13.jpg",
                  "title": "Caitlin Wilkinson",
                  "subtitle": "caitlin@gmail.com",
                  "time" : "21min ago",
                  "image": "assets/imgs/background/0.jpg",
                  "cardTitle": "Berlin",
                  "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
                  "iconLike": "heart",
                  "iconComment": "chatbubbles",
                  "numberLike": "123 ",
                  "numberCommnet": "41 Comments",
                  "share": "share",
                  "iconShere": "arrow-redo"
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
                    .object('actionSheet/' + item.theme)
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
