import { NgModule } from '@angular/core';
import { TableComponent } from './components/table/table.component';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { DismissibleBadgeComponent } from './components/dismissible-badge/dismissible-badge.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CardSpinnerComponent } from './components/card-spinner/card-spinner.component';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule,
    PaginationModule,
    AngularFontAwesomeModule
  ],
  exports: [TableComponent, DismissibleBadgeComponent, CardSpinnerComponent],
  declarations: [
    TableComponent,
    DismissibleBadgeComponent,
    CardSpinnerComponent
  ],
  providers: []
})
export class SharedModule {}
