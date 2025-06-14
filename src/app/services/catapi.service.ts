import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Breed } from '../models/breed';

@Injectable({
  providedIn: 'root'
})
export class CatapiService {

  private rutaServicio = 'https://api.thecatapi.com/v1/breeds';

  constructor(private httClient: HttpClient) { }

  listado() {
    return this.httClient.get( this.rutaServicio + '?limit=10' ).pipe( map( res => res as Breed[] ) );
  }

  buscar(nombre: string) {
    return this.httClient.get( this.rutaServicio + `/search?q=${nombre}&attach_image=1` ).pipe( map( res => res as Breed[] ) );
  }
}
