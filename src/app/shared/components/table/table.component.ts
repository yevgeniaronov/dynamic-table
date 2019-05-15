import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TableDataService } from 'src/app/core/services/table-data.service';
import { AssetData } from '../../models/asset-data.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  @Input() tableHeaders: string[];

  isLoading: boolean;
  assetData: AssetData;
  itemPerPageOptions: number[] = [10, 20, 30];
  itemsPerPage = 10;
  currentPage = 0;

  constructor(private tableDataService: TableDataService) {}

  ngOnInit() {
    this.getAssets({ page: 0, size: 10 });
  }

  onRowsPerPageSelect(size: number) {
    this.itemsPerPage = size;
    this.getAssets({ size });
  }

  onPageClick(event: any): void {
    this.getAssets({ page: event.page, size: this.itemsPerPage });
  }

  getAssets(paramData?: any) {
    this.isLoading = true;

    this.tableDataService
      .getAssets(paramData)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (assetData: AssetData) => {
          console.log(assetData);

          this.assetData = assetData;
        },
        error: err => {
          console.error(err);
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        }
      });
  }

  onSortClick() {}
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }
}
