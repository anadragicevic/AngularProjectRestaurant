import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth.service.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public auth:AuthServiceService) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
  }

}
