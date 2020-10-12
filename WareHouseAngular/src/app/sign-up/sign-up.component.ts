import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../service/service-registration/registration.service';
import { User } from '../user';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user = new User();
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.registrationService.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        //this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

}
