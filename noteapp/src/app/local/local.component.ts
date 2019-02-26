import { Component, OnInit } from '@angular/core';
import {LocalStorage} from "@ngx-pwa/local-storage";


@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  titlename;
  constructor(private localstorage: LocalStorage) { }

  ngOnInit() {
    this.localstorage.getItem('note').subscribe((note) => {
              window.alert('ok');
    });
  }

}
