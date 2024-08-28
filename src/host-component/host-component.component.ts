import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ExampleHostDirective } from './example-host.directive';

@Component({
  selector: 'app-host-component',
  templateUrl: './host-component.component.html',
  styleUrls: ['./host-component.component.css'],
  standalone: true,
  hostDirectives: [
    {
      directive: ExampleHostDirective,
      inputs: ['hostDirectiveInput'],
    },
  ],
})
export class HostComponentComponent implements OnChanges {
  @Input() foo = 'bar';
  dir = inject(ExampleHostDirective);
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('host changes:', changes);
  }
}
