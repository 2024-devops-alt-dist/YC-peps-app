import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HealthService } from './Services/HealthService/health-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  public apiState = signal('Tester la connexion à l\'API');

  constructor(private healthService: HealthService) {}

  callConnexion() {
    this.healthService.tryConnexion();
    this.apiState = this.healthService.apiState;
  }
}
