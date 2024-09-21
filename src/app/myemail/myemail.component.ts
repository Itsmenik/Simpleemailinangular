import { Component } from '@angular/core';

@Component({
  selector: 'app-myemail',
  templateUrl: './myemail.component.html',
  styleUrls: ['./myemail.component.css']
})
export class MyemailComponent {
  user = {
    name: '',
    email: ''
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
