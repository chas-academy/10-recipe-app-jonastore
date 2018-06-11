import { Component, OnInit } from '@angular/core';
import { SavedService } from '../saved.service';

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
      item.forEach(data => {
        var x = data.payload.toJSON();
        x['key'] = data.key;
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

  deleteItem(key) {
    this.savedService.removeTitle(key);
  }

}
