import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterModule } from 'src/app/store/counter.module';


@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css']
})
export class CounterdisplayComponent implements OnInit {
/**
 *
 */
constructor(private store :Store<{ counter : CounterModule }>) {


}
counterdisplay!:number;
ngOnInit():void{

    this.store.select('counter').subscribe(data=>{
      this.counterdisplay = data.counter;


    })

}

}
