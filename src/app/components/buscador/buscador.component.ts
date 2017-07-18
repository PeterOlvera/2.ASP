import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';

import {HeroesService, Heroe} from '../../services/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[];

  constructor( private activatedRoute:ActivatedRoute,
                private _heroesService:HeroesService,
                private router:Router) {
    this.activatedRoute.params.subscribe( params =>{
      this.heroes = this._heroesService.buscaHeroe( params.id);
    });
  }

  ngOnInit() {

  }
  verHeroe( index:number ){
    this.router.navigate( ['/heroe',index] );
    console.log(index);
  }

}
