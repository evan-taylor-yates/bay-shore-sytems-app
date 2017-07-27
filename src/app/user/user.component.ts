import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm, AbstractControl, ValidatorFn } from '@angular/forms';
import {UploadService} from '../admin/templates/new-template/shared/upload.service';
import {Http} from '@angular/http';


@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // ViewChild gets access to the element with the element reference 'f' on it. Then, it stores
  // that content in the 'signupForm' variable (here the type is 'NgForm')
  templates;
  names;
  current_name;
  models;
  current_model;
  uploads = [];
  current_image;

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

  constructor(private uploadService: UploadService, private http: Http) {}


  ngOnInit() {
    this.http.get('https://angular-http-tutorial.firebaseio.com/templates.json').subscribe(
      (templates) => {
        this.templates = templates.json();
        this.names = Object.getOwnPropertyNames(this.templates);
      }
    );
  }

  isService() {
    this.service = true;
    this.production = false;
  }

  isProduction() {
   this.production = true;
   this.service = false;

  }

  setName(name) {
    if (name !== 'filler') {
      this.current_name = name;
      this.models = Object.getOwnPropertyNames(this.templates[name]);
    }
  }

  setModel(model) {
    if (model !== 'filler') {
      this.current_model = model;
    }
  }

  onSubmit() {
    this.submitted = true;
    const myTemplate = this.templates[this.current_name][this.current_model];
    const imageKeys = Object.getOwnPropertyNames(myTemplate);
    for (const key of imageKeys) {
      this.uploads.push(myTemplate[key]);
    }
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
  selectedImage(event) {
    console.log(event);
  }

  convertName(url) {
    let processedName = '';
    for (const char of url) {
      if (char === '.') {
        break;
      }
      processedName += char;
    }
    return processedName;
  }
}
