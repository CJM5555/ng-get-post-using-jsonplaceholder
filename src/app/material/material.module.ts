import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const MaterialComponents = [
  MatSidenavModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule, //
  MatDialogModule,
  MatProgressBarModule,
  MatCardModule,
  MatExpansionModule,
  MatToolbarModule,
  MatInputModule,
  MatListModule, //
  MatGridListModule,
  MatIconModule,
  MatSliderModule,
  MatProgressSpinnerModule
]

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
