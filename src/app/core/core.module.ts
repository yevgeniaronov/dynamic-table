import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [HttpClientModule, CommonModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  providers: []
})
export class CoreModule {}
