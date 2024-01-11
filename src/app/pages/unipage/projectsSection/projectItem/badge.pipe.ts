import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appBadge',
  standalone: true,
})
export class BadgePipe implements PipeTransform {

  transform(value: string): string {
    let badge = '';
    switch (value) {
      case 'angular':
        badge = 'bg-red-600';
        break;
      case 'firebase':
        badge = 'bg-yellow-600';
        break;
      case 'react':
        badge = 'bg-blue-600';
        break;
      case 'nodejs':
        badge = 'bg-green-600';
        break;
      default:
        badge = 'badge-primary';
        break;
    }
    return badge;
  }

}
