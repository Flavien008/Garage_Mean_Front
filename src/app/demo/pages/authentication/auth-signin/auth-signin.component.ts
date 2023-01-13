import { AppModule } from './../../../../app.module';
import { AuthService } from './../../../../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
    constructor(private authService : AuthService){}

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
            this.authService.login(this.loginGroup.value).subscribe(result=>{
                console.log('ato');
                
                if(result.error){
                    console.log('diso'+result);
                    
                    alert('Verifiez vos info');
                }else {
                    console.log('marina'+result);

                    alert('ok');
                }
            })
        }
    }
}
