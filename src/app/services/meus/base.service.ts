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
  public mazo : any[] = []

  public user : any 
  public user1 : User

  public deck: any
  public deck1: Mazo

  public question: any
  public question1: Questions

  //Ids
  public userId: string
  public deckId : string
  // public questionId : string


  constructor(
    handler: HttpBackend,
    public navCtrl: NavController,
    
  ) { 
    this.httpClient = new HttpClient(handler);
  }

  getAll() {
    return this.httpClient.get(environment.baseUrl , {})
  }

  getById(id: string) {
    return this.httpClient.get(environment.baseUrl  + "/" + id, {})
  }

  save(data: any) {
    return this.httpClient.post(environment.baseUrl , data)
  }

  delete(id: string) {
    return this.httpClient.delete(environment.baseUrl )
  }

 getMazoByUserId(userId:string) {
    this.httpClient.get(environment.baseUrl  + `deck/user/`+ userId, {}).toPromise().then(
      r => {
         
        this.mazo = Object.values(r)
        this.userId = this.user1["_id"]
        
        return  this.mazo
      }
  ).catch( e => {
      alert('error fetching data');
  });
    

   }
  
  login(username:string, password:string){
    this.httpClient.post(environment.baseUrl  + `users/login`, {"username":username , "password":password}).toPromise().then(
      r => {
          
        this.user = Object.values(r)
        
        this.user1 = this.user[1]
        //  console.log(this.user1["_id"])
         if(this.user[0]){
           this.userId = this.user1["_id"]
           this.navCtrl.navigateForward("/decks");

         }

          
      }
  ).catch( e => {
      alert('error fetching data');
  })
     
  }

  getUserId(){
    
    // console.log(this.user1["_id"])
     return this.userId
  }
  getMazo(){
    
    // console.log(this.user1["_id"])
    return this.deckId
  }

  createDeck(title:string, description : string){
    console.log(this.userId)
      this.httpClient.post(environment.baseUrl  + `deck`, {"title":title , "description":description, "creator":this.userId}).toPromise().then(
        r => {
            
          this.deck = Object.values(r)
          
          this.deck1 = this.deck[1]

          // this.deckId = this.deck1[1]
          
          if(this.deck[0]){
            this.deckId = this.deck1["_id"]
            this.navCtrl.navigateForward("/new-questions");

          }  
        }
    ).catch( e => {
        alert('error fetching data');
    })
  }

  createQuestion(description:string, answer : string){
    console.log(this.userId)
    console.log(this.deckId)
      this.httpClient.post(environment.baseUrl  + `question`, {"description":description , "answer":answer, "creator":this.userId,"deck":this.deckId}).toPromise().then(
        r => {
            
          // this.question = Object.values(r)
          
          // this.question1 = this.question[1]
           console.log("Question upload")
        }
    ).catch( e => {
        alert('error fetching data');
    })
  }
}




  



  

