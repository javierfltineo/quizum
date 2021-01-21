import { Component } from '@angular/core';
import { DeckService } from '../../core/services/deck.service';

@Component({
  templateUrl: 'decks.component.html'
})
export class DecksComponent {

  public decks;


  ngOnInit() {

    this.loadDecks();
  }


  constructor(private deckService : DeckService) { }

  loadDecks() {

      this.deckService.find().subscribe(res => {
        console.log(res);
        this.decks = res;
      });

  }

}
