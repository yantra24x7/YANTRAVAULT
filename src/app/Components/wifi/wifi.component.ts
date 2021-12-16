import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { WifiService } from '../../Service/app/wifi.service';
import { NavbarService } from '../../Nav/navbar.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
// import Swal from 'sweetalert2';
import { Observable } from "rxjs/Observable";
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

import { timer } from 'rxjs';
import 'rxjs/add/observable/interval';
import "rxjs/add/observable/timer";
import "rxjs/add/operator/finally";
import "rxjs/add/operator/takeUntil";
import "rxjs/add/operator/map";
@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.component.html',
  styleUrls: ['./wifi.component.scss']
})
export class WifiComponent implements OnInit {
  login: FormGroup;
  hide: boolean = true;
  gokul_test= false; 
  scanning:any;
  retryMessage:any;
  status:any;
  constructor(private route:Router,private fb: FormBuilder, private nav: NavbarService, private service: WifiService, ) {
    this.nav.hide();
  }

  ngOnInit() {


    
    this.login = this.fb.group({
      user_name: ["", Validators.required],
      password: ["", Validators.required]
    })
  }
  logintest() {
    // let times = -60;
    // setInterval(() => {
    //   this.gokul_test = true;
    //   console.log("start")
    
    //   this.retryMessage = times++;
    // }, 1000);

    // setInterval(() => {
    //  this.route.navigateByUrl('');

    //   this.gokul_test = true;
    //   console.log("completed")
    // }, 60000);

   
     var data = this.login.value.user_name;
     var data1 = this.login.value.password;
    this.service.submit(data,data1).pipe(untilDestroyed(this)).subscribe(res =>{
      console.log(status);
      Swal.fire(res['status'])
      let times = -60;
      setInterval(() => {
        this.gokul_test = true;
        console.log("start")
      
        this.retryMessage = times++;
      }, 1000);
  
      setInterval(() => {
       this.route.navigateByUrl('');
  
        this.gokul_test = true;
        console.log("completed")
      }, 60000);


     


// $timeout(function () {

// $window.location = '/#!/login';

// }, 60000);

                // }
    })
  }
  wifi(){
    this.service.scan().pipe(untilDestroyed(this)).subscribe(res =>{
      console.log(res);
      this.scanning = res.wifi_name_list;
      console.log(this.scanning)
    

    })
   
  }


  ngOnDestroy(){

  }

}
