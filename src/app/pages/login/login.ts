
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '../../models/login-request/login-request';
import { AuthService } from '../../services/auth-service/auth-service';

 

@Component({

  selector: 'app-login',

  standalone: false,

  templateUrl: './login.html',

  styleUrls: ['./login.css']

})

export class Login {

 

  loginRequest: LoginRequest = {

 

    email: '',

    password: ''

  };

 

  constructor(

    private authService: AuthService,

    private router: Router

  ) {}

 

  loginUser() {

   //console.log(this.loginRequest);

    this.authService.login(this.loginRequest)

      .subscribe({

 

//         next: (response: string) => {

//  

//           localStorage.setItem('token', response);

//  

//           this.router.navigate(['/dashboard']);

//         },

 next: (response: string) => {

 

  if(response === 'User not found'

      || response === 'Invalid password') {

 

    alert(response);

    return;

  }

 

  localStorage.setItem('token', response);

 

  this.router.navigate(['/dashboard']);

},

 

        error: (error: any) => {

 

          console.log(error);

 

          alert('Invalid credentials');

        }

      });

  }

}

