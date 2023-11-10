import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loginForm = this._fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });
  invalidForm = false;

  constructor(private _routerLink: Router, private _fb: FormBuilder) {}

  // Navigates to the page with the specified path.
  navigateTo(path: string) {
    this._routerLink.navigate([path]);
  }

  onSubmit() {
    const login = this.loginForm.get('login')?.value;
    const password = this.loginForm.get('password')?.value;

    if (login === 'mobile' && password === 'prova2') {
      this.invalidForm = false;
      this.navigateTo('calculator');
      return;
    }

    this.invalidForm = true;
  }
}
