import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-material';
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      // name: ['', [Validators.required, this.noWhitespaceValidator]],
      name: ['', [Validators.required, this.validateName]],
      email: ['', [Validators.required, Validators.pattern(/\S+@gmail\.com$/)]],
      // phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(10), Validators.maxLength(10)]]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Your form submission logic goes here
      console.log(this.myForm.value)
      console.log('Form submitted!');
    } else {
      // Handle form validation errors
      console.log('Form validation failed!');
    }
  }

  validateName(control) {
    const value = control.value;
    const isWhitespace = (value || '').trim().length === 0;
    const hasNumericCharacters = /\d/.test(value);

    if (isWhitespace) {
      console.log(isWhitespace,"iswhitespace")
      return { 'whitespace': true };
    }

    if (hasNumericCharacters) {
      console.log(hasNumericCharacters,"hasnumeric")
      return { 'numeric': true };
    }

    return null;
  }

 
  // noWhitespaceValidator(control) {
  //   const isWhitespace = (control.value || '').trim().length === 0;
  //   const isValid = !isWhitespace;
  //   return isValid ? null : { 'whitespace': true };
  // }
}
