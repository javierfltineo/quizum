import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewDeckPage } from './new-deck.page';

describe('NewDeckPage', () => {
  let component: NewDeckPage;
  let fixture: ComponentFixture<NewDeckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDeckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewDeckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
