import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  id: string;
  anio: number = new Date().getFullYear();
  numeroMes: number = new Date().getMonth();
  mes: string;
  meses = ['January', 'February', 'March', 'April', 'May' , 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  constructor( private route: ActivatedRoute,
               public productoService: ProductosService ) { }

  ngOnInit() {
    this.route.params
    .subscribe(parametros => {
      // console.log(parametros.id);

      this.productoService.getProducto(parametros.id)
        .subscribe( (producto: ProductoDescripcion) => {
            this.id = parametros.id;
            this.producto = producto;
            // console.log(producto);
            this.mes = this.meses[this.numeroMes];
        });

    });
  }

}
