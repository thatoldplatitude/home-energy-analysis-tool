export class NaturalGasBillingPeriodRecordInput {
    period_start_date:Date;
    period_end_date: Date;
    usage_therms: number;
    inclusion_override: boolean;

    constructor(period_start_date: Date,period_end_date: Date,usage_therms: number,inclusion_override: boolean) {
        this.period_start_date = period_start_date;
        this.period_end_date = period_end_date;
        this.usage_therms = usage_therms;
        this.inclusion_override = inclusion_override;
    }
}