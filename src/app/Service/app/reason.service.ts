import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../../environments/environment';
import { TokenService } from '../core/authentication/token.service';
@Injectable({
  providedIn: 'root'
})
export class ReasonService {

  constructor(private token:TokenService,private http:HttpClient) { }

  tenantId = this.token.getTenantID();
    
  tenant_id(tenantId):Observable<any> {
    return this.http.get('machines?tenant_id='+tenantId)
  }
  display_reason(id,search):Observable<any>{
    return this.http.get('code_compare_reasons?id='+id + '&&search=' + search)
  }

  display_freason(searchText,machine_id):Observable<any>{
    return this.http.get('code_compare_reasons?id='+machine_id + '&&search=' + searchText)
  }
}
// /code_compare_reasons?id=1&search=mani fake
// 'wifi_config?user_name='+data + '&&password=' + data1