import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../../environments/environment';
import { TokenService } from '../core/authentication/token.service';
@Injectable({
  providedIn: 'root'
})
export class PartService {
  token1: string;

  constructor(private token:TokenService,private http:HttpClient) {
    this.token1 = localStorage.getItem('token');
    let headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token1}`
    });
   }


  tenantId = this.token.getTenantID();

  tenant_id(tenantId):Observable<any> {
    return this.http.get('machines?tenant_id='+tenantId)
  }
  display_reason(id,search):Observable<any>{
    return this.http.get('part_doc_index?id='+id + '&&search=' + search)
  }

  display_freason(searchText,machine_id):Observable<any>{
    return this.http.get('part_doc_index?id='+machine_id + '&&search=' + searchText)
  }
  file_upload(val):Observable<any>{
    return this.http.post('part_doc_upload',val)
  } 
  option_edit(scotch)
  {

    return this.http.post('part_doc_edit',scotch)
  }

  download(value):Observable<Blob>{
    return this.http.get('part_doc_download?id='+ value,{responseType: 'blob'})
  }

  reason(id,value):Observable<any>{
    return this.http.get('version_his?id='+ id + '&&file_name=' +value)
  }
}
// http://192.168.0.237:4000/api/v1/version_his?id=1&file_name=O0001

// return this.http.get('wifi_config?user_name='+data + '&&password=' + data1)
