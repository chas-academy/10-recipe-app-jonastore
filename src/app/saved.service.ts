import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class SavedService {

  savedList: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) { }

  getList() {
    this.savedList = this.db.list("titles");
    return this.savedList;
  }

  addTitle(title, link, body) {
    this.savedList.push({
      title: title,
      link: link,
      body: body
    })
  }

  removeTitle(key) {
    this.savedList.remove(key);
  }

}
