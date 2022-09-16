import { Component } from '@angular/core'
import { ValueService } from '../../../services/value.service'

@Component({
  selector: 'inst-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss'],
})
export class CompBComponent {
  value = 0

  constructor(private valueService: ValueService) {}

  ngOnInit(): void {
    this.valueService.value$.subscribe(value => {
      this.value = value
    })
  }

  decValueHandler() {
    this.valueService.dec()
  }
}
