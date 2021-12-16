import { Component, OnInit } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
//navservice
import { NavbarService} from '../../Nav/navbar.service';
import { ReasonService} from '../../Service/app/reason.service';
import { MatTableDataSource } from '@angular/material';
@Component({ 
  selector: 'app-reason',
  templateUrl: './reason.component.html',
  styleUrls: ['./reason.component.scss']
})
export class ReasonComponent implements OnInit {

  displayedColumns: string[] = ['position', 'user_name', 'date', 'machine_name', 'description','old_revision_no','new_revision_no','file_name'];
  dataSource = new MatTableDataSource();
  myLoader = false;

  tenant: any;
  reason_response: any;
  reason: any;
  machine_id:any;
  searchText :any =[];
  constructor(private nav:NavbarService,private service:ReasonService) {
    this.nav.show();
    this.tenant=localStorage.getItem('tenant_id')

   }

  ngOnInit() {
    this.myLoader = true;

    this.service.tenant_id(this.tenant).pipe(untilDestroyed(this)).subscribe(res => {
      this.reason_response=res;
      this.machine_id = this.reason_response[0].id;
      localStorage.setItem('search_id',this.machine_id);
      this.service.display_reason(this.machine_id,this.searchText).pipe(untilDestroyed(this)).subscribe(res =>{
        console.log(this.machine_id,this.search)
        this.reason=res;
        this.dataSource=new MatTableDataSource(this.reason)
        this.myLoader = false;

      })  
    }); 
  }

  code_compare(id) {
    this.myLoader = true;

    this.service.display_reason(id,this.searchText).pipe(untilDestroyed(this)).subscribe(res =>{
      this.reason=res;    
      this.myLoader = false;

      this.dataSource=new MatTableDataSource(this.reason)
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
      this.dataSource=new MatTableDataSource(this.reason)
    })  
  }
}

  ngOnDestroy(){

  }
}
