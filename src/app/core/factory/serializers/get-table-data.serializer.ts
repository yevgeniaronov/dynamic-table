import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { AssetsParamData } from 'src/app/shared/models/assets-param-data.model';
import { AssetData } from 'src/app/shared/models/asset-data.model';

@Injectable({ providedIn: 'root' })
export class GetAssetDataSerializer {
  fromJson(json: any): AssetData {
    const assetData = new AssetData();
    if (json) {
      assetData.content = json.content;
      assetData.first = json.first;
      assetData.last = json.last;
      assetData.number = json.number;
      assetData.numberOfElements = json.numberOfElements;
      assetData.pageable = json.pageable;
      assetData.size = json.size;
      assetData.sort = json.sort;
      assetData.totalElements = json.totalElements;
      assetData.totalPages = json.totalPages;
    }

    return assetData;
  }

  toJson(paramData: AssetsParamData): any {
    let httpParams = new HttpParams();
    if (paramData) {
      if (paramData.page != null && paramData.page !== undefined) {
        httpParams = httpParams.set('page', paramData.page.toString());
      }
      if (paramData.size != null && paramData.size !== undefined) {
        httpParams = httpParams.set('size', paramData.size.toString());
      }
      if (paramData.sort != null && paramData.sort !== undefined) {
        httpParams = httpParams.set('sort', paramData.severity);
      }
      if (paramData.severity != null && paramData.severity !== undefined) {
        httpParams = httpParams.set('severity', paramData.severity);
      }
      return httpParams;
    }
  }
}
