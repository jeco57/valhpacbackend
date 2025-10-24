import { Injectable } from '@nestjs/common';
import PdfPrinter from 'pdfmake';
import type { BufferOptions, TDocumentDefinitions } from 'pdfmake/interfaces';

var font = {
        Roboto: {
            normal: 'fonts/Roboto-Regular.ttf',
            bold: '/fonts/Roboto-Medium.ttf',
            italics: '/fonts/Roboto-Italic.ttf',
            bolditalics: '/fonts/Roboto-MediumItalic.ttf'
        }
    };



@Injectable()
export class PrinterService {

    private printer = new PdfPrinter(font);


    createPdf(
        docdefinition: TDocumentDefinitions,
        options: BufferOptions = {}
    ): PDFKit.PDFDocument {

        return this.printer.createPdfKitDocument(docdefinition,options)
    }

}
