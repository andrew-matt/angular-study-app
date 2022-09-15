import { Component } from '@angular/core'

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  title = 'Lorem ipsum dolor sit amet'
  url = 'https://angular.io/api/common/SlicePipe'
  date = new Date(2022, 5, 12, 10)
}
