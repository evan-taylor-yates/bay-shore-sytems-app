import {Component, OnInit, ViewChild} from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {NgForm} from '@angular/forms';
import {UploadService} from './shared/upload.service';
import {Upload} from './shared/upload';
import {Router} from '@angular/router';

// import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
// import { FileSelectDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'app-new-template',
  templateUrl: './new-template.component.html',
  styleUrls: ['./new-template.component.css']
})
export class NewTemplateComponent implements OnInit{
  @ViewChild('form') form: NgForm;
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal = '';
  valid = false;
  disabled = null;
  upload = false;
  name = '';
  model = '';
  generic_photos;
  generic_search_key;
  generic_search_results;
  template_photos;
  backButton = 'false';

  constructor(
    public afAuth: AngularFireAuth,
    public af: AngularFireDatabase,
    private uploadService: UploadService,
    private router: Router) {
    this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });

    this.user = this.afAuth.authState;
  }
  ngOnInit() {
    this.uploadService.getUploads('/generic_photos')
      .subscribe(
        (uploads: Upload[]) => {
          this.generic_photos = uploads;
        }
      );
    if (this.generic_photos) {
      this.generic_search_results = this.generic_photos.slice();
    }
  }
  onSearchInput(event) {
    this.generic_search_key = event.target.value;
    if (this.generic_search_results) {
      this.updateSearchResults();
    }
  }
  updateSearchResults() {
    if (this.generic_search_key === '') {
      this.generic_search_results = this.generic_photos.slice();
    } else {
      const newArray: Upload[] = [];
      let input_copy = this.generic_search_key;

      for (const photo of this.generic_search_results) {
        let valid_result = true;
        for (const char of photo.name) {
          if (!input_copy) {
            break;
          } else if (input_copy.charAt(0).toLowerCase() !== char && input_copy.charAt(0).toUpperCase() !== char) {
            valid_result = false;
            break;
          }
          input_copy = input_copy.slice(1);
        }
        if (valid_result) {
          newArray.push(photo);
        }
        input_copy = this.generic_search_key;
      }
      this.generic_search_results = newArray;
    }
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

  onAddGenericPicture(upload) {
    if (this.checkForMultiple(upload.name)) {
      this.uploadService.saveFileData(upload, 'templates/' + this.name + '/' + this.model);
    }
  }

  toggleDisabled() {
    this.disabled = true;

    this.uploadService.getUploads('templates/' + this.name + '/' + this.model)
      .subscribe(
        (uploads: Upload[]) => {
          this.template_photos = uploads;
        }
      );
  }
  toggleUpload() {
    this.upload = !this.upload;
  }
  checkForMultiple(name) {
    for (const photo of this.template_photos) {
      if (photo.name === name) {
        return false;
      }
    }
    return true;
  }
  onDeletePicture(upload) {
    this.uploadService.deleteUpload(upload, 'templates/' + this.name + '/' + this.model);
  }
  onSave() {
    this.router.navigate(['/admin/templates']);
  }


}
