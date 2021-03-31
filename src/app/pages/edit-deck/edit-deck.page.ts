import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Questions } from 'src/app/models/questions.model';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-edit-deck',
  templateUrl: './edit-deck.page.html',
  styleUrls: ['./edit-deck.page.scss'],
})
export class EditDeckPage implements OnInit {


  questions :Questions[] = []
  n : number = 0

  data = {};
  
  
   constructor(public baseService: BaseService,public navCtrl: NavController,) { }
  

  ngOnInit() {
    this.data = {
      'toolbarTitle': 'NUEVO MAZO',
      'buttonCreate' :'Crear Pregunta',
      'buttonSave' :'Guardar Mazo',
      'question':'Pregunta nº',
      'questionText':'Pregunta: :',
      'answerText':'Respuesta:',
      'textareaPlaceholder':'Escribe tu pregunta',
      'textareaPlaceholder2':'Escribe tu respuesta'
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
    console.log(this.questions)
    for(let i = 0;i< this.questions.length ; i++){
        this.baseService.createQuestion(this.questions[i]["question"],this.questions[i]["answer"])
    }
    var aux = this.baseService.getUserId()
    this.baseService.getMazoByUserId(aux)
  }
}
