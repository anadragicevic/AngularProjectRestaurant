import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth.service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(public auth: AuthServiceService) {
    
   }

  ngOnInit(): void {
  }

  login(){
    this.auth.login();
    
    
  }

}
