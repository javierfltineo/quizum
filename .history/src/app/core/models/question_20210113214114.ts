export class Question {

    constructor(
      public id: string,
      public name: string,
      public options: string,
      public id_deck : string,
    ) {  }

    public getOptions() {
      return [{'asdf' : 'dfsg'}];
      return this.options;
    }
    get date(): string {
      console.log('Getting date');
      ...
    }

    set date(val) {
        console.log('Setting date: ' + val);
        ...
    }

}

