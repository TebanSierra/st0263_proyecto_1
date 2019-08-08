import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
    selector: 'app-signup-screen',
    templateUrl: './signup-screen.component.html'
})

export class SignupScreenComponent implements OnInit {
    signinForm: FormGroup;

    ngOnInit() {
        this.signinForm = new FormGroup({
            firstName: new FormControl(null, [
                Validators.required,
                Validators.pattern(/^[a-zA-Z]+$/)
            ]),
            secondName: new FormControl(null, [
                Validators.pattern(/^[a-zA-Z]+$/)
            ]),
            firstLastName: new FormControl(null, [
                Validators.required,
                Validators.pattern(/^[a-zA-Z]+$/)
            ]),
            secondLastName: new FormControl(null, [
                Validators.required,
                Validators.pattern(/^[a-zA-Z]+$/)
            ]),
            nickname: new FormControl(null, [
                Validators.required,
                Validators.pattern(/^[a-zA-Z0-9]+$/)
            ]),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            ]),
            password: new FormControl(null,
                Validators.required
            ),
            password2: new FormControl(null,
                Validators.required
            )
        });
    }

    onSubmit() {
        if (this.signinForm.valid) {
            if (this.signinForm.value.password === this.signinForm.value.password2) {
                console.log(this.signinForm.value);
                const user = new User(
                    this.signinForm.value.firstName,
                    this.signinForm.value.firstLastName,
                    this.signinForm.value.secondLastName,
                    this.signinForm.value.nickname,
                    this.signinForm.value.email,
                    new Date(),
                    this.signinForm.value.secondName
                );
                console.log(user);
            } else {
                console.log('Password Do not Match.');
            }
        }
    }
}


