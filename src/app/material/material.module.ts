import { NgModule } from "@angular/core";

import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSnackBarModule,
  MatDialogModule
} from "@angular/material";

@NgModule({
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule
  ]
})
export class MaterialModule {}
