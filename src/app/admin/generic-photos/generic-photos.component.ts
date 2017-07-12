import { Component, OnInit } from '@angular/core';
import { PicturesService } from './pictures.service';

@Component({
  selector: 'app-generic-photos',
  templateUrl: './generic-photos.component.html',
  styleUrls: ['./generic-photos.component.css']
})
export class GenericPhotosComponent implements OnInit {
  private pictures: {id: number, name: string, path: string}[] = [];

  constructor(
    private picturesService: PicturesService
  ) { }

  ngOnInit() {
    this.pictures = this.picturesService.getPictures();
  }

}
