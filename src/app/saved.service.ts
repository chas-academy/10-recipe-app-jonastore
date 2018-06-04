import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class SavedService {

  savedList: AngularFireList<any>;

  constructor(private afs: AngularFireDatabase) { }

  getList() {
    this.savedList = this.afs.list("titles");
    return this.savedList;
  }

  addTitle(title) {
    this.savedList.push({
      title: title,
    })
  }

  removeTitle($key) {
    this.savedList.remove($key);
  }

}
