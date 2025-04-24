export function dateFormatter(startDate: Date, enddate: Date): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
    const initFormattered = new Intl.DateTimeFormat('es-EC', options).format(startDate);
    const endFormattered = new Intl.DateTimeFormat('es-EC', options).format(enddate);
  
    return `${initFormattered} - ${endFormattered}`;
  }