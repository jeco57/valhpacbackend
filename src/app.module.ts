import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsModule } from './products/products.module';
import { EmpmovtosModule } from './empmovtos/empmovtos.module';
import { EmpcatentproduccionModule } from './empcatentproduccion/empcatentproduccion.module';
import { EmpcattiposModule } from './empcattipos/empcattipos.module';
import { EmpcatproductosModule } from './empcatproductos/empcatproductos.module';
import { EmpcattamanosModule } from './empcattamanos/empcattamanos.module';
import { EmpcatclasificacionesModule } from './empcatclasificaciones/empcatclasificaciones.module';
import { EmpcatetiquetasModule } from './empcatetiquetas/empcatetiquetas.module';
import { EmpcatmovtosModule } from './empcatmovtos/empcatmovtos.module';
import { AuthModule } from './auth/auth.module';
import { FilesModule } from './files/files.module';
import { BasicReportsModule } from './basic-reports/basic-reports.module';
import { PrinterModule } from './printer/printer.module';


@Module({
  imports: [ 
    ConfigModule.forRoot(), 

    TypeOrmModule.forRoot(
      {
        type: "postgres",
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        database: process.env.DB_NAME,
        username: process.env.DB_USERNAME,  
        password: process.env.DB_PASSWORD,
        autoLoadEntities: true,
        synchronize: true,
        ssl: true,
      }
    ), ProductsModule, EmpmovtosModule,  EmpcatentproduccionModule, EmpcattiposModule, EmpcatproductosModule, EmpcattamanosModule, EmpcatclasificacionesModule, EmpcatetiquetasModule, EmpcatmovtosModule, AuthModule, FilesModule, BasicReportsModule, PrinterModule, 
  ],
})
export class AppModule {
  //  console.log(PORT);
}
