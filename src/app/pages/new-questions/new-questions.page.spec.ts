import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewQuestionsPage } from './new-questions.page';

describe('NewQuestionsPage', () => {
  let component: NewQuestionsPage;
  let fixture: ComponentFixture<NewQuestionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewQuestionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewQuestionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
