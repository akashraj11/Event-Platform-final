
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule, MatCardActions} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  imports: [
    CommonModule,MatCardModule,MatButtonModule,MatFormFieldModule,MatSelectModule,MatMenuModule,
    MatToolbarModule

  ],
  exports:[
    MatCardModule,MatButtonModule,MatFormFieldModule,MatMenuModule,MatSelectModule,MatToolbarModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
