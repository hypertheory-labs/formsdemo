import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';
import { EntryFormComponent } from './entry-form/entry-form.component';

@NgModule({
  declarations: [AppComponent, EntryFormComponent],
  imports: [BrowserModule, ReactiveFormsModule, NgxMaskModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
