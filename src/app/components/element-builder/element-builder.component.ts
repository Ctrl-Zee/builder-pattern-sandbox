import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { tap, debounceTime, Subscription } from 'rxjs';
import { TreatmentElementComponent } from 'src/app/models/treatment-element-component';

@Component({
  selector: 'app-element-builder',
  templateUrl: './element-builder.component.html',
  styleUrls: ['./element-builder.component.scss'],
})
export class ElementBuilderComponent implements OnInit {
  @Input() component!: TreatmentElementComponent;
  @Output() newValueEvent = new EventEmitter<TreatmentElementComponent>();

  elementForm!: FormGroup;
  elementValueSubscription!: Subscription;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.elementForm = this.formBuilder.group({
      element: this.component.required ? new FormControl(this.component.textValue || '', Validators.required) : new FormControl(this.component.textValue || ''),
    });

    //Get the value from the form control and emit it.
    this.elementValueSubscription = this.elementForm.controls['element'].valueChanges
      .pipe(
        debounceTime(500),
        tap((value) => this.emitNewValue(value))
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.elementValueSubscription.unsubscribe();
  }

  emitNewValue(value: string) {
    const elementComponent = { ...this.component, textValue: value };
    this.newValueEvent.emit(elementComponent);
  }
}
