import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule} from '../shared/shared.module';
import { WifiService} from '../../Service/app/wifi.service'
import { WifiComponent } from './wifi.component';
import { CountdownTimerModule } from 'ngx-countdown-timer';

const routes: Routes = [{ path: '', component: WifiComponent }];

@NgModule({
  declarations: [WifiComponent],
  imports: [RouterModule.forChild(routes),
    CommonModule,SharedModule,CountdownTimerModule.forRoot()

  
    
  ],
  providers:[WifiService],
})
export class WifiModule { }
