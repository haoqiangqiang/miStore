import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAddComponent } from './add';
import { AdminEditComponent } from './edit';
import { AdminManagerComponent } from './manager.component';

const routes: Routes = [{
    path: '',
    component: AdminManagerComponent,
}, {
    path: 'add',
    component: AdminAddComponent,
}, {
    path: 'edit',
    component: AdminEditComponent,
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ManageRoutingModule {}