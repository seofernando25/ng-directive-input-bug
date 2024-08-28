import {
  AfterViewInit,
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appExampleHost]',
  standalone: true,
})
export class ExampleHostDirective implements OnChanges {
  @Input() hostDirectiveInput!: string;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('directive got:', changes);
  }
}
