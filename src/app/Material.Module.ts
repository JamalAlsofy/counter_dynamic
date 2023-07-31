import { NgModule } from "@angular/core";
import {MatButtonModule} from "@angular/material/button"
import {MatSelectModule} from "@angular/material/select"
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatInputModule} from "@angular/material/input"
import {MatCardModule} from "@angular/material/card"

@NgModule({
  exports:[
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule

  ]
})
export class MaterialModule {}
