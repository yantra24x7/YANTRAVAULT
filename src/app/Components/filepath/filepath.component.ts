import { Component, OnInit,Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { NavbarService} from '../../Nav/navbar.service';
import Swal from 'sweetalert2'
import { FilepathService } from 'src/app/Service/app/filepath.service';
import { HttpHeaders } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import { untilDestroyed } from 'ngx-take-until-destroy';
@Component({
  selector: 'app-filepath',
  templateUrl: './filepath.component.html',
  styleUrls: ['./filepath.component.scss']
})
export class FilepathComponent implements OnInit {
  displayedColumns: string[] = ['position', 'machine_name', 'master_location', 'slave_location','action'];
  dataSource = new MatTableDataSource();
  tenant: any;
  result: any;
  myLoader = false;
  constructor(public dialog: MatDialog,private fb:FormBuilder,private nav:NavbarService,private service:FilepathService) {
    this.nav.show();
    this.tenant=localStorage.getItem('tenant_id')

   }
  openDialog(): void {
    const dialogRef = this.dialog.open(Popup, {
      width: '450px',
       data: { new: 'new' }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();

    });
  }
  filepath_edit(shift, id): void{

    const dialogRef = this.dialog.open(Edit, {
      width: '450px',
      data: { edit_shift: shift, shift_id: id }

    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();

    });
  }
  ngOnInit() {
    this.myLoader = true;
this.service.show_filepath(this.tenant).pipe(untilDestroyed(this)).subscribe(res =>{
  this.myLoader = false;
  this.result = res;
  this.dataSource = new MatTableDataSource(this.result);
})

  }
  filepath_delete(id){
    Swal.fire({
      title: 'Are you sure want to delete?',
      // type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'Please Confirm'
        }).then((destroy) => {
          if (destroy.value) {
            this.service.delete_row(id).pipe(untilDestroyed(this)).subscribe(res => {
              if(res === true)
              {
                Swal.fire("Deleted Succesfully !")
              }
              else{
                Swal.fire("Delete Succesfully")
              }
              this.ngOnInit()
            })
            this.ngOnInit()

          }
        })
      }
    })
    
  }
  ngOnDestroy(){

  }
}
@Component({
  selector: 'popup-page',
  templateUrl: 'popup.html',
  styleUrls: ['./filepath.component.scss']

})
export class Popup {
  login:FormGroup;
  http: any;
  machinesArray: any;
  tenant_id: string;
  headers: string;
  filepath_response:any;
  tenant: any;
  value:any;
  status:any
  hide: boolean = true;

  constructor(private service:FilepathService,public dialogRef: MatDialogRef<Popup>,@Inject(MAT_DIALOG_DATA) public data: Popup,private fb:FormBuilder, private filepath: FilepathService) {
  //  this.value = data;
    this.tenant=localStorage.getItem('tenant_id')
  
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {


  // if (this.value.new) {
  //     this.login = this.fb.group({
  //       ip: ["",Validators.required],
  //       user_name: ["",Validators.required],
  //       pass: ["",Validators.required],
  //       master_location: ["",Validators.required],
  //       slave_location: ["",Validators.required],
  //       machine_id:["",Validators.required]
  //     })
  //   } else {
  //     this.login = this.fb.group({
  //       ip: [this.value.edit_shift.ip,],
  //       user_name: [this.value.edit_shift.user_name,],
  //       pass: [this.value.edit_shift.pass,],
  //       master_location: [this.value.edit_shift.master_location,],
  //       slave_location: [this.value.edit_shift.slave_location,],
  //       machine_id:[this.value.edit_shift.machine.machine_name,]

  //     })
  //   }
  
  this.login = this.fb.group({
    ip:["",Validators.pattern],
    user_name:["",],
    pass:["",],
    master_location:["",],
    machine_id:["",]
  })
  this.filepath.tenant_id(this.tenant).pipe(untilDestroyed(this)).subscribe(res => {
      this.filepath_response=res;
     });

  //     this.service.machine(this.tenant).pipe(untilDestroyed(this)).subscribe(res =>{
  // })
  }
  onSelect(id: any) {
    throw new Error("Method not implemented.");
  }
  
  loginform() {

    let scotch ={
      "ip": this.login.value.ip,
      "user_name":this.login.value.user_name,
      "pass": this.login.value.pass,
      "machine_id": this.login.value.machine_id,
      "master_location":"/home/part_program",
      "slave_location":"/home/part_program"
    }
    this.filepath.popup(scotch).pipe(untilDestroyed(this)).subscribe(res => {
       Swal.fire(res['status'])
      
      this.dialogRef.close();
  })

    //if (this.value.new) {
      //this.myLoader = true;

      //this.filepath.popup(this.login.value).pipe(untilDestroyed(this)).subscribe(res => {
        //this.myLoader = false;

        //this.toast.success('Created Successfully')
        //this.dialogRef.close();
      //})
    //} else {
      
       
      //this.filepath.edit_filepath(this.value.shift_id,data).
      //pipe(untilDestroyed(t his)).subscribe( res => {
        //this.myLoader = false;

        //this.toast.success('Updated Successfully')
        //this.dialogRef.close();
      //})
    //}
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
    event.preventDefault();
    }
   }

   output(ipaddress)
   {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {  
      return (true)  
    }  
    alert("You have entered an invalid IP address!")  
    return (false)  
   }
   ngOnDestroy(){

  }
  
}



@Component({
  selector: 'edit-page',
  templateUrl: 'edit.html',
  styleUrls: ['./filepath.component.scss']

})
export class Edit {
  login:FormGroup;
  http: any;
  machinesArray: any;
  tenant_id: string;
  headers: string;
  tenant: any;
  value:any;
  status:any
  filepath_response: any;
  add_val: any;
  hide: boolean = true;

  constructor(private service:FilepathService,public dialogRef: MatDialogRef<Edit>,@Inject(MAT_DIALOG_DATA) public data: Edit,private fb:FormBuilder, private filepath: FilepathService) {
   this.value = data;
    this.tenant=localStorage.getItem('tenant_id')
  
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  output(ipaddress)
   {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {  
      return (true)  
    }  
    alert("You have entered an invalid IP address!")  
    return (false)  
   }
  ngOnInit() {


  this.login = this.fb.group({
    ip:[this.value.edit_shift.ip],
    user_name:[this.value.edit_shift.user_name],
    pass:[this.value.edit_shift.pass],
    master_location:["/home/part_program"],
    machine_id:[this.value.edit_shift.machine.id]
  })
  this.filepath.tenant_id(this.tenant).pipe(untilDestroyed(this)).subscribe(res => {
      this.filepath_response=res;
     });

      this.service.machine(this.tenant).pipe(untilDestroyed(this)).subscribe(res =>{
  })
  }
  onSelect(id: any) {
    throw new Error("Method not implemented.");
  }
  
  logintest() {

    this.add_val = this.login.value 
    this.add_val["slave_location"] =  "/home/part_program";
    this.filepath.edit(this.value.edit_shift.id,this.add_val).pipe(untilDestroyed(this)).subscribe(res => {
       Swal.fire("Updated Successfully!")
      
      this.dialogRef.close();
  })

    //if (this.value.new) {
      //this.myLoader = true;

      //this.filepath.popup(this.login.value).pipe(untilDestroyed(this)).subscribe(res => {
        //this.myLoader = false;

        //this.toast.success('Created Successfully')
        //this.dialogRef.close();
      //})
    //} else {
      
       
      //this.filepath.edit_filepath(this.value.shift_id,data).
      //pipe(untilDestroyed(t his)).subscribe( res => {
        //this.myLoader = false;

        //this.toast.success('Updated Successfully')
        //this.dialogRef.close();
      //})
    //}
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
    event.preventDefault();
    }
   }
   ngOnDestroy(){

  }
  
}


