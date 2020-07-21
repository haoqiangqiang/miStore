import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [{
    path: '',
    component: AdminComponent,
}, {
    path: 'manager',
    loadChildren: () => import('./manager').then(m => m.ManagerModule),
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class AdminRoutingModule {}