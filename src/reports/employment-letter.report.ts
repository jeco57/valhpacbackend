import type { TDocumentDefinitions } from "pdfmake/interfaces";

interface ReportOptions {
    name: String;    
}

export const getEmploymentLetterReport = (options: ReportOptions) :TDocumentDefinitions => {

    const { name } = options;

    const docDefinition: TDocumentDefinitions= {
      content: [`CONSTANCIA DE EMPLEO`],
    };

    return docDefinition;
}