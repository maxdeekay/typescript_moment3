import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './conversion.component.html',
  styleUrl: './conversion.component.scss'
})
export class ConversionComponent {
  // properties
  meters: number = 0;
  feet: number = 0;

  celcius: number = 0;
  fahrenheit: number = 32;

  // methods
  metersToFeet(): void {
    this.feet = this.meters * 3.28;
  }

  celciusToFarenheit(): void {
    this.fahrenheit = (this.celcius * 9/5) + 32;
  }
}
