import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Injector,
  ViewChild,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { HostComponentComponent } from './host-component/host-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  Native Angular:
  <app-host-component [hostDirectiveInput]="name" [foo]="name"/>
  -------------------------------------------------------- <br/>

  Custom Element: 
  <ng-ce  [hostDirectiveInput]="name" [foo]="name"/>
  `,
  imports: [HostComponentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class App implements AfterViewInit {
  name = 'Angular';

  constructor(injector: Injector) {
    setTimeout(() => {
      const el = createCustomElement(HostComponentComponent, {
        injector,
      });

      customElements.define('ng-ce', el);
    }, 200);
    setTimeout(() => {
      this.name = 'New Input';
    }, 5000);
  }

  ngAfterViewInit() {}
}

bootstrapApplication(App).then((module) => {});
