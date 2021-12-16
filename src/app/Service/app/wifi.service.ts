import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../../environments/environment';
import { TokenService } from '../core/authentication/token.service';
@Injectable({
  providedIn: 'root'
})
export class WifiService {

  constructor(private http:HttpClient,private token:TokenService) { }
  // url = environment.serverUrl;

  tenantId = this.token.getTenantID();

  scan():Observable<any> {
    return this.http.get('wifi_name_list')
  }

  submit(data,data1):Observable<any>{
    return this.http.get('wifi_config?user_name='+data + '&&password=' + data1)
  }
}
