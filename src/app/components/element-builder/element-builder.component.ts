import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TreatmentElementComponent } from 'src/app/models/treatment-element-component';

@Component({
  selector: 'app-element-builder',
  templateUrl: './element-builder.component.html',
  styleUrls: ['./element-builder.component.scss'],
})
export class ElementBuilderComponent implements OnInit {
  @Input() component!: TreatmentElementComponent;
  // @Input() form!: FormGroup;
  @Input() formGroupName!: number;

  text!: string; // temp until replaced with form

  constructor() {}

  ngOnInit() {}
}
