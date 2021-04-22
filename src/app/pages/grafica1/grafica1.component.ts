import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = ['Pan', 'Refresco', 'Tacos'];

  public data1 = [
    [10, 15, 40]
  ];


  public labels2: string[] = ['Pan', 'Refresco', 'Carne'];

  public data2 = [
    [30, 20, 40]
  ];
}
