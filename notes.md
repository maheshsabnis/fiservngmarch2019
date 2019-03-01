Angular Databinding

1. Interpolation aka Expression Binding
   1. Read-Only Binding
   2. Syntax --> {{<PROPERTY-FROM-COMPONENT>}}
2. Property Binding
   1. One-Way from Component to UI
      1. [<HTML=ATTRIBIUTE>]="<PROPERTY-FROM-COMPONENT>"
3. Event Binding
   1. Event raised on UI and updates the Component
      1. (<HTML EVENT NAME>)="<Method from Componen>"()
4. Two-Way Binding
   1. Property Binding + Event Binding
      1. [(ngModel)]
         1. ngModelChanged Event
            1. Managed Changes from UI to Component and Back to UI
         2. ngModel needs FormModule from @angular/forms
5. Angular Standard Directives
   1. UI and Functional Behavioral Objects for UI
   2. Types
      1. Component
      2. Structured
         1. Dynamically Update DOM based on Databinding and conditions
            1. \*ngFor
            2. \*ngIf
            3. ngSwitach--ngSwitchCase
      3. Attribute Directives
         1. ngClass
