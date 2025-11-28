import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalServices implements OnInit{

    ngOnInit(){ }
    httpOptions:any;
    constructor(private http:HttpClient){ }

    getAllPlantsList(){
        return this.http.get('http://localhost:8081/getTestData',this.httpOptions).pipe( 
            map (
                (data)=>{return data;}
            )
        );
      }

}