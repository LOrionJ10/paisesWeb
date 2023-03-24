import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit{

  @Output() onEnter     : EventEmitter<string> = new EventEmitter();
  @Output() onDebouncer : EventEmitter<string> = new EventEmitter();

  @Input() placeholder  : string = '';

  dobouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit() {
    this.dobouncer
      .pipe(debounceTime(300))
      .subscribe( valor => {
        console.log('debouncer:', valor);
      });
  }

  buscar(){
    this.onEnter.emit( this.termino );
  }

  teclaPresionada( event: any ) {
    
    this.dobouncer.next( this.termino  );
    
    
    
    
    // const valor = event.target.value;
    // console.log( valor );

    // console.log(this.termino);
  }

}
