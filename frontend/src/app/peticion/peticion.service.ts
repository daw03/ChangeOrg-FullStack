import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Peticion } from './peticion';

@Injectable({
  providedIn: 'root',
})
export class PeticionService {
  constructor(private http: HttpClient) {}
  // Create peticion
  create(peticion: Peticion): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/peticiones', peticion);
  }

  // Mostrar todas las peticiones (sin parámetros)
  index(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/peticiones');
  }

  /*
    //Edit peticion
    edit(peticion: Peticion): Observable<any> {
      return this.http.post('http://127.0.0.1:8000/api/edit', peticion);
    }
  */
}
