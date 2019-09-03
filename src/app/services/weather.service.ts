import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiRequestUrl } from '../enums/ApiRequestUrl';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class WeatherService {
  public baseUrl: string;

  public constructor(private http: HttpClient) {
    this.baseUrl = `${ApiRequestUrl}`
  }

  public getWeatherData(location?: any): Observable<any> {
    return this.http
      .get<any>(this.baseUrl + `/${location}`, {

      })
      .pipe(
        catchError((error: Error) =>
          throwError(
            error.message
          )
        )
      );
  }
}
