import { Component } from '@angular/core';
import { DeckService } from '../../core/services/deck.service';

@Component({
  templateUrl: 'flashcards.component.html'
})
export class FlashcardsComponent {

  public flashcards;
  public questions;


  ngOnInit() {

    this.loadQuestions();
  }


  constructor(private deckService : DeckService) { }

  loadQuestions() {

      this.questionService.find().subscribe(res => {
        console.log(res);
        this.decks = res;
      });

  }

}
