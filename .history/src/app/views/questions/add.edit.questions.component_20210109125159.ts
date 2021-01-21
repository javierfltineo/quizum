import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Question } from '../../core/models/question';
import { Alert, AlertType } from '../../core/models/alert';
import { QuestionService } from '../../core/services/question.service';

@Component({
  templateUrl: 'add.edit.questions.component.html'
})
export class AddEditQuestionsComponent {

  public question;
  public alert;
  public id : string;
  public isAddMode : boolean;
  public loading : boolean;


  ngOnInit() {


  }

  constructor(private route: ActivatedRoute, private questionService : QuestionService) { }


  newQuestion() {
    this.question = new Question(null, '');
  }

  onSubmit() {

  }

}
