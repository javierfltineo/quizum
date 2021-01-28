import { AppSettings } from '../../services/app-settings';
import { Component } from '@angular/core';
import { DeckService } from '../../services/deck-service';
import { ModalController } from '@ionic/angular';
import { IntroPage } from '../intro-page/intro-page.page';
import { HttpService } from 'src/app/services/HttpService';

@Component({
  selector: 'app-deck',
  templateUrl: 'deck.page.html',
  styleUrls: ['deck.page.scss'],
  providers: [DeckService]
})
export class DeckPage {

  data = {}
  item = {}
  
  questions : string[] = []

  items = []

  constructor(
    private service:DeckService, 
    private http:HttpService,
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
      
      this.pruebaPreguntas()
      
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
  getUser(){
    console.log("hola")
    this.http.getData();
  }
  
  pruebaPreguntas(){
    this.items = [
  		{"pregunta": 'Cuál es la raíz cuadrada de 25', "respuesta": '5','mostrar':false},
  		{"pregunta": 'Cuál es la raíz cuadrada de 25', "respuesta": '5','mostrar':false},
      {"pregunta": 'Cuál es la raíz cuadrada de 25', "respuesta": '5','mostrar':false},
      {"pregunta": ' Un español medio pierde alrededor de tres calcetines al año. Si los multiplicamos por toda la población española, eso supone un total de unos 120 millones de calcetines perdidos. ¿Dónde están esos 120 millones de calcetines?', "respuesta": 'Solo Dios lo sabe','mostrar':false}
   	];
  
  }


  showAnswer(n :number){
    if( !this.items[n].mostrar ){
      this.items[n].mostrar = true
    }else{
      this.items[n].mostrar = false
    }
      
  }
}
