import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../ServiceAuth/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor( private authservice :AuthService , private router: Router){ }

  Logout(){
    this.authservice.logout;
    this.router.navigateByUrl('/pages/login')
  }
}
