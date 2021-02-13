import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Mazo } from 'src/app/models/mazo.model';
import { Questions } from 'src/app/models/questions.model';
import { User } from 'src/app/models/user.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BaseService {
  public httpClient: HttpClient
 

  public user : any 
  public user1 : User

  public deck: any
  public deck1: Mazo

  public question: any
  public question1: Questions

  public test : any
  public decks: Mazo[] = []

  public test2 : any
  public questions: Questions[] = []

  //Ids
  public userId: string
  public deckId : string


  constructor(
    handler: HttpBackend,
    public navCtrl: NavController,
    
  ) { 
    this.httpClient = new HttpClient(handler);
  }

  getMazoByUserId(userId:string) {
    this.httpClient.get(environment.baseUrl  + `deck/user/`+ userId, {}).toPromise().then(
      r => {
         
        this.test = Object.values(r)
        this.decks = this.test
        console.log(this.decks[0]["title"])
        this.navCtrl.navigateForward("/decks");
        
      }
  ).catch( e => {
      // alert('no mazos disponibles');
      this.navCtrl.navigateForward("/decks");
  });
  }

  getQuestionsByMazoId(mazoId:string) {
    this.httpClient.get(environment.baseUrl  + `question/deck/`+ mazoId, {}).toPromise().then(
      r => {
         
        this.test2 = Object.values(r)
        
        this.questions = this.test2
        console.log(this.questions)
        if(this.questions.length == 0){
          alert('No questions disponibles');
          
        }else{
          this.navCtrl.navigateForward("/deck");
        }
        
        
      }
  ).catch( e => {
       alert('problem');
      this.navCtrl.navigateForward("/decks");
  });
  }
  
  login(username:string, password:string){
    console.log(username, password)
    var url = "http://192.168.1.14:80/"
    console.log(url)
    this.httpClient.post(environment.baseUrl  + `users/login`, {"username":username , "password":password}).toPromise().then(
      r => {
          
        this.user = Object.values(r)
        
        this.user1 = this.user[1]
        
         if(this.user[0]){
           this.userId = this.user1["_id"]
           this.getMazoByUserId(this.userId)
            
         }
         
          
      }
  ).catch( e => {
     console.log("fallo",e)
  })
     console.log("hola")
  }
 
  getUserId(){
     return this.userId
  }
  getMazoId(){
    return this.deckId
  }
  getDecks(){
    return this.decks
  }
  getQuestions(){
    return this.questions
  }

  createDeck(title:string, description : string){
    console.log(this.userId)
      this.httpClient.post(environment.baseUrl  + `deck`, {"title":title , "description":description, "creator":this.userId}).toPromise().then(
        r => {
            
          this.deck = Object.values(r)
          
          this.deck1 = this.deck[1]
          
          if(this.deck[0]){
            this.deckId = this.deck1["_id"]
            this.navCtrl.navigateForward("/new-questions");

          }  
        }
    ).catch( e => {
        alert('Error creating deck');
    })
  }

  createQuestion(description:string, answer : string){
      this.httpClient.post(environment.baseUrl  + `question`, {"description":description , "answer":answer, "creator":this.userId,"deck":this.deckId}).toPromise().then(
        r => {
           console.log("Question upload")
        }
    ).catch( e => {
        alert('Error creating question');
    })
  }
  deleteDeck(deckId:string){
    this.httpClient.delete(environment.baseUrl  + `deck/`+ deckId, {}).toPromise().then(
      r => {
         console.log("Deck with id "+  deckId +"has been deleted")
      }
  ).catch( e => {
      alert('Error deleting deck');
  })
  }
}




  



  

