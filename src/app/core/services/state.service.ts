import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IResponse } from 'src/app/dashboard/shared/interfaces/iresponse';
import { IState } from 'src/app/dashboard/shared/interfaces/istate';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private apiUrl = "https://api.covid19india.org/data.json";

  constructor(private http: HttpClient) { }

  getStates() : Observable<IState[]>{
    return this.http.get<IResponse>(this.apiUrl).pipe(
      map(result=>result.statewise))
 };
}

