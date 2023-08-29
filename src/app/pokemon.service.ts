import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokebuildapi.fr/api/v1';

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<any[]> {
    const url = `${this.apiUrl}/pokemon`;
    return this.http.get<any[]>(url);
  }

  getPokemonTypes(): Observable<any[]> {
    const url = `${this.apiUrl}/types`;
    return this.http.get<any[]>(url);
  }

  getPokemonListByType(type: string): Observable<any[]> {
    const url = `${this.apiUrl}/pokemon/type/${type}`;
    return this.http.get<any[]>(url);
  }

  typeImages = {
    "Acier": "./assets/images/types/acier.png",
    "Combat": "./assets/images/types/combat.png",
    "Dragon": "./assets/images/types/dragon.png",
    "Eau": "./assets/images/types/eau.png",
    "Électrik": "./assets/images/types/electrik.png",
    "Fée": "./assets/images/types/fee.png",
    "Feu": "./assets/images/types/feu.png",
    "Glace": "./assets/images/types/glace.png",
    "Insecte": "./assets/images/types/insecte.png",
    "Normal": "./assets/images/types/normal.png",
    "Plante": "./assets/images/types/plante.png",
    "Poison": "./assets/images/types/poison.png",
    "Psy": "./assets/images/types/psy.png",
    "Roche": "./assets/images/types/roche.png",
    "Sol": "./assets/images/types/sol.png",
    "Spectre": "./assets/images/types/spectre.png",
    "Ténèbres": "./assets/images/types/tenebres.png",
    "Vol": "./assets/images/types/vol.png"
  };

  getTypeImages(): { [key: string]: string } {
    return this.typeImages;
  }
}
