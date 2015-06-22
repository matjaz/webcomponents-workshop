import {inject, Parent} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Library} from './library'

@inject(Parent.of(Router), Library)
export class Edit {

  constructor(router, library) {
    this.router = router;
    this.library = library;
  }

  activate(params) {
    return this.library.get(params.bookId).then(response => {
      this.book = response.content;
    });
  }

  save() {
    this.library.update(this.book).then(() => {
      this.router.navigateToRoute('list');
    });
  }

}
