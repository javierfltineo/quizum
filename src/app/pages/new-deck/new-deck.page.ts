import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Questions } from 'src/app/models/questions.model';
import { AppSettings } from 'src/app/services/app-settings';
import { BaseService } from 'src/app/services/meus/base.service';
import { IntroPage } from '../intro-page/intro-page.page';

@Component({
  selector: 'app-new-deck',
  templateUrl: './new-deck.page.html',
  styleUrls: ['./new-deck.page.scss'],
})
export class NewDeckPage  {
    @Input() deckName: string
    @Input() deckDescription: string

  data = {};
  
  
  // constructor(public baseService: BaseService) { }
  constructor(public baseService:BaseService) { }

  ngOnInit() {
    this.data = {
      'toolbarTitle': 'NUEVO MAZO',
      'inputPlaceholder':"Nombre del mazo",
      'textareaPlaceholder':"Elige una pequeña descripción para tu mazo",
      'buttonName' :'Crear Mazo',
      
    }
  }
  
  
  saveDeck(){
    console.log(this.deckName, this.deckDescription)
    this.baseService.createDeck(this.deckName,this.deckDescription)
    }
  }
  


  
  

 
  
  
 



