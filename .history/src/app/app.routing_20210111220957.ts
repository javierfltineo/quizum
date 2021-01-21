import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { DecksComponent } from './views/decks/decks.component';
import { AddEditDecksComponent } from './views/decks/add.edit.decks.component';
import { QuestionsComponent } from './views/questions/questions.component';
import { AddEditQuestionsComponent } from './views/questions/add.edit.questions.component';
import { FlashcardComponent } from './views/decks/flashcard.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'decks',
        component: DecksComponent,
        data: {
          title: 'Decks Page'
        },
      },
      {
        path: 'decks/add',
        component: AddEditDecksComponent,
        data: {
          title: 'Add Deck'
        }
      },
      {
        path: 'decks/edit/:id',
        component: AddEditDecksComponent,
        data: {
          title: 'Edit Deck'
        }
      },
      {
        path: 'questions',
        component: QuestionsComponent,
        data: {
          title: 'Questions Page'
        },
      },
      {
        path: 'questions/add',
        component: AddEditQuestionsComponent,
        data: {
          title: 'Add Question'
        }
      },
      {
        path: 'questions/edit/:id',
        component: AddEditQuestionsComponent,
        data: {
          title: 'Edit Question'
        }
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
