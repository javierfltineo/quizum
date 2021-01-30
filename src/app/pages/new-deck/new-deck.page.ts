import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Questions } from 'src/app/models/questions.model';
import { AppSettings } from 'src/app/services/app-settings';
import { IntroPage } from '../intro-page/intro-page.page';

@Component({
  selector: 'app-new-deck',
  templateUrl: './new-deck.page.html',
  styleUrls: ['./new-deck.page.scss'],
})
export class NewDeckPage  {
  questions :Questions[] = []
  n : number = 0

  data = {};
  
  
  // constructor(public baseService: BaseService) { }
  constructor() { }

  ngOnInit() {
    this.data = {
      'toolbarTitle': 'NUEVO MAZO',
      'buttonName' :'Crear Pregunta',
      'question':'Pregunta nº',
      'questionText':'Escribe tu pregunta :',
      'answerText':'Escribe tu respuesta :',
    }
  }
  
  createQuestion() {
    
    this.n ++ ;

    //al crear la questions guardaremos tambien el id del mazo 
     if(this.questions.length == 0){
         //creamos el mazo y el post no devolvera el id del mismo que utilizaremos para crear las preguntas
     }
    //al crear la questions guardaremos tambien el id del mazo 
    const q = new Questions(this.n,"","")
    console.log(q)
    this.questions.push(q)
    console.log(this.questions)
    
  }
  saveDeck(){
    for(let i = 0;i< this.questions.length ; i++){
      //llamada a guradar 
    }
  }
  
}

  
  

 
  
  
 



