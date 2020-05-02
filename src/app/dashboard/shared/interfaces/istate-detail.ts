import { KeyValue } from '@angular/common';
import { IDistrict } from './IDistrict';

export interface IStateDetail {
    statecode : String,
    districtData : KeyValue<String, KeyValue<String,IDistrict[]>>
}
