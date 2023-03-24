import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent {

  pais!: Country;

  constructor( 
    private activateRoute: ActivatedRoute,
    private PaisService: PaisService
    ) { }

  ngOnInit(): void {
    
    this.activateRoute.params
      .pipe(
        switchMap( ({ id }) => this.PaisService.getPaisPorAlpha( id ) ),
        tap( console.log )
      )
      .subscribe( pais => this.pais = pais );


    // this.activateRoute.params
    //   .subscribe( ({ id }) => {
    //     console.log( id );

    //     this.PaisService.getPaisPorAlpha( id )
    //       .subscribe( pais => {
    //         console.log(pais);
    //       });
    //   });

  }

}
