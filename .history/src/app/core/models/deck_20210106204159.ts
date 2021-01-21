export class Deck {
    id: string;
    name: string;
    questions : number;

    constructor(
      public id: number,
      public name: string,
      public power: string,
      public alterEgo?: string
    ) {  }
}

