import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

title = 'ciao'

 OnInput(event: Event) {
  this.title = (<HTMLInputElement>event.target).value
  console.log((<HTMLInputElement>event.target).value)
 }



  constructor() { }

  ngOnInit() {
  }

}
