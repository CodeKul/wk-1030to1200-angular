import { 
  Component,
  OnChanges, 
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,

  Input
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  
  @Input()
  myDt : string
  
  constructor() { }

  ngOnChanges(sc : SimpleChanges) {
    console.log(`ngOnChanges`)
    console.log(sc)
  }

  ngOnInit() {
    console.log(`ngOnInit`)
  }

  ngDoCheck(): void {
    console.log(`ngDoCheck`)
  }

  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit`)
  }

  ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked`)
  }

  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit`)
  }

  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked`)
  }

  ngOnDestroy(): void {
    console.log(`ngOnDestroy`)
  }
}
