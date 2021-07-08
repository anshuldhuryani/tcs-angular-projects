import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'greeting'
})

export class GreetingPipe implements PipeTransform {

    public transform(value: string, value1: string) {
        if (value1 == undefined) {
            return "Hello " + value + "!!";
        } else {
            return "Hello " + value + ' ' + value1 + "!!";
        }
    }
}