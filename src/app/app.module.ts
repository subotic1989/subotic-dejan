import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageModule } from './page/page.module';
import { SadComponent } from './sad/sad.component';

@NgModule({
  declarations: [AppComponent, SadComponent],
  imports: [BrowserModule, PageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
