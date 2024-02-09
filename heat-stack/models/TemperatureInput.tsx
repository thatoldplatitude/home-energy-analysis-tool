export class TemperatureInput {
    dates: Date[];
    temperatures: number[];

    constructor(dates: Date[],temperatures: number[]) {
        this.dates = dates;
        this.temperatures = temperatures;
    }

}