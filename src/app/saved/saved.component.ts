import { Component, OnInit } from '@angular/core';
import { SavedService } from '../saved.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css'],
  providers: [SavedService]
})
export class SavedComponent implements OnInit {

  savedListArray: any[];
  constructor(private savedService: SavedService) { }

  ngOnInit() {
    this.savedService.getList().snapshotChanges()
    .subscribe(item =>{
      this.savedListArray = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x['key'] = element.key;
        this.savedListArray.push(x);
      })
    })
  }
  
  addItem(title, link, body) {
    this.savedService.addTitle(title.value, link.value, body.value);
    title.value = null;
    link.value = null;
    body.value = null;
  }

  deleteItem(key : string) {
    this.savedService.removeTitle(key);
  }

}
