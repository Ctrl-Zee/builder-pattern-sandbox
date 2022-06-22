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

@NgModule({
  declarations: [
    AppComponent,
    TreatmentPlanElementComponent,
    ElementBuilderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [TreatmentPlanElementService],
  bootstrap: [AppComponent],
})
export class AppModule {}
