import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// SERVICES
import { AuthGuard } from './auth-guard.service';

// COMPONENTS
import { LoginComponent} from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { TemplatesComponent } from './admin/templates/templates.component';
import { NewTemplateComponent } from './admin/templates/new-template/new-template.component';
import { EditTemplateComponent } from './admin/templates/edit-template/edit-template.component';
import { TemplateComponent } from './admin/templates/template/template.component';
import { GenericPhotosComponent } from './admin/generic-photos/generic-photos.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin',
    canActivateChild: [AuthGuard],
    component: AdminComponent,
    children: [
    { path: '', redirectTo: 'templates', pathMatch: 'full'},
    { path: 'templates', component: TemplatesComponent },
    { path: 'generic-photos', component: GenericPhotosComponent },
    { path: 'templates/new', component: NewTemplateComponent },
    { path: 'templates/:name/:model', component: TemplateComponent },
    { path: 'templates/:name/:model/edit', component: EditTemplateComponent }
  ]  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
