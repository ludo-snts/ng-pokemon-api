import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-pokemon-types',
  templateUrl: './pokemon-types.component.html'
})
export class PokemonTypesComponent implements OnInit {
  types: any[] = [];
  typeImages: { [key: string]: string } = {};
  selectedType: string = ''; // Déclarez la propriété selectedType et initialisez-la avec une chaîne vide

  constructor(private pokemonService: PokemonService, private dataSharingService: DataSharingService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonTypes().subscribe({
      next: (data) => {
        this.types = data;
        this.typeImages = this.pokemonService.getTypeImages();
      },
      error: (error) => {
        console.error('Error fetching types:', error);
      }
    });
  }

  filterPokemonByType(type: string) {
    this.pokemonService.getPokemonListByType(type).subscribe(
      (data) => {
        this.dataSharingService.setFilteredPokemonList(data); // Mettez à jour la liste filtrée
      },
      (error) => {
        console.error('Error fetching Pokemon list by type:', error);
      }
    );
  }

  resetFilters() {
    this.selectedType = ''; // Réinitialiser le type sélectionné
    // Rechargez la liste complète de Pokémon
    this.pokemonService.getPokemonList().subscribe(
      (data) => {
        this.dataSharingService.setFilteredPokemonList(data);
      },
      (error) => {
        console.error('Error fetching Pokemon list:', error);
      }
    );
  }
}
