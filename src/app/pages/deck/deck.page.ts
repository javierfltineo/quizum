import { AppSettings } from '../../services/app-settings';
import { Component } from '@angular/core';
import { DeckService } from '../../services/deck-service';
import { IonItem, ModalController } from '@ionic/angular';
import { IntroPage } from '../intro-page/intro-page.page';
import { BaseService } from 'src/app/services/base.service';
import { Questions } from 'src/app/models/questions.model';




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

  // onDelete(event) {
  //   console.warn(event);
  //   console.log('onDelete');
  // }
  getQuestions(){
     this.questions = this.baseService.getQuestions()

    for(let i = 0; i< this.questions.length;i++){
      this.items[i]={
        "n":i+1,
        "question":this.questions[i].description,
        "answer":this.questions[i].answer,
        "show":false
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
    // var n = n -1;
    // if( !this.questionShown.mostrar){
    //   this.flip_card = true;
    //   this.questionShown.mostrar = true;
    // }else{
    //   this.flip_card = false;
    //   this.questionShown.mostrar = false;
    // }
     this.flip_card = !this.flip_card 
     this.questionShown.show = !this.questionShown.show
  }
  
 
}
