import { Component } from '@angular/core';

@Component({
  selector: 'app-test-two',
  template: `
    <h3>
      3. ngFor
    </h3>
  
    <div *ngFor="let color of colors; index as i">
      <h4>{{i}}, {{color}}</h4>
    </div>

  `,
  styles: []
})
export class TestTwoComponent {

  public colors = ["red","blue","orange","pink","yellow"];

}
