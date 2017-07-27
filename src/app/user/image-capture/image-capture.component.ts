import {Component, Input, OnInit} from '@angular/core';
import {Upload} from '../../admin/templates/new-template/shared/upload';

@Component({
  selector: 'image-capture',
  templateUrl: './image-capture.component.html',
  styleUrls: ['./image-capture.component.css']
})
export class ImageCaptureComponent implements OnInit {

  @Input() image: Upload;
  constructor() { }

  ngOnInit() {
    console.log(this.image);
  }

}
