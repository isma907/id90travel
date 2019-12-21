import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Hotel, Hotels } from '../_models/hotels'
import { Observable } from "rxjs";
import { tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private http: HttpClient) { }

  getHotels(params): Observable<Hotels> {
    params.per_page = 25;
    params.page = 1;
    return this.http.get<Hotels>("https://beta.id90travel.com/api/v1/hotels.json", {
      params:
        params
    })
  }

}
