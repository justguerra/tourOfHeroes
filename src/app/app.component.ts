import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

	constructor(private heroService: HeroService) { }


  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

 ngOnInit(): void {
    this.getHeroes();
  }


 getHeroes(): void {
    //this.heroes = this.heroService.getHeroes(); without promisses
	this.heroService.getHeroes().then(heroes => this.heroes = heroes);  // Test GetHeroesSlowly

  }

};

