import { Injectable } from '@angular/core';
import { Hero  } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
//	getHeroes(): void {} //stub  from anywhere—a web service, local storage, or a mock data source
	getHeroes(): Promise<Hero[]> {
	  return Promise.resolve(HEROES);
	}

	getHeroesSlowly(): Promise<Hero[]> {
  	return new Promise(resolve => {
    // Simulate server latency with 2 second delay
    setTimeout(() => resolve(this.getHeroes()), 2000);
  });
}
}