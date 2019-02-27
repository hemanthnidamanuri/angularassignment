import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import {Router} from "@angular/router";
import {FilterPipeModule} from "ngx-filter-pipe";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  tempname: any;
  store = { };
  content = new Array();
  dd: any;
  userFilter: any = {search: ''};
  constructor(private localst: LocalStorage, private router: Router) { }

  ngOnInit() {
  }

  saveNote() {
    this.content.push(this.tempname);
    let key  = this.tempname.slice(0,15)
    this.store[key] = this.tempname;
    this.tempname = '';
    this.localst.setItem('note', this.store).subscribe(() => {});
    // this.router.navigate(['local']);
  }

  onCreate() {

  }

  contentDisplay(title: any) {
    this.tempname = title;
    this.dd = this.tempname;

  }

  deleteContent() {
    this.tempname = null;
    for (let i = 0; i < this.content.length; i++) {
      if (this.content[i] === this.dd){
        this.content.splice(i,1);
      }
    }
  }
}
