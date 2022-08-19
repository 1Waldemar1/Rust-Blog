import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  form!: FormGroup;
  aSub!: Subscription;

  constructor(private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }

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

    this.route.queryParams.subscribe((params: Params) => {
      if (params['registered']) {
        // Now you can log in using your data
      } else if (params['accessDenied']) {
        // To start, log in to the system
      }
    })
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }

  onSubmit() {
    // this.form.disable()

    // this.aSub = this.auth.login(this.form.value).subscribe(
    //   () => this.router.navigate(['/overview']),
    //   error => {
    //     console.warn(error)
    //     this.form.enable()
    //   }
    // )
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