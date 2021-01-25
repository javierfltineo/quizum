import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class AnimationService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getTitle = (): string => 'Animation';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'animation/0', 'title': 'FadeIn Left', 'theme': 'layout1' },
      { 'url': 'animation/1', 'title': 'FadeIn Right', 'theme': 'layout2' },
      { 'url': 'animation/2', 'title': 'SlideInUp', 'theme': 'layout3' },
      { 'url': 'animation/3', 'title': 'ZoomIn', 'theme': 'layout4' },
      { 'url': 'animation/4', 'title': 'BounceIn', 'theme': 'layout5' },
      { 'url': 'animation/5', 'title': 'FadeIn', 'theme': 'layout6' },
      { 'url': 'animation/6', 'title': 'BounceIn Right', 'theme': 'layout7' },
      { 'url': 'animation/7', 'title': 'SlideIn Left And ZoomIn', 'theme': 'layout8' },
      { 'url': 'animation/8', 'title': 'SlideIn Up And ZoomIn', 'theme': 'layout9' },
      { 'url': 'animation/9', 'title': 'BounceIn Left', 'theme': 'layout10' }

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
      'toolbarTitle': 'FadeIn Left',
      "items": [
          {
              "id": 1,
              "title": "Isabel Anguiano",
              "subtitle": "@isabel",
              "isChecked": false,
              "image": "assets/imgs/avatar/11.jpg"
          },
          {
              "id": 2,
              "title": "Luna Adorno",
              "subtitle": "@luna",
              "isChecked": false,
              "image": "assets/imgs/avatar/10.jpg"
          },
          {
              "id": 3,
              "title": "Abbie Kelly",
              "subtitle": "@abbie",
              "isChecked": true,
              "image": "assets/imgs/avatar/16.jpg"
          },
          {
              "id": 4,
              "title": "Silvia Salvador",
              "subtitle": "@silvia",
              "isChecked": true,
              "image": "assets/imgs/avatar/14.jpg"
          },
          {
              "id": 5,
              "title": "Teresa Puga",
              "subtitle": "@teresa",
              "isChecked": true,
              "image": "assets/imgs/avatar/13.jpg"
          },
          {
              "id": 6,
              "title": "Tara Saunders",
              "subtitle": "@tara34",
              "isChecked": true,
              "image": "assets/imgs/avatar/12.jpg"
          },
          {
              "id": 7,
              "title": "Lisa Chapman",
              "subtitle": "@lisa957",
              "isChecked": true,
              "image": "assets/imgs/avatar/17.jpg"
          },
          {
              "id": 8,
              "title": "Evie Stevens",
              "subtitle": "@evie957",
              "isChecked": true,
              "image": "assets/imgs/avatar/16.jpg"
          },
          {
              "id": 9,
              "title": "Eva Tapia",
              "subtitle": "@eva",
              "isChecked": true,
              "image": "assets/imgs/avatar/15.jpg"
          },
          {
              "id": 10,
              "title": "Julia Requena",
              "subtitle": "@julia",
              "isChecked": true,
              "image": "assets/imgs/avatar/18.jpg"
          }
      ]
    }
  }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
      return {
        'toolbarTitle': 'FadeIn Right',
        "title": "Make order now!",
        "subtitle": "Reorder list by your wish.",
        "button": "Confirm",
        "items": [
            {
                "id": 1,
                "title": "Keyboard",
                "subtitle": "20% Off",
                "image": "assets/imgs/avatar/2.jpg",
                "price": "$199.99"
            },
            {
                "id": 2,
                "title": "Headphones",
                "subtitle": "15% Off",
                "image": "assets/imgs/avatar/3.jpg",
                "price": "$295.99"
            },
            {
                "id": 3,
                "title": "Watch",
                "subtitle": "22% Off",
                "image": "assets/imgs/avatar/6.jpg",
                "price": "$1032.99"
            },
            {
                "id": 4,
                "title": "Dualshock controller",
                "subtitle": "10% Off",
                "image": "assets/imgs/avatar/0.jpg",
                "price": "$1269.99"
            },
            {
                "id": 5,
                "title": "Canon Photoaparat",
                "subtitle": "12% Off",
                "image": "assets/imgs/avatar/5.jpg",
                "price": "$34.99"
            },
            {
                "id": 6,
                "title": "Objective",
                "subtitle": "14% Off",
                "image": "assets/imgs/avatar/7.jpg",
                "price": "$499.99"
            },
        ]
      };
    }

      //* Data Set for page 3
  getDataForLayout3 = (): any => {
    return {
      'toolbarTitle' : 'SlideIn Up',
      "items": [
          {
              "id": 1,
              "title": "Paris",
              "subtitle": "Pre-sale",
              "icon": "location",
              "image": "assets/imgs/background/33.jpg",
          },
          {
              "id": 2,
              "title": "New York",
              "subtitle": "Pre-sale",
              "icon": "location",
              "image": "assets/imgs/background/38.jpg",
          },
          {
              "id": 3,
              "title": "London",
              "subtitle": "Pre-sale",
              "icon": "location",
              "image": "assets/imgs/background/19.jpg",
          }
      ]
    };
  }

    //* Data Set for page 4
    getDataForLayout4 = (): any => {
      return {
        'toolbarTitle' : 'ZoomIn',
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

      //* Data Set for page 5
  getDataForLayout5 = (): any => {
    return {
      'toolbarTitle': 'BounceIn',
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
    }
  }

    //* Data Set for page 6
    getDataForLayout6 = (): any => {
      return {
        'toolbarTitle' : 'FadeIn',
        "items": [
            {
                "id": 1,
                "image": "assets/imgs/background/19.jpg",
                "title": "Rejkjavik",
                "subtitle": "New offer",
                "iconLike": "heart",
                "iconComment": "chatbubbles",
                "buttonLike": "Like",
                "buttonComment": "Comment",
                "price": "$135.99",
                "button": "Reservation"
            },
            {
                "id": 2,
                "image": "assets/imgs/background/28.jpg",
                "title": " Moscow",
                "subtitle": "New offer",
                "iconLike": "heart",
                "iconComment": "chatbubbles",
                "buttonLike": "Like",
                "buttonComment": "Comment",
                "price": "$312.99",
                "button": "Reservation"
            },
            {
                "id": 3,
                "image": "assets/imgs/background/33.jpg",
                "title": "San Francisco",
                "subtitle": "New offer",
                "iconLike": "heart",
                "iconComment": "chatbubbles",
                "buttonLike": "Like",
                "buttonComment": "Comment",
                "price": "$213.45",
                "button": "Reservation"
            },
            {
                "id": 4,
                "image": "assets/imgs/background/0.jpg",
                "title": "New York City",
                "subtitle": "New offer",
                "iconLike": "heart",
                "iconComment": "chatbubbles",
                "buttonLike": "Like",
                "buttonComment": "Comment",
                "price": "$338.60",
                "button": "Reservation"
            },
            {
                "id": 5,
                "image": "assets/imgs/background/32.jpg",
                "title": "Berlin",
                "subtitle": "New offer",
                "iconLike": "heart",
                "iconComment": "chatbubbles",
                "buttonLike": "Like",
                "buttonComment": "Comment",
                "price": "$410.85",
                "button": "Reservation"
            },
            {
                "id": 6,
                "image": "assets/imgs/background/34.jpg",
                "title": "London",
                "subtitle": "New offer",
                "iconLike": "heart-outline",
                "iconComment": "chatbubble",
                "buttonLike": "Like",
                "buttonComment": "Comment",
                "price": "$516.55",
                "button": "Reservation"
            }
        ]
      }
    }

      //* Data Set for page 7
  getDataForLayout7 = (): any => {
    return {
      'toolbarTitle': 'BounceIn Right',
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
    }
  }

    //* Data Set for page 8
    getDataForLayout8 = (): any => {
      return {
        'toolbarTitle': 'SlideIn Left And ZoomIn',
        "headerImage": "assets/imgs/background/12.jpg",
        "title": "Travel Buddy",
        "items": [
            {
                "id": 1,
                "title": "Victoria Simpson",
                "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                "image": "assets/imgs/avatar/24.jpg",
                "imageAlt": "avatar",
                "iconButton": "person-add",
                "button": "Follow"
            },
            {
                "id": 2,
                "title": "Samantha Reynolds",
                "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                "image": "assets/imgs/avatar/10.jpg",
                "imageAlt": "avatar",
                "iconButton": "person-add",
                "button": "Follow"
            },
            {
                "id": 3,
                "title": "Stacey Harris",
                "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                "image": "assets/imgs/avatar/11.jpg",
                "imageAlt": "avatar",
                "iconButton": "person-add",
                "button": "Follow"
            },
            {
                "id": 4,
                "title": "Jacqueline Guyon",
                "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                "image": "assets/imgs/avatar/12.jpg",
                "imageAlt": "avatar",
                "iconButton": "person-add",
                "button": "Follow"
            },
            {
                "id": 5,
                "title": "Mia Langevoort",
                "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                "image": "assets/imgs/avatar/13.jpg",
                "imageAlt": "avatar",
                "iconButton": "person-add",
                "button": "Follow"
            },
            {
                "id": 6,
                "title": "Amy Simsek",
                "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                "image": "assets/imgs/avatar/14.jpg",
                "imageAlt": "avatar",
                "iconButton": "person-add",
                "button": "Follow"
            },
            {
                "id": 7,
                "title": "Charlotte Sital",
                "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                "image": "assets/imgs/avatar/15.jpg",
                "imageAlt": "avatar",
                "iconButton": "person-add",
                "button": "Follow"
            },
            {
                "id": 8,
                "title": "Iria Padrón",
                "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                "image": "assets/imgs/avatar/16.jpg",
                "imageAlt": "avatar",
                "iconButton": "person-add",
                "button": "Follow"
            },
            {
                "id": 9,
                "title": "Laura Sarabia",
                "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                "image": "assets/imgs/avatar/17.jpg",
                "imageAlt": "avatar",
                "iconButton": "person-add",
                "button": "Follow"
            },
            {
                "id": 10,
                "title": "Alexia Bañuelos",
                "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                "image": "assets/imgs/avatar/18.jpg",
                "imageAlt": "avatar",
                "iconButton": "person-add",
                "button": "Follow"
            },
            {
                "id": 11,
                "title": "Erika Quiroz",
                "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                "image": "assets/imgs/avatar/19.jpg",
                "imageAlt": "avatar",
                "iconButton": "person-add",
                "button": "Follow"
            },
            {
                "id": 12,
                "title": "Emma Banda",
                "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                "image": "assets/imgs/avatar/20.jpg",
                "imageAlt": "Presque Isle Harbor",
                "iconButton": "person-add",
                "button": "Follow"
            }
        ]
      }
    }

      //* Data Set for page 9
  getDataForLayout9 = (): any => {
    return {
      'toolbarTitle': 'SlideIn Up And ZoomIn',
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
    }
  }

    //* Data Set for page 10
    getDataForLayout10 = (): any => {
      return {
        'toolbarTitle': 'BounceIn Left',
        "items": [
            {
                "id": 1,
                "backgroundImage": "assets/imgs/background/10.jpg",
                "title": "Cheap flights from Malaga to London",
                "items": {
                    "iconsStars": [
                        {
                            "isActive": true,
                            "iconActive": "icon-star",
                            "iconInactive": "icon-star-outline"
                        },
                        {
                            "isActive": true,
                            "iconActive": "icon-star",
                            "iconInactive": "icon-star-outline"
                        },
                        {
                            "isActive": true,
                            "iconActive": "icon-star",
                            "iconInactive": "icon-star-outline"
                        },
                        {
                            "isActive": true,
                            "iconActive": "icon-star",
                            "iconInactive": "icon-star-outline"
                        },
                        {
                            "isActive": false,
                            "iconActive": "icon-star",
                            "iconInactive": "icon-star-outline"
                        }
                    ]
                }
            },
            {
                "id": 2,
                "backgroundImage": "assets/imgs/background/27.jpg",
                "title": "Direct flights from Riga to Kutaisi",
                "items": {
                    "iconsStars": [
                        {
                            "isActive": true,
                            "iconActive": "icon-star",
                            "iconInactive": "icon-star-outline"
                        },
                        {
                            "isActive": true,
                            "iconActive": "icon-star",
                            "iconInactive": "icon-star-outline"
                        },
                        {
                            "isActive": true,
                            "iconActive": "icon-star",
                            "iconInactive": "icon-star-outline"
                        },
                        {
                            "isActive": true,
                            "iconActive": "icon-star",
                            "iconInactive": "icon-star-outline"
                        },
                        {
                            "isActive": false,
                            "iconActive": "icon-star",
                            "iconInactive": "icon-star-outline"
                        }
                    ]
                }
            },
            {
                "id": 3,
                "backgroundImage": "assets/imgs/background/15.jpg",
                "title": "Last Minute flights to Zakynthos",
                "items": {
                    "iconsStars": [
                        {
                            "isActive": true,
                            "iconActive": "icon-star",
                            "iconInactive": "icon-star-outline"
                        },
                        {
                            "isActive": true,
                            "iconActive": "icon-star",
                            "iconInactive": "icon-star-outline"
                        },
                        {
                            "isActive": true,
                            "iconActive": "icon-star",
                            "iconInactive": "icon-star-outline"
                        },
                        {
                            "isActive": true,
                            "iconActive": "icon-star",
                            "iconInactive": "icon-star-outline"
                        },
                        {
                            "isActive": false,
                            "iconActive": "icon-star",
                            "iconInactive": "icon-star-outline"
                        }
                    ]
                }
            },
            {
                "id": 4,
                "backgroundImage": "assets/imgs/background/6.jpg",
                "title": "Cheap flights from Prague to Marocco",
                "items": {
                    "iconsStars": [
                        {
                            "isActive": true,
                            "iconActive": "icon-star",
                            "iconInactive": "icon-star-outline"
                        },
                        {
                            "isActive": true,
                            "iconActive": "icon-star",
                            "iconInactive": "icon-star-outline"
                        },
                        {
                            "isActive": true,
                            "iconActive": "icon-star",
                            "iconInactive": "icon-star-outline"
                        },
                        {
                            "isActive": true,
                            "iconActive": "icon-star",
                            "iconInactive": "icon-star-outline"
                        },
                        {
                            "isActive": false,
                            "iconActive": "icon-star",
                            "iconInactive": "icon-star-outline"
                        }
                    ]
                }
            }
        ]
      }
    }


  load(item: any): Observable<any> {
    const that = this;
    that.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('animation/' + item.theme)
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
