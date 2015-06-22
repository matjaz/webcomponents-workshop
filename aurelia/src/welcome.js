import {computedFrom} from 'aurelia-framework';

export class Welcome {
  heading = 'Welcome to the Aurelia!';
  firstName = 'John';
  lastName = 'Doe';

  // Getters can't be observed with Object.observe, so they must be dirty checked.
  // However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  @computedFrom('firstName', 'lastName')
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  submit() {
    alert(`Welcome, ${this.fullName}!`);
  }
}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}
