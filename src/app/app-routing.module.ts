import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreatmentPlanElementComponent } from './components/treatment-plan-element/treatment-plan-element.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'treatmentPlanElement',
    pathMatch: 'full',
  },
  {
    path: 'treatmentPlanElement',
    component: TreatmentPlanElementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
