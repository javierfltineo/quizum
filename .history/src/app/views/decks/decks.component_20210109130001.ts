import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DeckService } from '../../core/services/deck.service';

@Component({
  templateUrl: 'decks.component.html'
})
export class DecksComponent {

  public decks;
  public isAddMode : boolean;


  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;


    this.loadDecks();
  }


  constructor(private route: ActivatedRoute, private deckService : DeckService) { }

  loadDecks() {

      this.deckService.find().subscribe(res => {
        console.log(res);
        this.decks = res;
      });

  }

}
