import { Routes, RouterModule } from '@angular/router';
import { LayoutTwoComponent } from './layout-two.component';

const routes: Routes = [
  {
    path:"",
    component:LayoutTwoComponent,
    children:[
      {
        path: "messages",
        loadChildren: () =>
          import("./../../pages/messages/messages.module").then((m) => m.MessagesModule),
      }
    ]
  }
];
export const LayoutTwoRoutes = RouterModule.forChild(routes);
