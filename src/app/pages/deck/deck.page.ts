import { AppSettings } from '../../services/app-settings';
import { Component } from '@angular/core';
import { DeckService } from '../../services/deck-service';
import { ModalController } from '@ionic/angular';
import { IntroPage } from '../intro-page/intro-page.page';

@Component({
  selector: 'app-deck',
  templateUrl: 'deck.page.html',
  styleUrls: ['deck.page.scss'],
  providers: [DeckService]
})
export class DeckPage {

  data = {}
  item = {}
  
  constructor(
    private service:DeckService, 
    public modalController: ModalController) { 
        this.item = {
          'id' : 'asdfsdg34ver',
          'name' : 'Python',
          'description' : 'Todo sobre python',
        }
        this.data = {
          'submitButton' : 'Actualizar',
        }
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
