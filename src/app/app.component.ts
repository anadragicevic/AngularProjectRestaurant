import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { AuthServiceService } from './services/auth.service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restoran';

  constructor(private userService:UserService, private auth:AuthServiceService, router:Router){
    this.auth.user$.subscribe(user=>{
      if(user){
        userService.save(user);
      }
    })
  }
}
