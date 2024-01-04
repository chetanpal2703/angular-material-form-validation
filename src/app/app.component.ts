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
      name: ['', [Validators.required, this.noWhitespaceValidator]],
      email: ['', [Validators.required, Validators.pattern(/\S+@gmail\.com$/)]],
      // phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(10), Validators.maxLength(10)]]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Your form submission logic goes here
      console.log('Form submitted!');
    } else {
      // Handle form validation errors
      console.log('Form validation failed!');
    }
  }

 
  noWhitespaceValidator(control) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }
}
