import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ClickAreaComponent } from './click-area/click-area.component';
import { ClickResultComponent } from './click-result/click-result.component';
import { DataService } from './data.service';
import { DialogueBoxComponent } from './dialogue-box/dialogue-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponentComponent,
    ClickAreaComponent,
    ClickResultComponent,
    DialogueBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
