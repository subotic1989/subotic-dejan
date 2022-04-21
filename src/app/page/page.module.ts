import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from '../dialog/dialog.module';

@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    DialogModule,
  ],
  exports: [PageComponent],
})
export class PageModule {}
