import { AppSettings } from '../../services/app-settings';
import { Component } from '@angular/core';
import { DeckService } from '../../services/deck-service';
import { ModalController } from '@ionic/angular';
import { IntroPage } from '../intro-page/intro-page.page';

@Component({
  selector: 'app-decks',
  templateUrl: 'decks.page.html',
  styleUrls: ['decks.page.scss'],
  providers: [DeckService]
})
export class DecksPage {

  data = {}
  public ids : string[] = []
  // el id del mazos son strings
  // public ids : string[]  = []
  constructor(
    private service:DeckService, 
    public modalController: ModalController) { 
        this.service.load(service.getAllThemes()[1]).subscribe(d => {
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
      let showWizard = localStorage.getItem("SHOW_START_WIZARD");

      if (AppSettings.SHOW_START_WIZARD && !showWizard) {
        this.openModal()
      }
  }

  async openModal() {
    let modal = await this.modalController.create({component: IntroPage});
     return await modal.present();
  }

  // onItemClick(event) {
  //   console.warn(event);
  //   console.log('onItemClick');
  // }

  onDelete(event) {
    console.warn(event);
    console.log('onDelete');
  }
}
