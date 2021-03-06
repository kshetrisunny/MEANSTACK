import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConstants } from './app.constants';


@NgModule({
  declarations: [
    AppComponent,
    jqxGridComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    NgbModule.forRoot(),

  ],
  providers: [AppConstants],
  bootstrap: [AppComponent]
})
export class AppModule { }
