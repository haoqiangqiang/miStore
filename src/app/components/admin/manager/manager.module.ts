import { NgModule } from '@angular/core';

import { AdminAddComponent } from './add';
import { AdminEditComponent } from './edit';
import { AdminManagerComponent } from './manager.component';

import { ManageRoutingModule } from './manager-routing.module';

@NgModule({
    declarations: [
        AdminEditComponent,
        AdminManagerComponent,
        AdminAddComponent,
    ],
    imports: [ManageRoutingModule],
})

export class ManagerModule {}