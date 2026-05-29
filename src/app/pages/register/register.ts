
import { Component } from '@angular/core';

 

import { Router } from '@angular/router';

 

import { AuthService } from '../../services/auth-service/auth-service';

 

import { RegisterRequest } from '../../models/register-request/register-request';

 

@Component({

  selector: 'app-register',

  standalone: false,

  templateUrl: './register.html',

  styleUrls: ['./register.css']

})

export class Register {

 

  registerRequest: RegisterRequest = {

 

    name: '',

    email: '',

    password: ''

  };

 

  constructor(

    private authService: AuthService,

    private router: Router

  ) {}

 

  registerUser() {

 

    this.authService.register(this.registerRequest)

      .subscribe({

 

        next: (response: string) => {

 

          alert(response);

 

          this.router.navigate(['/login']);

        },

 

        error: (error) => {

 

          console.log(error);

 

          alert('Registration failed');

        }

      });

  }

}

