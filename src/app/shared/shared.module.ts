import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomModal } from './components/custom-modal/custom-modal.component';



@NgModule({
  declarations: [CustomModal],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    CustomModal
  ]
})
export class SharedModule { }
