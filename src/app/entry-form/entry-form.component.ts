import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css'],
})
export class EntryFormComponent implements OnInit {
  toggleShowSsn() {
    this.hideSsn = !this.hideSsn;
  }
  ssnHasFocus() {
    this.hideSsn = false;
  }
  ssnBlur() {
    this.hideSsn = true;
  }
  hideSsn = true;
  form = new FormGroup<FormModel>({
    name: new FormControl<string>('', { nonNullable: true }),
    ssn: new FormControl<string>('', { nonNullable: true }),
    cc: new FormControl<string>('', { nonNullable: true }),
    birthdate: new FormControl<string>('', { nonNullable: true }),
  });
  constructor() {}
  ssnPattern = {
    Y: { pattern: new RegExp('\\d'), symbol: 'X' },
    S: { pattern: new RegExp('\\d') },
  };
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
