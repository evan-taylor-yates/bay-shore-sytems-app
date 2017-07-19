import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-generic-photo',
  templateUrl: './new-generic-photo.component.html',
  styleUrls: ['./new-generic-photo.component.css']
})
export class NewGenericPhotoComponent implements OnInit {
  form;
  newPhoto;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      photoTitle: new FormControl('')
    });
  }
  setFile(photo) {
    console.log(photo);
    this.newPhoto = photo.srcElement.files[0];
  }
  onSubmit(form_data) {
    // console.log(form_data);
    console.log(this.newPhoto);
    // this._files = event.srcElement.files;
    const image = document.getElementById('image') as HTMLImageElement;
    image.src = this.newPhoto;
  }
}
