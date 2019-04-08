import { Component, Input } from '@angular/core';

@Component({
  selector: 'minimum',
  template: `
  <div>
    test {{n}}
  </div>
`
})
export class MinimumNumberOfItemsComponent {
  @Input() n: number;

}