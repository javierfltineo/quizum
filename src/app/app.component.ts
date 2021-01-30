import { Component } from '@angular/core';
import {ExportService} from './services/export-service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuService } from './services/menu-service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [MenuService, ExportService]
})
export class AppComponent {
  public appPages = [];
  headerMenuItem = {
    'image': '',
    'title': '',
    'background': ''
  }
  isEnabledRTL: boolean = false;

  data = {}
  showMenu = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuService: MenuService,
    private exportService: ExportService,
    private navController: NavController
  ) {
    this.showMenu = true;
    this.isEnabledRTL = localStorage.getItem('isEnabledRTL') == "true";
    //console.log(JSON.stringify(exportService.export()));
    this.initializeApp();
    this.appPages = this.menuService.getAllThemes();
    this.menuService.load().subscribe(d => {
      this.headerMenuItem = d;
  });

  }

  initializeApp() {
    this.data = {
      "image": "assets/imgs/avatar/13.jpg",
      "title": "Carolyn Guerrero",
      "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner.",
      "followers": "Followers",
      "valueFollowers": "439",
      "following": "Following",
      "valueFollowing": "297",
      "posts": "Posts",
      "valuePosts": "43",
    }
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#000000');
      //this.splashScreen.hide();
      this.setRTL();
    });
  }
  setRTL() {
    document.getElementsByTagName('html')[0]
            .setAttribute('dir', this.isEnabledRTL  ? 'rtl': 'ltr');
  }

  openPage(page) {
    this.navController.navigateRoot([page.url], {});
  }
}
