import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms'; // Model-Driven Forms


import { SharedModule} from './shared/shared.module';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
export const firebaseConfig = environment.firebaseConfig;


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { TemplatesComponent } from './admin/templates/templates.component';
import { NewTemplateComponent } from './admin/templates/new-template/new-template.component';
import { EditTemplateComponent } from './admin/templates/edit-template/edit-template.component';
import { TemplateComponent } from './admin/templates/template/template.component';
import { GenericPhotosComponent } from './admin/generic-photos/generic-photos.component';
import { GenericPhotoComponent } from './admin/generic-photos/generic-photo/generic-photo.component';
import { NewGenericPhotoComponent } from './admin/generic-photos/new-generic-photo/new-generic-photo.component';
import { EditGenericPhotoComponent } from './admin/generic-photos/edit-generic-photo/edit-generic-photo.component';

import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './auth.service';
import { AuthGuard} from './auth-guard.service';
import { TemplatesService } from './admin/templates/templates.service';
import { PicturesService } from './admin/generic-photos/pictures.service';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { UploadService } from './admin/templates/new-template/shared/upload.service';

import { UploadFormComponent } from './admin/templates/new-template/upload-form/upload-form.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    NewTemplateComponent,
    TemplatesComponent,
    EditTemplateComponent,
    TemplateComponent,
    GenericPhotosComponent,
    GenericPhotoComponent,
    NewGenericPhotoComponent,
    EditGenericPhotoComponent,
    UploadFormComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AuthService,
    TemplatesService,
    PicturesService,
    AuthGuard,
    AngularFireAuth,
    AngularFireDatabase,
    UploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
