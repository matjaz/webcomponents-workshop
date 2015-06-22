import {HttpClient} from 'aurelia-http-client';

export class Library {

  constructor() {
    this.client = (new HttpClient).configure(client => {
      client.withBaseUrl('http://localhost:3000/api/');
    });
  }

  fetch() {
    return this.client.get(`books`);
  }

  create(data) {
    return this.client.post(`books`, data);
  }

  get(id) {
    return this.client.get(`books/${id}`);
  }

  update(book) {
    return this.client.put(`books/${book.id}`, book);
  }
}
