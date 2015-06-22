import {inject} from 'aurelia-framework';
import {Library} from './library'

@inject(Library)
export class List {

  constructor(Library) {
    this.Library = Library;
  }

  activate() {
    return this.Library.fetch().then(response => {
      this.books = response.content;
    });
  }

}
