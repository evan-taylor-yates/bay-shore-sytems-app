import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class PicturesService {
  private pictures = [
    {
      id: 1,
      title: 'Dog',
      path: 'https://static.pexels.com/photos/355913/pexels-photo-355913.jpeg'
    },
    {
      id: 2,
      title: 'Wrench',
      path: 'https://static.pexels.com/photos/355913/pexels-photo-355913.jpeg'
    },
    {
      id: 3,
      title: 'Ballon',
      path: 'https://static.pexels.com/photos/355913/pexels-photo-355913.jpeg'
    },
    {
      id: 4,
      title: 'Car',
      path: 'https://static.pexels.com/photos/355913/pexels-photo-355913.jpeg'
    },
    {
      id: 5,
      title: 'Building',
      path: 'https://static.pexels.com/photos/355913/pexels-photo-355913.jpeg'
    },
    {
      id: 6,
      title: 'Engine',
      path: 'https://static.pexels.com/photos/355913/pexels-photo-355913.jpeg'
    },
    {
      id: 7,
      title: 'Person',
      path: 'https://static.pexels.com/photos/355913/pexels-photo-355913.jpeg'
    },
    {
      id: 8,
      title: 'Phone',
      path: 'https://static.pexels.com/photos/355913/pexels-photo-355913.jpeg'
    },
    {
      id: 9,
      title: 'Paper',
      path: 'https://static.pexels.com/photos/355913/pexels-photo-355913.jpeg'
    },
    {
      id: 10,
      title: 'Chair',
      path: 'https://static.pexels.com/photos/355913/pexels-photo-355913.jpeg'
    },

  ];
  constructor(private http: Http) { }

  getPictures() {
    return this.http.get('https://angular-http-tutorial.firebaseio.com/uploads.json')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  // getPictures() {
  //   return this.pictures;
  // }

  getPicture(id: number) {
    const template = this.pictures.find(
      (t) => {
        return t.id === id;
      }
    );
    return template;
  }
  deletePicture(id: number) {
    let index = 0;
    for (const picture of this.pictures) {
      if (picture.id === id) {
        break;
      }
      index ++;
    }
    this.pictures.splice(index, 1);
  }
}
