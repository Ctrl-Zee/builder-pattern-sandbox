import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreatmentPlanElementComponent } from './components/treatment-plan-element/treatment-plan-element.component';
import { EditorModule } from 'primeng/editor';
import { ElementBuilderComponent } from './components/element-builder/element-builder.component';
import { TreatmentPlanElementService } from './services/treatment-plan-element.service';
import { FormControlService } from './services/form-control.service';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { SectionBuilderComponent } from './components/section-builder/section-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    TreatmentPlanElementComponent,
    ElementBuilderComponent,
    DynamicFormComponent,
    SectionBuilderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [TreatmentPlanElementService, FormControlService],
  bootstrap: [AppComponent],
})
export class AppModule {}
