import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {

  termino: string = 'Hola Capital';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private PaisService: PaisService){}

  buscar( termino: string){
    this.hayError = false;
    this.termino = termino;

    this.PaisService.buscarCapital( this.termino )
      .subscribe( (paises) => {
        console.log(paises);
        this.paises = paises;


      },(err) => {
        this.hayError = true;
        this.paises = [];
      }); 
  }
}
