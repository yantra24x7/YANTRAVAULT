import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NavbarService} from '../../Nav/navbar.service';
import { BackupService} from '../../Service/app/backup.service';
import { MatTableDataSource } from '@angular/material';
import Swal from 'sweetalert2';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { saveAs } from 'file-saver';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.scss']
})
export class BackupComponent implements OnInit {
  test:FormGroup;
  machine_response: any;
  tenant: any;
  reason_response: any;
  backup: any;
  machine_id:any;
  myLoader = false;
  user:any;
  
  constructor(public dialog: MatDialog,private fb :FormBuilder,private nav:NavbarService,private service :BackupService) { 
    this.tenant=localStorage.getItem('tenant_id')
    this.user = localStorage.getItem('user_id')

    this.nav.show();
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','action'];
  dataSource = new MatTableDataSource();
  openDialog(machine): void {
    const dialogRef = this.dialog.open(Backup, {
      width: '250px',
      data: { edit_shift: machine}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  ngOnInit() {
  
    this.service.machine( this.tenant).pipe(untilDestroyed(this)).subscribe(res => {
      this.machine_response=res;
      // this.service.filelist( this.machine_response.id).subscribe(res =>{
        this.machine_id = this.machine_response[0].id;
        this.getmachine(this.machine_response[0].id)
      });
   
  }
  
  getmachine(id) {
    this.myLoader = true;
     this.service.display_reason(id).pipe(untilDestroyed(this)).subscribe(res =>{
      this.myLoader = false;

      this.backup=res.backup_location;
      // this.dataSource=new MatTableDataSource(this.backup)
     
      if (res['status'] != null) {
        Swal.fire(res['status'])
      }
    })  
  }
  new_download(name,position){

    let scotch ={
      "id": this.machine_id,
      "file_name":name,
      "user_id": this.user,
      "position": position
    }

    this.service.downloaded(scotch).pipe(untilDestroyed(this)).subscribe(res =>{
      var file = new Blob([res], {
        type: 'text/json;charset=utf-8'
      });
   
      var data = "text/json;charset=utf-8," + encodeURIComponent(data);
     saveAs(file, scotch.file_name );
         
       
       })
     }
   


 
  ngOnDestroy(){

  }
}
@Component({
  selector: 'backup-page',
  templateUrl: 'backup.html',
})
export class Backup {
  test:FormGroup;
  machine_response:any;
  baclog:any;
  tenant: any;
  user_id:any;
  add_val:any;
  file2:any;
  machine_id:any;
  value:any;
  status:any;
  constructor(private http: HttpClient,public dialogRef: MatDialogRef<Backup>,@Inject(MAT_DIALOG_DATA) public data: string,private fb:FormBuilder,private service :BackupService) {
     this.tenant = localStorage.getItem('tenant_id')  
     this.user_id = localStorage.getItem('user_id')
     this.value = data;
  
  }

  fileUpload1(event){
    this.file2 = event.target.files[0];
   
    
}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {

    this.test=this.fb.group ({
      machine_id:[this.value.edit_shift],
      reason:[""],

    })

    this.service.machine_lock( this.tenant).pipe(untilDestroyed(this)).subscribe(res => {
      this.machine_response=res;
      
    });
  }
  testform(val)
  { 
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("token")
      })
    }  
    this.add_val = val ;
    this.add_val = this.value.edit_shift;

    var fd = new FormData();
    fd.append('machine_id', this.test.value.machine_id);
    fd.append('reason', this.test.value.reason);
    fd.append('user_id',  this.user_id);
    fd.append('file', this.file2);
   
      this.http.post("http://192.168.0.237:3000/api/v1/backup_upload",fd, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).subscribe(res =>{
      if (res['status'] != null) {
        Swal.fire(res['status'])
      }
      this.dialogRef.close();
    
  })
}

  
   ngOnDestroy(){

  }
}
