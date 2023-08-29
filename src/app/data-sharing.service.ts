import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataSharingService {
    private filteredPokemonListSubject = new BehaviorSubject<any[]>([]);

    constructor() {}

    setFilteredPokemonList(filteredPokemonList: any[]) {
        this.filteredPokemonListSubject.next(filteredPokemonList);
    }

    getFilteredPokemonList(): Observable<any[]> {
        return this.filteredPokemonListSubject.asObservable();
    }
}
