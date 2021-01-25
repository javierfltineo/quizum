import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-animation-layout-10',
  templateUrl: 'animation-layout-10.page.html',
  styleUrls: ['animation-layout-10.page.scss'],
})
export class AnimationLayout10Page implements OnChanges {
  @Input() data: any;
  @Input() events: any;
  
  @Output() onItemClick = new EventEmitter();
  @Output() onFavorite = new EventEmitter();
  @Output() onLike = new EventEmitter();
  @Output() onShare = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onEvent(event: string, item: any, e: any) {
    if (this.events[event]) {
      this.events[event](item);
    }
  }

  onStarClass(items: any, index: number, e: any) {
  for (var i = 0; i < items.length; i++) {
    items[i].isActive = i <= index;
  }
  this.onEvent("onRates", index, e);
};
}
