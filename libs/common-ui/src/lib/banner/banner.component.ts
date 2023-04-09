import { Component, Input } from '@angular/core';

@Component({
  selector: 'myorg-banner',
  template: `<header>{{ title }}</header>`,
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  @Input() title = 'deva';
}
