import { Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { ListProductsComponent } from './components/list-products/list-products.component';

export const routes: Routes = [
  {path: 'counter', component: CounterComponent},
  {path: 'products', component: ListProductsComponent}
];
