import {Component, ViewChild} from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  // ViewChild gets access to the element with the element reference 'f' on it. Then, it stores
  // that content in the 'signupForm' variable (here the type is 'NgForm')
  models = [
    {
      id: 1,
      name: 'TR20'
    },
    {
      id: 2,
      name: 'TR40'
    },
    {
      id: 3,
      name: 'TR80'
    },
    {
      id: 4,
      name: 'TR110'
    },
    {
      id: 4,
      name: 'TR150'
    },
    {
      id: 5,
      name: 'TR200'
    },
    {
      id: 6,
      name: 'LAD50'
    },
    {
      id: 7,
      name: 'LAD80'
    },
    {
      id: 8,
      name: 'LAD100'
    },
    {
      id: 9,
      name: 'LAD250'
    },
    {
      id: 10,
      name: 'LAD400'
    },
    {
      id: 11,
      name: 'DH15'
    },
    {
      id: 12,
      name: 'DH20'
    },
    {
      id: 13,
      name: 'DH30'
    },
    {
      id: 14,
      name: 'DH40'
    },
    {
      id: 15,
      name: 'DH60'
    },
    {
      id: 16,
      name: 'AERA1008'
    },
    {
      id: 17,
      name: 'AERA1420'
    },
    {
      id: 18,
      name: 'AERA1430'
    },
    {
      id: 19,
      name: 'AERA1440'
    }
  ]

  @ViewChild('userForm') userForm: NgForm;
  production = false;
  service = false;
  formData = {
    userID: '',
    customerID: '',
    location: '',
    model: '',
    modelSerial: ''
  };

  submitted = false;

  isService() {
    this.service = true;
    this.production = false;
  }

  isProduction() {
   this.production = true;
   this.service = false;

  }

  onSubmit() {
    console.log(this.userForm);
    // this.submitted = true;
    // this.user.username = this.signupForm.value.userData.username;
    // this.user.email = this.signupForm.value.userData.email;
    // this.user.secretQuestion = this.signupForm.value.secret;
    // this.user.answer = this.signupForm.value.questionAnswer;
    // this.user.gender = this.signupForm.value.gender;
    //
    // // This resets form data and all properties like touched, dirty, valid, etc...
    // this.signupForm.reset();
  }
}
