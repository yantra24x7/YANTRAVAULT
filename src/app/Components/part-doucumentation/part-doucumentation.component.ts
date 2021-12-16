import { Component, OnInit,Inject,ViewEncapsulation} from '@angular/core';
import { NavbarService} from '../../Nav/navbar.service';
import { PartService} from '../../Service/app/part.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorHandler} from "@angular/core";


import Swal from 'sweetalert2'
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-part-doucumentation',
  templateUrl: './part-doucumentation.component.html',
  styleUrls: ['./part-doucumentation.component.scss']
})
export class PartDoucumentationComponent implements OnInit {
  tenant:any;
  display_reason:any; 
  reason:any;
  reason_response:any;
  machine_id:any;
  searchText :any =[];
  data1: any;
  myLoader = false;
  headers = new HttpHeaders();
  constructor(private http: HttpClient,public dialog: MatDialog,private nav:NavbarService,private service:PartService) {
    this.nav.show();
    this.tenant=localStorage.getItem('tenant_id')


   }


   openDialog(id): void {
    const dialogRef = this.dialog.open(Dialog, {
      width: '250px',
      data: {id: id,}

    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();

    });
  }


  openDialog6(id,filename): void {
    // console.log(id)

    const dialogRef = this.dialog.open(Backup, {
      width: '250px',
      data: {id: id,file_name:filename}

    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  openDialog2(id,cname,jname): void {
    const dialogRef = this.dialog.open(Delete, {
      width: '250px',
      data: {id: id,cuname:cname,joname:jname }

    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();

    });
  }


   ngOnInit() {
    this.myLoader = true;

    this.service.tenant_id(this.tenant).pipe(untilDestroyed(this)).subscribe(res => {
      this.reason_response=res;

      this.machine_id = this.reason_response[0].id;
      localStorage.setItem('search_idm',this.machine_id);

      this.service.display_reason(this.machine_id,this.searchText).pipe(untilDestroyed(this)).subscribe(res =>{
        console.log(this.machine_id,this.searchText)

        this.reason=res;
        this.myLoader = false;


      })  
    });
  }

 

  code_compare(id) {
    this.myLoader = true;

    this.service.display_reason(id,this.searchText).pipe(untilDestroyed(this)).subscribe(res =>{
      this.reason=res;
      this.myLoader = false;

    
    })  
  }

  search(value?){

    if(value.length>= 3){
      this.searchText = value;
      console.log(this.searchText)
      this.myLoader = true;
  
      this.service.display_freason(this.searchText,this.machine_id).pipe(untilDestroyed(this)).subscribe(res =>{
        this.myLoader = false;
  
        this.reason=res;
      })  
    }
  }

  new_download(id,cn,jn){
    console.log(id);

    // let scotch ={
    //     "id": id,
        // "file_name": idest,
        // "user_id": this.user,
        // "position": val
      // }

      // http://192.168.0.237:4000/api/v1/part_doc_download?id=1
      this.myLoader = true;

      this.service.download(id).pipe(untilDestroyed(this)).subscribe(res =>{
        this.myLoader = false;

   var file = new Blob([res], 
    { type: 'application/pdf' }
     );
  
     var data = "text/json;charset=utf-8," + encodeURIComponent(data);
    saveAs(file, id);
        
      
      })
    }
  

  ngOnDestroy(){

  
 
}

}


@Component({
  selector: 'dialog-page',
  templateUrl: 'dialog.html',
})
export class Dialog {
  file2:any;
  machine_id:any;
  value:any;
  name:any;
  myLoader = false;
  headers = new HttpHeaders();
  constructor(private http:HttpClient,public dialogRef: MatDialogRef<Dialog>,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.machine_id = localStorage.getItem('machine_id')
    this.value = data;
    console.log(this.value.id)
  }

  fileUpload1(event){
    this.file2 = event.target.files[0];
   
    
}
save(){
console.log(this.file2)

let headers = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + localStorage.getItem("token")
  })
}  



var fd = new FormData();

fd.append('id', this.value.id);
    fd.append('file',this.file2);
    console.log(fd)

      this.http.post("http://192.168.0.237:3000/api/v1/part_doc_upload",fd, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).subscribe(res =>{
        if (res['status'] != null) {
          Swal.fire(res['status'])
        }
        this.dialogRef.close();

      
})
  


}
onNoClick(): void {
  this.dialogRef.close();
}


 
  ngOnInit()
  {}
  
 
  ngOnDestroy(){

  
 
  }

}
@Component({
  selector: 'delete-page',
  templateUrl: 'delete.html',
})
export class Delete {
  login:FormGroup;
  value:any;
  myLoader = false;
  constructor(private http: HttpClient,private fb:FormBuilder,private service:PartService,public dialogRef: MatDialogRef<Delete>,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.value = data;
    console.log(this.value)
    }

 
  ngOnInit(){
    this.login = this.fb.group({
      
      // id:[this.value.id],
      customer_name:[this.value.cuname],
      job_name:[this.value.joname],
    })
  }

logintest(){
  console.log(this.login.value)

  let scotch ={
    "id": this.value.id,
    "customer_name": this.login.value.customer_name,
    "job_name": this.login.value.job_name,
  }
  console.log(scotch);

  this.myLoader = true;

    this.service.option_edit(scotch).pipe(untilDestroyed(this)).subscribe(res =>{
        Swal.fire("Updated Successfully")
        this.myLoader = false;

      
      this.dialogRef.close();

  })}


onNoClick(): void {
  this.dialogRef.close();
}

ngOnDestroy(){

  
 
}

}

@Component({
  selector: 'backup-page',
  templateUrl: 'backup.html',
  styleUrls: ['./part-doucumentation.component.scss']


})
export class Backup {
  value:any;
  myLoader = false;
  version:any;
  constructor(private http: HttpClient,public dialogRef: MatDialogRef<Backup>,@Inject(MAT_DIALOG_DATA)  public data: any,private fb:FormBuilder,private service :PartService) {
    this.value = data;
    console.log(this.value)
    this.service.reason(this.value.id,this.value.file_name).subscribe(res =>{
      console.log(res);
      this.version = res;
    })
  }



  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {

   

    
  }
  

  
   
}
