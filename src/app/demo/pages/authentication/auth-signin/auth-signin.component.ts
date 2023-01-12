import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-auth-signin',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './auth-signin.component.html',
    styleUrls: ['./auth-signin.component.scss'],
})
export default class AuthSigninComponent implements OnInit{
    loginError : boolean = false
    mdpError : boolean = false

    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }

    // display error
    checkInput(login: string, password : string)
    {
        if(login.length == 0) this.loginError = true ; else this.loginError =false
        if(password.length == 0) this.mdpError = true ; else this.mdpError =false
        this.login();
    }

    login(){
        if(this.loginError == false && this.mdpError == false){
            console.log(`je vais appeller l'api`);
            
        }
    }
}
