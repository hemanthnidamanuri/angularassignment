import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { LocalComponent } from './local/local.component';
import { RouterModule } from "@angular/router";
import {routes} from "./routes";
import { TitlepipePipe } from './titlepipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    LocalComponent,
    TitlepipePipe

  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)],
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
