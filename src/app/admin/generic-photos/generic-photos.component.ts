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

  constructor(
    private uploadService: UploadService
  ) { }

  ngOnInit() {
    this.uploadService.getUploads()
      .subscribe(
        (uploads: Upload[]) => { this.uploads = uploads; }
      );
    console.log(this.uploads);

  }
  onDeletePicture(upload) {
    this.uploadService.deleteUpload(upload);
  }
  getPics() {
    const query = { };
    this.uploadService.getUploads(query);
    console.log(query);
    // this.picturesService.getPictures().subscribe(
    //   (pictures: Object) => { console.log(pictures); }
    // );
  }

}
