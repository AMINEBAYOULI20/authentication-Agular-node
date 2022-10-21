import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login-a',
  templateUrl: './login-a.component.html',
  styleUrls: ['./login-a.component.scss']
})
export class LoginAComponent implements OnInit {

  loginform!: FormGroup;
  constructor(private authserv: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginform = this.formBuilder.group({

      mail: ['',],
      password: ['',]
    })
  }
  onLoggedin() {
    console.log("azerty", this.loginform.value)
    this.authserv.login(this.loginform.value).subscribe(user => {
      console.log("userfron back", user.user.role)
      this.authserv.saveToken(user.token)

      if (user.user.role === "admin") {
        this.router.navigate(['/admin'])

      }
      if (user.user.role === "client") {
        this.router.navigate(['/client'])
      }

      else {
        console.log("aaaaaaaaaaa")
      }

    }

    );


  }

}
