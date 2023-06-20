import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ImageViewerComponent } from './pages/image-viewer/image-viewer.component';
import { TextAreaComponent } from './pages/text-area/text-area.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'image', component: ImageViewerComponent },
  { path: 'textarea', component: TextAreaComponent },
  { path: 'image/:immagine', component: ImageViewerComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
