import { AppModule } from './../../../../app.module';
import { AuthService } from './../../../../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-auth-signin',
    standalone: true,
    imports: [CommonModule, RouterModule,ReactiveFormsModule],
    templateUrl: './auth-signin.component.html',
    styleUrls: ['./auth-signin.component.scss'],
})

export default class AuthSigninComponent implements OnInit{
    loginGroup : FormGroup;
    defaultLog : string = "Flavien";
    defaultPwd : string = "1234";
    loginError : boolean = false

    constructor(private authService : AuthService,private router: Router){}

    ngOnInit(): void {
        this.initForm();
    }

    initForm(){
        this.loginGroup = new FormGroup({
            login : new FormControl('',[Validators.required]),
            password : new FormControl('',[Validators.required])
        })
    }

    loginProcess(){
        if(this.loginGroup.valid){
            this.authService.login(this.loginGroup.value)
            .subscribe(
                response => {
                    this.loginError = true;
                    localStorage.setItem('user', JSON.stringify(response));
                    this.router.navigate(['/dashboard']);
                },
                error => {
                    if(error.status == 401) {
                        this.loginError = true;
                        console.log('Vérifier vos informations ! ');
                    }
                }
            );
                
        }
    }
}
