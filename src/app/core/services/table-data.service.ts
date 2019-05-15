import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, filter, catchError } from 'rxjs/operators';
import { GetAssetDataSerializer } from '../factory/serializers/get-table-data.serializer';
import { AssetsParamData } from 'src/app/shared/models/assets-param-data.model';

@Injectable({ providedIn: 'root' })
export class TableDataService {
  constructor(
    private httpClient: HttpClient,
    private getAssetDataSerializer: GetAssetDataSerializer
  ) {}

  getAssets(paramData?: any) {
    const params = this.getAssetDataSerializer.toJson(paramData as any);

    return this.httpClient
      .get(
        'http://interview-zsvm2.eastus.cloudapp.azure.com/fe/query-api/assets',
        {
          params
        }
      )
      .pipe(
        map(data => {
          if (data) {
            return this.getAssetDataSerializer.fromJson(data as any);
          } else {
            throw Error('Something went wrong while trying to get assets data');
          }
        })
      );
  }

  getColumnData() {
    return this.httpClient
      .get(
        'http://interview-zsvm2.eastus.cloudapp.azure.com/fe/query-api/assets/severity/values'
      )
      .pipe(map(() => {}));
  }
}
