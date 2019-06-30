import { Component } from '@angular/core';
//import { AlertController } from 'ionic-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  grocery: any = [];
  item = "";
  
  constructor() {}

  addItem() {
    this.grocery.push(data);
    }
}
}