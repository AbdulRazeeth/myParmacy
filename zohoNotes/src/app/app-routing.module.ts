import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllNotesComponent } from './all-notes/all-notes.component';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { NotePagesComponent } from './note-pages/note-pages.component';
import { PageComponent } from './page/page.component';
import { SharedComponent } from './shared/shared.component';

const routes: Routes = [
  {component:ContentComponent,path:''},
  {component:AllNotesComponent,path:'allnotes'},
  { component:FavoriteComponent,path:'favorite' },
  {component:SharedComponent,path:'shared'},
  {component:NotePagesComponent,path:'pages/:id'},
  // {component:PageComponent,path:'openEditPage'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
