import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../core/services/question.service';

@Component({
  templateUrl: 'questions.component.html'
})
export class QuestionsComponent {

  public questions;
  public id : string;
  public isAddMode : boolean;


  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;


    this.loadQuestions();
  }


  constructor(private route: ActivatedRoute, private questionService : QuestionService) { }

  loadQuestions() {

      this.questionService.find().subscribe(res => {
        console.log(res);
        this.questions = res;
      });

  }

}
