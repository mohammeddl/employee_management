import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { HireDatePipe } from './pipes/hire-date.pipe';



@NgModule({
  declarations: [
    HighlightDirective,
    HireDatePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
