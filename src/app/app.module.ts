import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ButtonModule } from 'primeng/button';
import { DefinicaoComponent } from './components/definicao/definicao.component';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { DividerModule } from 'primeng/divider';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DefinicaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
