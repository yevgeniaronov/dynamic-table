import { AssetContentData } from './asset-content-data.model';

class Pageable {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  sort: Sort;
  unpages: boolean;
}

class Sort {
  sorted: boolean;
  unsorted: boolean;
}

export class AssetData {
  content: AssetContentData[];
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  size: number;
  sort: Sort;
  totalElements: number;
  totalPages: number;
}
