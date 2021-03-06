import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

//en el video sale sin el resp: any y por eso te mandarĂ¡ error
  getUsers() {
    return this.http.get(`${this.url}/users?per_page=20`)
      .pipe(
        map((resp: any) => resp['data'])
      );

  }

}