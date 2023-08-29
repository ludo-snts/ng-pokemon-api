import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon';
import { DataSharingService } from './data-sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  typeImages: { [key: string]: string } = {};
  selectedType: string | null = null;
  
  constructor(private pokemonService: PokemonService, private dataSharingService: DataSharingService) {}

  ngOnInit() {
    this.loadPokemonList();
    this.typeImages = this.pokemonService.getTypeImages();
    this.dataSharingService.getFilteredPokemonList().subscribe(filteredPokemonList => {
      this.pokemonList = filteredPokemonList;
    });
  }

  loadPokemonList() {
    this.pokemonService.getPokemonList().subscribe(
      (data) => {
        this.pokemonList = data;
      },
      (error) => {
        console.error('Error fetching Pokemon list:', error);
      }
    );
  }

  get pokemonListFilteredByType() {
    if (!this.selectedType) {
      console.log('No type selected');
      return this.pokemonList;
    }
    return this.pokemonList.filter(pokemon => {
      console.log('Filtering by type:', this.selectedType);
      return pokemon.apiTypes.some(type => type.name === this.selectedType);
    });
  }
}
