import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Deck } from '../../core/models/deck';
import { Alert, AlertType } from '../../core/models/alert';
import { DeckService } from '../../core/services/deck.service';

@Component({
  templateUrl: 'add.edit.decks.component.html'
})
export class AddEditDecksComponent {

  public deck;
  public alert;
  public id : string;
  public isAddMode : boolean;
  public loading : boolean;


  ngOnInit() {
    this.alert = false;
    this.loading = false;
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    if (!this.isAddMode) {
      this.loadDeck();
    } else {
      this.newDeck();
    }

  }

  constructor(private route: ActivatedRoute, private deckService : DeckService) { }

  loadDeck() {

    this.deckService.getById(this.id).subscribe(res => {
      this.deck = res;
      console.log(this.deck);
     });

  }

  newDeck() {
    this.deck = new Deck(null, '', 0);
  }

  onSubmit() {
    this.loading = true;

    if (this.isAddMode) {
      this.deckService.create(this.deck).subscribe(res => {
        console.log(res);
        this.loading = false;
      });
    } else {
      this.deckService.update(this.deck).subscribe(res => {
        console.log(res);
        this.alert = new Alert({type: AlertType.Success,
            message: res.message, alertClass : 'alert-success'});
        this.loading = false;
      });
    }
  }

}
