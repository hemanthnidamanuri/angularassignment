import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import {Router} from "@angular/router";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  tempname: string;
  store = { };
  titleStore = [];
  constructor(private localst: LocalStorage, private router: Router) { }

  ngOnInit() {
  }

  saveNote() {
   let key  = this.tempname.slice(0,15);
    this.titleStore.push(key);
    this.store[key] = this.tempname;
    console.log(this.store);
    this.localst.setItem('note', this.store).subscribe(() => {});
    // this.router.navigate(['local']);
  }

  onCreate() {

  }
}
