import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { OdooRPCService } from 'angular7-odoo-jsonrpc';
@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>',
  providers : [OdooRPCService],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
