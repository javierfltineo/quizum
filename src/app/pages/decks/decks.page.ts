import { AppSettings } from '../../services/app-settings';
import { Component, Injectable } from '@angular/core';
import { DeckService } from '../../services/deck-service';
import { ModalController } from '@ionic/angular';
import { IntroPage } from '../intro-page/intro-page.page';
import { Mazo } from 'src/app/models/mazo.model';
@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-decks',
  templateUrl: 'decks.page.html',
  styleUrls: ['decks.page.scss'],
  providers: [DeckService]
})
export class DecksPage {

  public data = {}
  public ids : string[] = []
  // el id del mazos son strings
  // public ids : string[]  = []
  constructor(
    public service:DeckService, 
    public modalController: ModalController) { 
        // this.service.load(service.getAllThemes()[1]).subscribe(d => {
        //     this.data = d;
        //     console.log(this.data);
        //     var a = this.data["items"]
        //     //[0]["id"]
        //     console.log(a);
        //     console.log(a.length);
        //     for(let i = 0; i<a.length ;i++){
              
              

        //       this.ids[i]="/deck/" + a[i]["id"].toString()
        //       console.log(this.ids[i]);
              
        //     }
        // });
      let showWizard = localStorage.getItem("SHOW_START_WIZARD");

      if (AppSettings.SHOW_START_WIZARD && !showWizard) {
        this.openModal()
      }
  }
  ionViewWillEnter(){
    this.service.load(this.service.getAllThemes()[1]).subscribe(d => {
      this.data = d;
      console.log(this.data);
      var a = this.data["items"]
      //[0]["id"]
      console.log(a);
      console.log(a.length);
      for(let i = 0; i<a.length ;i++){
        
        

        this.ids[i]="/deck/" + a[i]["id"].toString()
        console.log(this.ids[i]);
        
      }
  });
  }


  async openModal() {
    let modal = await this.modalController.create({component: IntroPage});
     return await modal.present();
  }

  onItemClick(event) {
    // console.warn(event);
    // console.log('hola holita');
  }
 
  onDelete(event) {
    console.warn(event);
    console.log('onDelete');
  }
  // doRefresh(event) {
  //   console.log('Begin async operation');

  //   setTimeout(() => {
  //     console.log('Async operation has ended');
  //     event.target.complete();
  //   }, 2000);
  // }
}
