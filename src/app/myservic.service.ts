import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class MyservicService {
  test:any;
  headers=new HttpHeaders();
  moockdata='http://localhost:1264/api/workflowfloorplan/ilcworkflowfloorplan';
 // update_value='http://localhost:1264/api/workflowfloorplan/updatevalues?text=';
  constructor(private http:HttpClient) { }
  getvalue()
  {
    return this.http.get(this.moockdata);
  }
  updatevalue(test)
    {
      this.headers.append("Content-Type","application/json");
      return this.http.post(`http://localhost:1264/api/workflowfloorplan/updatevalues?text=${test}`,null);
    }
}
