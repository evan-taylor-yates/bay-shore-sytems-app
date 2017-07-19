import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }
  onSubmit(user): void {
    console.log(user);
    if (user.username === 'admin' && user.password === 'password') {
      console.log(user);
      this.authService.login();
      this.router.navigate(['admin']);
    } else if (user.username === 'user' && user.password === 'password') {
      console.log(user);
      this.authService.login();
      this.router.navigate(['user']);
    }
  }
};
