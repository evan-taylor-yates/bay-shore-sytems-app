import {Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {Upload} from './upload';
import * as firebase from 'firebase';



@Injectable()
export class UploadService {
  // private basePath = '/uploads';
  uploads: FirebaseListObservable<Upload[]>;

  constructor(private db: AngularFireDatabase) { }

  getUploads(basePath: string, query = { }) {
    this.uploads = this.db.list(basePath, {
      query: query
    });
    return this.uploads;
  }


  deleteUpload(upload: Upload, basePath: string) {
    this.deleteFileData(upload.$key, basePath)
      .then( () => {
        this.deleteFileStorage(upload.name, basePath);
      })
      .catch(error => console.log(error));
  }

  // Executes the file uploading to f; stringirebase https://firebase.google.com/docs/storage/web/upload-files
  pushUpload(upload: Upload, basePath) {
    const storageRef = firebase.storage().ref();
    console.log(basePath);
    const uploadTask = storageRef.child(`${basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        // upload failed
        console.log(error);
      },
      () => {
        // upload success
        upload.url = uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        this.saveFileData(upload, basePath);
      }
    );
  }



  // Writes the file details to the realtime db
  private saveFileData(upload: Upload, basePath: string) {
    this.db.list(`${basePath}/`).push(upload);
  }

  // Writes the file details to the realtime db
  private deleteFileData(key: string, basePath: string) {
    return this.db.list(`${basePath}/`).remove(key);
  }

  // Firebase files must have unique names in their respective storage dir
  // So the name serves as a unique key
  private deleteFileStorage(name: string, basePath: string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${basePath}/${name}`).delete();
  }
}
