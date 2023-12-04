import { Component } from '@angular/core';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  title = 'homes';

  constructor(
    private housingService: HousingService
  ) {

  }

  getHomesFromFirebase() {
    this.housingService.getHomesFromFirebase();
  };

}
