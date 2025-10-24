import { Injectable } from '@nestjs/common';
import { PrinterService } from '../printer/printer.service';
import { getEmploymentLetterReport, getHelloWorldReport } from '../reports';


@Injectable()
export class BasicReportsService {
    constructor(private readonly printerService : PrinterService,){        
    }

   hello() {
    const docDefinition = getHelloWorldReport({
        name: 'Jesus Osuna',
    });

	const doc = this.printerService.createPdf(docDefinition);

    return doc;
   } 


   employmentletter() {
    const docDefinition = getEmploymentLetterReport({
        name: 'Employment Jesus',
    });

	const doc = this.printerService.createPdf(docDefinition);

    return doc;
   } 
}
