import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `  
     <h2>
       Structural Directives
     </h2>
     
       <h3 *ngIf="displayButton; else elseBlock">
          1. ngIf
      </h3>

      <ng-template #elseBlock>
       <h3>
         1. HTML element is hidden.
       </h3>
      </ng-template>
    
    <!--
    <h3>
      Alternative Syntax
    </h3>
    <div *ngIf="displayButton; then firstCondition; else secondCondition"></div>
    <ng-template #firstCondition>
      <h3>Display!!</h3>
    </ng-template>

    <ng-template #secondCondition>
      <h3>Display is hidden....</h3>
    </ng-template>
    --> 
  `,
  styles: [``]
})
export class TestComponent {

  displayButton = true;

}
