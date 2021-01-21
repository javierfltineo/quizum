export class Question {

    constructor(
      public id: string,
      public name: string,
      public options: string,
      public id_deck : string,
    ) {  }

    public getOptions() {

      return this.options;
    }
    get options(): array {
      return [{'asdf' : 'dfsg'}];
    }

    set options(val) {
        console.log('Setting date: ' + val);
    }

}

