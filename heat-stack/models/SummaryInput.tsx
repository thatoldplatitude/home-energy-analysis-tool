type FuelType = "GAS" | "OIL" | "PROPANE";

export class SummaryInput {
    living_area: number;
    fuel_type: FuelType;
    heating_system_efficiency: number;
    thermostat_set_point: number;
    setback_temperature: number | null;
    setback_hours_per_day: number | null;
    design_temperature: number;
    
    constructor(living_area: number, fuel_type: FuelType, heating_system_efficiency: number, thermostat_set_point: number, setback_temperature: number | null, setback_hours_per_day: number | null, design_temperature: number){
        this.living_area = living_area
        this.fuel_type = fuel_type
        this.heating_system_efficiency = heating_system_efficiency
        this.thermostat_set_point = thermostat_set_point
        this.setback_temperature = setback_temperature
        this.setback_hours_per_day = setback_hours_per_day
        this.design_temperature = design_temperature
    }

}