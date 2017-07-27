import { Component, OnInit } from '@angular/core';
import { PicturesService } from './pictures.service';
import { UploadService } from './new-generic-photo/shared/upload.service';
import { Upload } from './new-generic-photo/shared/upload';

@Component({
  selector: 'app-generic-photos',
  templateUrl: './generic-photos.component.html',
  styleUrls: ['./generic-photos.component.css'],
  providers: [UploadService]
})
export class GenericPhotosComponent implements OnInit {
  private uploads: Upload[];

  constructor(private uploadService: UploadService) {
  }

  ngOnInit() {
    this.uploadService.getUploads('/generic_photos')
      .subscribe(
        (uploads: Upload[]) => {
          this.uploads = uploads;
        }
      );
    console.log(this.uploads);

  }

  onDeletePicture(upload) {
    this.uploadService.deleteUpload(upload, '/generic_photos');
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
