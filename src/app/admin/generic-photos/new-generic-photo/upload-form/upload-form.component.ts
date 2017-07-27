import {Component, Input, OnInit} from '@angular/core';
import { UploadService } from '../shared/upload.service';
import { Upload } from '../shared/upload';
import * as _ from 'lodash';
import {Router} from '@angular/router';

@Component({
  selector: 'upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {

  @Input() basePath: string;

  selectedFiles: FileList;
  currentUpload: Upload;

  constructor(private upSvc: UploadService, private router: Router) {
  }

  ngOnInit() {
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  uploadSingle() {
    console.log('uploading');
    const file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload, this.basePath);
    this.router.navigate(['/generic-photos']);
  }

  uploadMulti() {
    const files = this.selectedFiles;
    if (_.isEmpty(files)) { return; } ;

    const filesIndex = _.range(files.length)
    _.each(filesIndex, (idx) => {
        this.currentUpload = new Upload(files[idx]);
        this.upSvc.pushUpload(this.currentUpload, this.basePath);
      }
    );
  }
}
