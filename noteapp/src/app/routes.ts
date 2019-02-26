import {Routes} from "@angular/router";
import {LocalComponent} from "./local/local.component";
import {NoteComponent} from "./note/note.component";


export const routes: Routes = [

  {path: 'local' , component: LocalComponent},
  {path: 'note ', component: NoteComponent}
];
