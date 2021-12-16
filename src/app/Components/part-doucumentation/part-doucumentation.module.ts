import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartDoucumentationRoutingModule } from './part-doucumentation-routing.module';
import { PartDoucumentationComponent,Dialog,Delete,Backup} from './part-doucumentation.component';
import { SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [PartDoucumentationComponent,Dialog,Delete,Backup],
  imports: [
    CommonModule,SharedModule,
    PartDoucumentationRoutingModule
  ],
  entryComponents:[Dialog,Delete,Backup],
})
export class PartDoucumentationModule { }
