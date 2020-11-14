import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "summary"
})
/**
 * https://angular.io/api/core/PipeTransform
 */
export class SummaryPipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        if(!value) {
            return null;
        }

        let limit: number = args[0];
        let actualLimit: number = (limit) ? limit : 10;
        return value.substr(0, actualLimit);
    }
}