import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms'; // Model-Driven Forms


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { TemplatesComponent } from './admin/templates/templates.component';
import { NewTemplateComponent } from './admin/templates/new-template/new-template.component';
import { EditTemplateComponent } from './admin/templates/edit-template/edit-template.component';
import { TemplateComponent } from './admin/templates/template/template.component';
import { GenericPhotosComponent } from './admin/generic-photos/generic-photos.component';

import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './auth.service';
import { AuthGuard} from './auth-guard.service';
import { TemplatesService } from './admin/templates/templates.service';
import { PicturesService } from './admin/generic-photos/pictures.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    NewTemplateComponent,
    TemplatesComponent,
    EditTemplateComponent,
    TemplateComponent,
    GenericPhotosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    TemplatesService,
    PicturesService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
