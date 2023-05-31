import { Component } from '@angular/core';

@Component({
  selector: 'app-test-one',
  template: `
    <h3>
       2. ngSwitch
    </h3>

    <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">Red Color is picked.</div>
    <div *ngSwitchCase="'blue'">Blue Color is picked.</div>
    <div *ngSwitchCase="'green'">Green Color is picked.</div>
    <div *ngSwitchDefault>Pick another avilable colors.</div>
    </div>
  
  `,
  styles: [``]
})
export class TestOneComponent {

  public color= "Yellow";

}
