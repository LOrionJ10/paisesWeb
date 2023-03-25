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
        this.onDebouncer.emit( valor );
      });
  }

  buscar(){
    this.onEnter.emit( this.termino );
  }

  teclaPresionada() {
    this.dobouncer.next( this.termino  );
    
    
    
    
    // const valor = event.target.value;
    // console.log( valor );

    // console.log(this.termino);
  }

}
