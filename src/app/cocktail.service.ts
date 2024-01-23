import { Injectable } from "@angular/core";
import { Cocktail } from "./cocktail";

@Injectable({
    providedIn: 'root'
    })
    export class CocktailService {
        private cocktails: Cocktail[] = [
            {
                name:"ti punch",
                price: 8,
                img: 'https://www.shutterstock.com/fr/image-photo/ti-punch-alcoholic-cocktail-drink-white-2278786327'
            },
            {
                name: 'Mojito',
                price: 8.5,
                img: 'https://www.shutterstock.com/fr/image-photo/mojito-virgin-long-rum-drink-fresh-1911762766'
            }
        ];

        constructor(){}

        getCocktails(): Cocktail[] {
            return this.cocktails;
        }
    }