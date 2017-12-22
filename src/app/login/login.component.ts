import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit{
  returnUrl:string;
  
  constructor(
    private route:ActivatedRoute,
    private router:Router,
  ) {}
  

  ngOnInit() {
    this.returnUrl=this.route.snapshot.queryParams['returnUrl']
  }

}
