import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'decks',
    loadChildren: () => import('./pages/decks/decks.module').then(m => m.DecksModule)
  },
  {
    path: 'deck/:id',
    loadChildren: () => import('./pages/deck/deck.module').then(m => m.DeckModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pagesMeues/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'new-deck',
    loadChildren: () => import('./pages/new-deck/new-deck.module').then( m => m.NewDeckPageModule)
  },  {
    path: 'new-questions',
    loadChildren: () => import('./pages/new-questions/new-questions.module').then( m => m.NewQuestionsPageModule)
  },

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
