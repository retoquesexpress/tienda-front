import { HttpClient } from '@angular/common/http';
import { inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { IServicios } from '../Models/i-servicios';

@Injectable({
  providedIn: 'root'
})
export class SFuncionalidades {

 private miUrl = 'http://localhost:3000/services';
 private miHttp= inject(HttpClient);

   
  getAllServices():Observable<IServicios[]> {
    return this.miHttp.get<IServicios[]>(this.miUrl);
  }
  getServiceById(id: string):Observable<IServicios> {
    return this.miHttp.get<IServicios>(this.miUrl+"/"+id);
  }
  //COMPROBAR SI ES CON SERVICES O CATEGORYSERVICE
  // getServiceByCategoria(categoria: string):Observable<IServicios[]> {
  //   return this.miHttp.get<IServicios[]>(this.miUrl+"/?categoria="+categoria);
  // }
 
  postService(service: IServicios):Observable<IServicios> {
    return this.miHttp.post<IServicios>(this.miUrl, service);
  }
  deleteService(id:string) {
    return this.miHttp.delete(this.miUrl+"/"+id);
  }
  putService(service: IServicios) {
    return this.miHttp.put(this.miUrl+"/"+service.id, service);
  }
 }
