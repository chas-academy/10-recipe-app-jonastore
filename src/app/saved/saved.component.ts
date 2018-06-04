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
      item.forEach(element => {
        var x = element.payload.toJSON();
        x['key'] = element.key;
        this.savedListArray.push(x);
      })
    })
  }
  
  addItem(title) {
    this.savedService.addTitle(title.value);
    title.value = null;
  }

  deleteItem($key) {
    this.savedService.removeTitle($key);
  }

}
