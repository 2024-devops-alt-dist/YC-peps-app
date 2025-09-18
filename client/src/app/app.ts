import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  public apiState = signal('client');
  public API_URL : string = 'http://localhost:8080';

  // constructor(
  //   private http: HttpClient,
  // ) {}

  // tryConnexion() {
  //   this.http.get<Map<string, string>>('/api/health').subscribe({
  //     next: (data) => {
  //       this.apiState.set('API is healthy');
  //       console.log('API is healthy:', data);
  //     },
  //     error: (error) => {
  //       this.apiState.set('API is not reachable');
  //       console.error('API is not reachable:', error);
  //     }
  //   });
  // }
}
