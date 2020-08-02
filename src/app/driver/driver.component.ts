import { Component, OnInit } from '@angular/core';
import { Driver, Option } from '../vm-types';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css'],
})
export class DriverComponent implements OnInit {
  constructor() {}

  // the data that will be used in the form
  driverData: Driver;

  // Define the preset list of "transportation" options
  transportationList: Option[] = [
    { value: 'C', text: 'Car' },
    { value: 'B', text: 'Bus' },
    { value: 'M', text: 'Motorcycle' },
    { value: 'H', text: 'Helicopter' },
  ];

  ngOnInit() {
    // Populate the "driverData" with some static data (this would normally come from a data service)
    this.driverData = {
      name: 'Richard Hammond',
      description: 'Richard is a motor vehicle enthusiast',
      ownedTransportation: ['C', 'M'],
      favouriteTransportation: 'M',
      driverLicence: true,
      vehicleUse: 'pleasure',
    };
  }

  onSubmit(form: NgForm): void {}
}
