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
    this.alert = false;
    this.loading = false;
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    console.warn('before loadQuestion')
    if (!this.isAddMode) {
      this.loadQuestion();
    } else {
      this.newQuestion();
    }

  }

  constructor(private route: ActivatedRoute, private questionService : QuestionService) { }

  loadQuestion() {
    console.warn('loadQuestion')
    this.questionService.getById(this.id).subscribe(res => {
      this.question = res;
     });

  }

  newQuestion() {
    this.question = new Question(null, '', 0);
  }

  onSubmit() {
    this.loading = true;

    if (this.isAddMode) {
      this.questionService.create(this.question).subscribe(res => {
        console.log(res);
        this.loading = false;
      });
    } else {
      this.questionService.update(this.question).subscribe(res => {
        console.log(res);
        this.alert = new Alert({type: AlertType.Success,
            message: res.message, alertClass : 'alert-success'});
        this.loading = false;
      });
    }
  }

}
