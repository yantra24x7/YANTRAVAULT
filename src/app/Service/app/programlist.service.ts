import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../../environments/environment';
import { TokenService } from '../core/authentication/token.service';
@Injectable({
  providedIn: 'root'
})
export class  ProgramListService {
 
  constructor(private token:TokenService,private http:HttpClient) { }
  tenantId = this.token.getTenantID();


  machine(tenantId):Observable<any>{
    return this.http.get('machines?tenant_id='+tenantId)
  }
  tenant_id(tenantId):Observable<any>{
    return this.http.get('machines?tenant_id='+tenantId)
  }
  file_upload(value):Observable<any>{ 
    return this.http.post('file_upload',value,)
  }
 
  display_reason(id):Observable<any>{
    return this.http.get('file_list?id='+id)
  } 
  cnc_upload(demo,test):Observable<any>{
    return this.http.get('file_send_to_cnc?file_name='+demo + '&&machine_id=' + test)
  }
  cnc_receive(val,ue):Observable<any>{
    return this.http.get('file_receive_from_cnc?file_name='+val + '&&machine_id=' + ue)
  }
  delete(val):Observable<any>{ 
    
     return this.http.post('file_delete',val)
  }
  download(value):Observable<Blob>{
    return this.http.post('file_download',value,{responseType: 'blob'})
  }

  downloaded(slave):Observable<Blob>{
    return this.http.post('file_download',slave,{responseType: 'blob'})
  }
}

// post_file(relativeUrlPath: string, body: any, params?: object): Observable<Blob> {
//   return this.http.post(relativeUrlPath, body, {responseType: 'blob'});
//   }
