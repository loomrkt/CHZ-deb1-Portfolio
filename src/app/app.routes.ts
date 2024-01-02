import { Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout/layout.component';
import { UnipageComponent } from './pages/unipage/unipage.component';

export const routes: Routes = [
  {
    path:"",
    component: LayoutComponent,
    children: [
      {path:"", component:UnipageComponent}
    ]
  },
  {
    path: "**",
    redirectTo: ""
}
];
