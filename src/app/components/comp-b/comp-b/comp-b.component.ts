import { Component } from '@angular/core'
import { ValueService } from '../../../services/value.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'inst-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss'],
})
export class CompBComponent {
  value$ = new Observable()

  constructor(private valueService: ValueService) {}

  ngOnInit(): void {
    this.value$ = this.valueService.value$
  }

  decValueHandler() {
    this.valueService.dec()
  }
}
