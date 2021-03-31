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
        localStorage.setItem('decks',JSON.stringify(this.decks));
        console.log(this.decks[0]["title"])
        this.navCtrl.navigateForward("/decks");
        
      }
  ).catch( e => {
      // alert('no mazos disponibles');
      this.navCtrl.navigateForward("/decks");
  });
  }
  async getMazoByUserId2(userId:string){
    var aux = await this.httpClient.get(environment.baseUrl  + `deck/user/`+ userId, {}).toPromise() as Questions
    console.log(aux)
  }

  getQuestionsByMazoId(mazoId:string, route:string) {
   
    this.httpClient.get(environment.baseUrl  + `question/deck/`+ mazoId, {}).toPromise().then(
      r => {
         
        this.test2 = Object.values(r)
        
        this.questions = this.test2
        localStorage.setItem('questions',JSON.stringify(this.questions));
        console.log(this.questions)
        if(this.questions.length == 0){
          alert('No questions disponibles');
          
        }else{
          this.navigateTo(route)
          //  this.navCtrl.navigateForward("/edit-deck");
        }
        
        
      }
  ).catch( e => {
       alert('problem');
       this.navigateTo(route)
      // this.navCtrl.navigateForward("/decks");
  });
  }

  async getQuestionsByMazoId2(mazoId:string) {
    var questions = await this.httpClient.get(environment.baseUrl  + `question/deck/`+ mazoId, {}).toPromise()
     if(questions){
       return questions
     }else{
       return false
     }
  }
  
  login(username:string, password:string){
    console.log(username, password)
    // var url = "http://192.168.1.14:80/"
    // console.log(url)
    this.httpClient.post(environment.baseUrl  + `users/login`, {"username":username , "password":password}).toPromise().then(
      r => {
          
        this.user = Object.values(r)
        
        this.user1 = this.user[1]
        
         if(this.user[0]){
           this.userId = this.user1["_id"]
           localStorage.setItem('user',JSON.stringify(this.user1));
           
          this.getMazoByUserId(this.userId)
          // this.getMazoByUserId2(this.userId)
            // return false
         }
         
          
      }
  ).catch( e => {
     console.log("fallo",e)
  })
    return true
  }
  async login2(username:string, password :string){
    var aux = await this.httpClient.post(environment.baseUrl  + `users/login`, {"username":username , "password":password}).toPromise() as User
    console.log(aux)
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
    this.user1 = JSON.parse(localStorage.getItem('user'));
    this.userId = this.user1._id
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

  navigateTo(route :string){
    this.navCtrl.navigateForward(route);
  }
}




  



  

