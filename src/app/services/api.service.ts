import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl:string = environment.apiUrl;

  constructor(private http: HttpClient) { }

 
  getApi(){
    return new Promise((resolve, rejects) => {
      return this.http.get(this.baseUrl).subscribe((res) => {
        resolve(res);
      }, (err) => {
        rejects(err);
      })
    }) 
  }

  postApi(path:any, data:any){
    return new Promise((resolve, rejects) => {
      return this.http.post(this.baseUrl+path, data).subscribe((res) => {
        resolve(res);
      }, (err) => {
        rejects(err);
      })
    }) 
  }

  postApiforChild1(id:any, data:any){
    return new Promise((resolve, rejects) => {
      return this.http.post(this.baseUrl+id+"/children", data).subscribe((res) => {
         resolve(res);
      }, (err) => {
         rejects(err);
      })
    })
  }

  deleteApi(id:any){
    return new Promise((resolve, rejects) => {
      return this.http.delete(this.baseUrl+id).subscribe((res) => {
        resolve(res);
      }, (err) => {
        rejects(err);
      })
    }) 
  }

  updateApi(path:any, data:any){
    return new Promise((resolve, rejects) => {
      return this.http.patch(this.baseUrl+path, data).subscribe((res) => {
        resolve(res);
      }, (err) => {
        rejects(err);
      })
    }) 
  }

  getApiById(id:any){
    return new Promise((resolve, rejects) => {
      return this.http.get(this.baseUrl+id).subscribe((res) => {
        resolve(res);
      }, (err) => {
        rejects(err);
      })
    }) 
  }

}
