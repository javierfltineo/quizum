import { Component, OnInit } from '@angular/core';
import { Questions } from 'src/app/models/questions.model';

@Component({
  selector: 'app-new-questions',
  templateUrl: './new-questions.page.html',
  styleUrls: ['./new-questions.page.scss'],
})
export class NewQuestionsPage implements OnInit {

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