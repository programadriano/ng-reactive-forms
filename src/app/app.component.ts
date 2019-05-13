import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Login } from "./models/login";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "ng-reactive-forms";
  formCliente: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Login());
  }

  createForm(login: Login) {
    this.formCliente = this.formBuilder.group({
      email: [login.email, [Validators.required, Validators.email]],
      password: [login.password, [Validators.required, Validators.minLength(6)]],
      remember: [login.remember]
    });
  }

  get f() { return this.formCliente.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.formCliente.invalid) {      
      return;
    }

    alert('SUCCESS' + JSON.stringify(this.formCliente.value))
    this.formCliente.reset(new Login());
  }
}
