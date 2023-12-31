import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TextAreaComponent } from './pages/text-area/text-area.component';
import { ImageSelectedComponent } from './pages/image-selected/image-selected.component';
import { ImageSelectorComponent } from './components/image-selector/image-selector.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'textarea', component: TextAreaComponent },
  { path: 'image-selected', component: ImageSelectedComponent },
  { path: 'image-selector', component: ImageSelectorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
