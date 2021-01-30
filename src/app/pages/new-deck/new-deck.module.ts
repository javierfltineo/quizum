import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';



import { NewDeckPage } from './new-deck.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: NewDeckPage
      }
    ])
  ],
  declarations: [NewDeckPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewDeckPageModule {}
