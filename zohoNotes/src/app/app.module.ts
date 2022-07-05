import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContentComponent } from './content/content.component';
import { SearchComponent } from './search/search.component';
import { NoteBookComponent } from './note-book/note-book.component';
import { NotePagesComponent } from './note-pages/note-pages.component';
import { PageComponent } from './page/page.component';
import { EachNoteComponent } from './each-note/each-note.component';
import { PlaceHolderDirective } from './place-holder.directive';
import { HoverDirective } from './hover.directive';
import { ToolTipDirective } from './tool-tip.directive';
import { AllNotesComponent } from './all-notes/all-notes.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SharedComponent } from './shared/shared.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    NavBarComponent,
    ContentComponent,
    SearchComponent,
    NoteBookComponent,
    NotePagesComponent,
    PageComponent,
    EachNoteComponent,
    PlaceHolderDirective,
    HoverDirective,
    ToolTipDirective,
    AllNotesComponent,
    FavoriteComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
