import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-animation-layout-2',
  templateUrl: 'animation-layout-2.page.html',
  styleUrls: ['animation-layout-2.page.scss'],
})
export class AnimationLayout2Page implements OnChanges {
  @Input() data: any;

  @Output() onItemClick = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onItemClickFunc(item): void {
    this.onItemClick.emit(item);
  }

  onProceedFunc(item): void {
    this.onItemClick.emit(item);
  }
}
