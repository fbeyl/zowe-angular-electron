import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CdkTableModule} from '@angular/cdk/table';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatTableModule,
  MatInputModule,
  MatSortModule,
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    FormsModule,
    FlexLayoutModule,
  ],
  exports: [
    BrowserAnimationsModule,
    CdkTableModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    FormsModule,
    FlexLayoutModule,
  ]
})
export class MaterialModule { }