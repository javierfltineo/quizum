import { AppSettings } from '../../services/app-settings';
import { Component } from '@angular/core';
import { DeckService } from '../../services/deck-service';
import { IonItem, ModalController } from '@ionic/angular';
import { IntroPage } from '../intro-page/intro-page.page';
import { BaseService } from 'src/app/services/meus/base.service';
import { Questions } from 'src/app/models/questions.model';

// import { BaseService } from 'src/app/services/meus/base.service';


@Component({
  selector: 'app-deck',
  templateUrl: 'deck.page.html',
  styleUrls: ['deck.page.scss'],
  providers: [DeckService]
})
export class DeckPage {
  
  data = {}
  item = {}
  questions: Questions[] = []

  //Creadas por Artur
  maxQuestions : number;
  

  questionShown :any

  flip_card = false;

  items = []

  constructor(
    
    public baseService:BaseService,
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
      
      // this.pruebaPreguntas()
      this.getQuestions()
      
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

pruebaPreguntas(){
    this.items = [
  		{"n":1,"pregunta": 'Cuál es la raíz cuadrada de 25', "respuesta": '5','mostrar':false},
  		{"n":2,"pregunta": 'Cuál es la raíz cuadrada de 36', "respuesta": '6','mostrar':false},
      {"n":3,"pregunta": 'Cuál es la raíz cuadrada de 49', "respuesta": '7','mostrar':false},
      {"n":4,"pregunta": ' Un español medio pierde alrededor de tres calcetines al año. Si los multiplicamos por toda la población española, eso supone un total de unos 120 millones de calcetines perdidos. ¿Dónde están esos 120 millones de calcetines?', "respuesta": 'Solo Dios lo sabe','mostrar':false}
     ];
     this.questionShown = this.items[0]
     this.maxQuestions =  Object.keys(this.items).length
     
  }
  getQuestions(){
     this.questions = this.baseService.getQuestions()

    for(let i = 0; i< this.questions.length;i++){
      this.items[i]={
        "n":i+1,
        "pregunta":this.questions[i].description,
        "respuesta":this.questions[i].answer,
        "mostrar":false
      }
    }
    this.questionShown = this.items[0]
     this.maxQuestions =  Object.keys(this.items).length
  }

  changeQuestion(n:number, up :boolean){
    this.flip_card = false;
    if (n<this.maxQuestions && up){
      this.questionShown= this.items[n]
    }
    if(n>1 && !up){
      this.questionShown= this.items[n-2]
    }
  }
  toogleAnswer(n :number, flashcard:IonItem){
    var n = n -1;
    if( !this.questionShown.mostrar){
      this.flip_card = true;
      this.questionShown.mostrar = true;
    }else{
      this.flip_card = false;
      this.questionShown.mostrar = false;
    }
      
  }
  
 
}
