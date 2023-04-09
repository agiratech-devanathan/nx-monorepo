import { Component } from '@angular/core';
import {exampleProducts} from '@myorg/products'
@Component({
  selector: 'myorg-root',
  template: `
  <myorg-banner title="Welcome to the store!"> </myorg-banner>
  <ul>
    <li *ngFor="let product of products">
      <strong>{{ product.name }}</strong> Price: {{ product.price }}
    </li>
  </ul>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'store';
  products=exampleProducts
}
