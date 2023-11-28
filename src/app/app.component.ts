import { Component } from '@angular/core';
import { HousingService } from './housing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';

  constructor(
    private housingService: HousingService
  ) {

  }

  getHomesFromFirebase() {
    this.housingService.getHomesFromFirebase();
  };
}
