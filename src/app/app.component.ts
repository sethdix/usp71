import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sampleType: string;
  sampleTypes = [
    'Liquid',
    'Antibiotic liquid',
    'Insoluble preparation/cream/ointment to be suspended or emulsified',
    'Solid',
    'Catgut or other surgical sutures for veterinary use',
    'Surgical dressing/cotton/gauze (in packages)',
    'Sutures or other individually packaged single-use material',
    'Other medical devices'
  ];

  preparationType: string;
  bulkType = "Pharmacy bulk package";
  
  preparationTypes(s: string) {
    let typesToReturn = [];
    switch (s) {
      case 'Liquid': case 'Antibiotic liquid':
        typesToReturn.push(
          'Parenteral',
          'Ophthalmic or other non-injectable',
          'Ophthalmic or other non-injectable (single-dose container)'
        );
        break;
      case 'Catgut or other surgical sutures for veterinary use':
        typesToReturn.push(s);
        break;
      case 'Surgical dressing/cotton/gauze (in packages)':
      case 'Sutures or other individually packaged single-use material':
      case 'Other medical devices':
        typesToReturn.push('Non-injectable (other)');
        break;
      default:
        typesToReturn.push(
          'Parenteral',
          'Antibiotic solid',
          'Ophthalmic or other non-injectable',
          'Ophthalmic or other non-injectable (single-dose container)',
          'Bulk solid product'
        );
    }
    return typesToReturn;
  } 

  containerSize: number;
  batchSize: number;

  roundUp(n) {
    return Math.ceil(n);
  }
}
