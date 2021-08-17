import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  constructor(private graficasService:GraficasService) { }
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [
   // [350, 450, 100,150],
    
  ];
  public doughnutChartType: ChartType = 'doughnut';
  ngOnInit(): void {
    /*this.graficasService.getUsuarioRedes().subscribe(data =>{
      const labels = Object.keys(data);
      const values = Object.values(data); 
      this.doughnutChartData.push(values);
      this.doughnutChartLabels = labels; 
      
    });*/
    this.graficasService.getDonasData().subscribe(({labels, values})=>{
      this.doughnutChartData.push(values); 
      console.log(labels)
      this.doughnutChartLabels=labels; 
    });


  }
  public colors: Color[]=[
    {
      backgroundColor:['#F0C04F','#FA6A37', '#E33DC2','#5C37FA','#35B9F0']
    }
  ]


}
