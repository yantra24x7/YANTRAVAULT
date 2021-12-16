import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard} from '../app/Service/core/authentication/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./Components/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./Components/register/register.module').then(m => m.RegisterModule),},
  { path: 'filepath', loadChildren: () => import('./Components/filepath/filepath.module').then(m => m.FilepathModule) },
  { path: 'master', loadChildren: () => import('./Components/master/master.module').then(m => m.MasterModule) },
  { path: 'backup', loadChildren: () => import('./Components/backup/backup.module').then(m => m.BackupModule) },
  // { path: 'sidebar', loadChildren: () => import('./Nav/sidebar/sidebar.module').then(m => m.SidebarModule) },
  { path: 'reason', loadChildren: () => import('./Components/reason/reason.module').then(m => m.ReasonModule) },
  { path: 'machine_registration', loadChildren: () => import('./Components/machine-registration/machine-registration.module').then(m => m.MachineRegistrationModule) },
  { path: 'user_management', loadChildren: () => import('./Components/user-management/user-management.module').then(m => m.UserManagementModule) },
  { path: 'shift', loadChildren: () => import('./Components/shift/shift.module').then(m => m.ShiftModule) },
  // { path: 'operator_allocation', loadChildren: () => import('./Components/operator-allocation/operator-allocation.module').then(m => m.OperatorAllocationModule) },
  { path: 'part_documentation', loadChildren: () => import('./Components/part-doucumentation/part-doucumentation.module').then(m => m.PartDoucumentationModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'wifi', loadChildren: () => import('./Components/wifi/wifi.module').then(m => m.WifiModule) },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
