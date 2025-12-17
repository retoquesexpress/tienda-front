import { HttpClient } from '@angular/common/http';
import { inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { IServicios } from '../Models/i-servicios';
import { ICategorias } from '../Models/i-categorias';

@Injectable({
  providedIn: 'root'
})
export class SFuncionalidades {

 private miUrl = 'http://localhost:8080/api/services';
 private micategoriaUrl = 'http://localhost:8080/api/categories';
 private miHttp= inject(HttpClient);

   
  getAllServices():Observable<IServicios[]> {
    return this.miHttp.get<IServicios[]>(this.miUrl);
  }
  getServiceById(id: string):Observable<IServicios> {
    return this.miHttp.get<IServicios>(this.miUrl+"/"+id);
  } 
  postService(service: IServicios):Observable<IServicios> {
    return this.miHttp.post<IServicios>(this.miUrl, service); 
  }
  deleteService(id:string) {
    return this.miHttp.delete<IServicios>(this.miUrl+"/"+id);
  }
  updateService(service: IServicios) {
    return this.miHttp.put(this.miUrl+"/"+service.id_service, service);
  }


  getAllCategories():Observable<ICategorias[]> {
    return this.miHttp.get<ICategorias[]>(this.micategoriaUrl);
  }  
  getCategoryById(id: string):Observable<ICategorias> {
    return this.miHttp.get<ICategorias>(this.micategoriaUrl+"/"+id);
  } 
  postCategory(category: ICategorias):Observable<ICategorias> {
    return this.miHttp.post<ICategorias>(this.micategoriaUrl, category); 
  }
  deleteCategory(id:string) {
    return this.miHttp.delete<ICategorias>(this.micategoriaUrl+"/"+id);
  }
  updateCategory(category: ICategorias) {
    return this.miHttp.put(this.micategoriaUrl+"/"+category.id_category, category);
  }

}
