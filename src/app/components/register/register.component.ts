import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  form!: FormGroup;
  aSub!: Subscription

  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    var pwShown = 0;
    const eyes = document.getElementById("eye");
    const btn = document.querySelector('.input_btn')

    eyes?.addEventListener("click", function () {
      if (pwShown == 0) {
          pwShown = 1;
          show();
      } else {
          pwShown = 0;
          hide();
      }
    }, false);

    btn?.addEventListener('click', function(){
      btn.classList.toggle('active')
    })

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })
  }

  // ngOnDestroy() {
  //   if (this.aSub) {
  //     this.aSub.unsubscribe()
  //   }
  // }

  onSubmit() {
  //   this.form.disable()
  //   this.aSub = this.auth.register(this.form.value).subscribe(
  //     () => {
  //       this.router.navigate(['/login'], {
  //         queryParams: {
  //           registered: true
  //         }
  //       })
  //     },
  //     error => {
  //       console.warn(error)
  //       this.form.enable()
  //     }
      
  //   )
  }
}

function show() {
  var p = document.getElementById('pwd');
  p?.setAttribute('type', 'text');
}
function hide() {
  var p = document.getElementById('pwd');
  p?.setAttribute('type', 'password');
}