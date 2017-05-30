//The HeroService could get Hero data from anywhere—a web service, local storage, or a mock data source.
import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService{
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
}