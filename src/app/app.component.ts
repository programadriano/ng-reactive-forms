import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Login } from "./models/login";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "ng-reactive-forms";
  formCliente: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm(new Login());
  }

  createForm(login: Login) {
    this.formCliente = this.formBuilder.group({
      email: [login.email],
      password: [login.password],
      remember: [login.remember]
    });
  }

  onSubmit() {
    console.log(this.formCliente.value);
    this.formCliente.reset(new Login());
  }
}
