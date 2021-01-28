import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AgmCoreModule } from '@agm/core';

import { AnimateItemsDirective } from '../directives/animate-items.directive';
import { DeckListPage } from './deck-list/deck-list.page';
import { LoginPage } from './login/login-layout-1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgmCoreModule.forRoot({ apiKey: '' })
  ],
  declarations: [
    AnimateItemsDirective,
    DeckListPage,
    LoginPage,
  
  ],
  exports: [
    DeckListPage,
    LoginPage,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
