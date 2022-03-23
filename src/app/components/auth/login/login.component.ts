import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserComponent } from '../../users/user/user.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  item:any;
  form!:FormGroup;
  user!:UserComponent
  constructor(private formbuilder: FormBuilder, private authService: AuthService, private router: Router) {}


  login(datiForm:{ value:any; }){
    this.item = datiForm.value;
    this.authService.login(this.item).subscribe(res=>{
      this.user = res;
      localStorage.setItem('utenteattuale', JSON.stringify(this.user));
      this.router.navigate(['/clientlist'])
    })
  }
  ngOnInit(): void {
    this.inizializzaForm();
  }

  inizializzaForm(){
    this.form = this.formbuilder.group({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });
    this.form.controls['username'].setValue('');
    this.form.controls['password'].setValue('');

  }
}

