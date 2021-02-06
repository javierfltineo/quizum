import { Component, Output, EventEmitter, Input, ViewChild, OnChanges } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'cs-deck-list',
  templateUrl: 'deck-list.page.html',
  styleUrls: ['deck-list.page.scss'],
})
export class DeckListPage implements OnChanges {
  @ViewChild('sliding', {static: false}) sliding;
  @ViewChild('dynamicList', {static: false}) dynamicList;

  @Input() data: any;
  @Output() onItemClick = new EventEmitter();
  @Output() onUndo = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  constructor(public baseService: BaseService) { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onUndoFunc = () => {
    if (event) {
      event.stopPropagation();
    }
    this.sliding.closeOpened();
  }

  onDeleteFunc = (item: any): void => {
     this.dynamicList.closeSlidingItems()
     const index = this.data.items.indexOf(item);
     if (index > -1) {
       this.data.items.splice(index, 1);
     }
    this.baseService.deleteDeck(item.id)
    console.log(item.id)
  }
  
  openDeck(mazoId:string){
    console.log(mazoId)
    this.baseService.getQuestionsByMazoId(mazoId)
  }

  // onItemClickFunc(item) {
  //   if (event) {
  //     event.stopPropagation();
  //   }
  //   this.onItemClick.emit(item);
  // }
  
}
