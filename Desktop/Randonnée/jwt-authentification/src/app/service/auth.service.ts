import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials)
      .pipe(
        catchError(error => {
          // Enhance error logging
          let errorMsg = 'An unknown error occurred!';
          if (error.error instanceof ErrorEvent) {
            // Client-side error
            errorMsg = `Client-side error: ${error.error.message}`;
          } else {
            // Server-side error
            errorMsg = `Server-side error: ${error.status} - ${error.statusText || ''} ${error.error?.message || ''}`;
          }
          console.error('Login error:', errorMsg);
          return throwError(errorMsg);
        })
      );
  }

  getHikePhotos(): Observable<string[]> {
    const token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<string[]>(`${this.baseUrl}/hikes/photos`, { headers })
      .pipe(
        catchError(error => {
          // Enhance error logging
          let errorMsg = 'An unknown error occurred!';
          if (error.error instanceof ErrorEvent) {
            // Client-side error
            errorMsg = `Client-side error: ${error.error.message}`;
          } else {
            // Server-side error
            errorMsg = `Server-side error: ${error.status} - ${error.statusText || ''} ${error.error?.message || ''}`;
          }
          console.error('Error fetching hike photos:', errorMsg);
          return throwError(errorMsg);
        })
      );
  }
}
