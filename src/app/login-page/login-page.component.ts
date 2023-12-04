import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'

})
export class LoginComponent {

  constructor(private _router: Router) {

  }
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      this.loginSuccess();
    }
  }
  @Input() error: string | null = null;

  @Output() submitEM = new EventEmitter();

  loginSuccess() {
    this._router.navigate(['/main/home'])
  }
}
