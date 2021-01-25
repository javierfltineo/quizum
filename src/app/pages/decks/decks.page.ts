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
  
  constructor(
    private service:DeckService, 
    public modalController: ModalController) { 
        this.service.load(service.getAllThemes()[1]).subscribe(d => {
            this.data = d;
            console.log(this.data);
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

  onItemClick(event) {
    console.warn(event);
    console.log('onItemClick');
  }

  onDelete(event) {
    console.warn(event);
    console.log('onDelete');
  }
}
