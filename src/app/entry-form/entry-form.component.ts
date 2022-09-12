import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css'],
})
export class EntryFormComponent implements OnInit {
  form = new FormGroup<FormModel>({
    name: new FormControl<string>('', { nonNullable: true }),
    ssn: new FormControl<string>('', { nonNullable: true }),
    cc: new FormControl<string>('', { nonNullable: true }),
    birthdate: new FormControl<string>('', { nonNullable: true }),
  });
  constructor() {}

  submit() {
    console.log(this.form.value);
  }
  ngOnInit(): void {}
}

type FormModel = {
  name: FormControl<string>;
  ssn: FormControl<string>;
  cc: FormControl<string>;
  birthdate: FormControl<string>;
};
