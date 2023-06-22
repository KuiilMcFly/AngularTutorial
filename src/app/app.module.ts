import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsContainerComponent } from './components/cards-container/cards-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { DogModalComponent } from './components/dog-modal/dog-modal.component';
import { ImageViewerComponent } from './pages/image-viewer/image-viewer.component';
import { TextAreaComponent } from './pages/text-area/text-area.component';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { PaginaModaleComponent } from './components/pagina-modale/pagina-modale.component';
import { ModificaModaleComponent } from './components/modifica-modale/modifica-modale.component';
import { ImageSelectedComponent } from './pages/image-selected/image-selected.component';
import { TextEditorComponent } from './components/text-editor/text-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardsContainerComponent,
    LoginPageComponent,
    LoginFormComponent,
    DogModalComponent,
    ImageViewerComponent,
    TextAreaComponent,
    PaginaModaleComponent,
    ModificaModaleComponent,
    ImageSelectedComponent,
    TextEditorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
