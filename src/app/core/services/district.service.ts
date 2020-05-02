import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeyValue } from '@angular/common';
import { IStateDetail } from 'src/app/dashboard/shared/interfaces/istate-detail';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  private apiUrl = "https://api.covid19india.org/state_district_wise.json";

  constructor(private http: HttpClient) { }

  getDistrictsByState(): Observable<KeyValue<String, IStateDetail>>{
    return this.http.get<KeyValue<String, IStateDetail>>(this.apiUrl)
  }
}
