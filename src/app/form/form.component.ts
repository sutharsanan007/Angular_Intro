import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';
import { NoSpaceValidators } from '../validators/nospace.validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  form: any;
  form2: any; // Custom form validation
  emailRegex: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  contactRegex: string = '^[0-9]*$';

    constructor(fb: FormBuilder) {

      this.form2 = fb.group({
        userName: ['', [
          Validators.required,
          Validators.minLength(5),
          NoSpaceValidators.noSpace
        ]],

        password: ['', [
          Validators.required,
          Validators.minLength(8)
        ]],

      }); // create a form group

  //   this.form = fb.group({
  //     fullName: ['', [
  //       Validators.required,
  //       Validators.minLength(5)
  //     ]],

  //     email: ['', [
  //       Validators.required,
  //       Validators.email
  //     ]],

  //     contactDetails: fb.group({
  //       address: ['', Validators.required],
  //       shippingAddress: ['', Validators.required],
  //       contactNo: ['', [
  //         Validators.required,
  //         Validators.pattern('this.contactRegex')
  //       ]]
  //     }),

  //     skills: fb.array([])

  //   }); // create a form group
     }

  /* Other way to create a form group */
  //   this.form = new FormGroup({
  //     fullName: new FormControl('', [
  //       Validators.required,
  //       Validators.minLength(5),
  //     ]),

  //     email: new FormControl('', [
  //       Validators.required,
  //       // Validators.pattern(this.emailRegex) // or use below
  //       Validators.email
  //     ]),

  //     contactDetails: new FormGroup({
  //       address: new FormControl('', Validators.required),
  //       shippingAddress: new FormControl('', Validators.required),
  //       contactNo: new FormControl('', [
  //         Validators.required,
  //         Validators.pattern('this.contactRegex'),
  //       ])
  //     }),

  //     skills: new FormArray([])

  //   });
  // }

  // For form builder only one get method is required
  get fc () {
    return this.form2.controls;
  }

  // For form builder only one get method is required
  get f () {
    return this.form.controls;
  }

  // For normal form group we need to create get method for each form control
  get FullName() {
      return this.form.get('fullName');
    }

  get Email() {
      return this.form.get('email');
    }

  get Address() {
      return this.form.get('contactDetails.address');
    }

  get ShippingAddress() {
      return this.form.get('contactDetails.shippingAddress');
    }

  get ContactNo() {
      return this.form.get('contactDetails.contactNo');
    }

  get Skills() {
      return this.form.get('skills') as FormArray;
    }

    onSubmit(f: NgForm) {
      console.log(f.value);
    }

    getValue(fullName: NgModel) {
      console.log(fullName);
    }

    addSkills(skills: HTMLInputElement) {
      this.Skills.push(
        new FormControl(skills.value)
      );
      skills.value = ''; // clear the input field
    }

    removeSkills(index: number) {
      this.Skills.removeAt(index);
    }

    onReactiveSubmit() {
      console.log(this.form.value);
    }
}