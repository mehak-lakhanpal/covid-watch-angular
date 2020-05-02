import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPrecautionComponent } from './view-precaution/view-precaution.component';
import { PrecautionRoutingModule } from './precaution-routing.module';



@NgModule({
  declarations: [ViewPrecautionComponent],
  imports: [
    CommonModule,
    PrecautionRoutingModule
  ],
  exports: [
    ViewPrecautionComponent
  ]
})
export class PrecautionModule {
  constructor() {
    console.log("Precaution Module loaded.");
  }
 }
