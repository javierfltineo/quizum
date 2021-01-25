import { Component, Output, EventEmitter, Input, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'cs-profile-layout-5',
  templateUrl: 'profile-layout-5.page.html',
  styleUrls: ['profile-layout-5.page.scss'],
})
export class ProfileLayout5Page implements OnChanges, AfterViewInit {
  @Input() data: any;

  @Output() onFacebook = new EventEmitter();
  @Output() onTwitter = new EventEmitter();
  @Output() onInstagram = new EventEmitter();

  description: String;
  index = 0;

  viewEntered = false;

  constructor() { }

  ngAfterViewInit() {
    this.viewEntered = true;    
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onFacebookFunc(item) {
    if (event) {
      event.stopPropagation();
    }
    this.onFacebook.emit(item);
  }

  onTwitterFunc(item, event) {
    if (event) {
      event.stopPropagation();
    }
    this.onTwitter.emit(item);
  }

  onInstagramFunc(item, event) {
    if (event) {
      event.stopPropagation();
    }
    this.onInstagram.emit(item);
  }



}
