import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'others'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100,150],
    
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }
  public colors: Color[]=[
    {
      backgroundColor:['#F0C04F','#FA6A37', '#E33DC2','#5C37FA']
    }
  ]



}
