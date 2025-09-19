import { HttpClient } from '@angular/common/http';
import { Injectable, signal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HealthService {
  public API_URL: string = 'http://localhost:8080';
  public apiState = signal('client');

  constructor(private http: HttpClient) {}

  tryConnexion() {
    this.http.get<{ status: string; message: string }>(`${this.API_URL}/api/health`).subscribe({
      next: (data) => {
        this.apiState.set('API is healthy');
        console.log('API is healthy:', data);
      },
      error: (error) => {
        this.apiState.set('API is not reachable');
        console.error('API is not reachable:', error);
      },
    });
  }
}
