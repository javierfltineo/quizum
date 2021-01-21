import { Deck } from "./deck";

export class Question {

    constructor(
      public id: string,
      public name: string,
      public answer: string,
      public deck : Deck,
    ) {  }

    public getOptions() {

      return this.options;
    }
}

