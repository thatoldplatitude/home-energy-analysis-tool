import type {
  ActionFunctionArgs,
} from "@remix-run/node";
import { redirect } from "@remix-run/node"
import  PyodideUtil  from "../utils/pyodide.util.js";
import { SummaryInput } from "#models/SummaryInput.tsx";
import GeocodeUtil from "../utils/GeocodeUtil.js";
import WeatherUtil from "../utils/WeatherUtil.js";
import { TemperatureInput } from "#models/TemperatureInput.tsx";

var SI: SummaryInput;

const PU = PyodideUtil.getInstance();
const PM = await PU.getPyodideModule();
const GU = new GeocodeUtil();
const WU = new WeatherUtil();

export async function action({
	request
}: ActionFunctionArgs) {
	const formData = await request.formData()

	formData.forEach(d => console.log(d));
	let a = formData.get("address");
	let c = formData.get("city");
	let s = formData.get("state");
	let { x, y } = await GU.getLL(a,c,s);

	let { SI, TIWD, BI } = await genny(x,y,"2024-01-01","2024-01-03");

	
	

	PU.runit(SI,null,TIWD,JSON.stringify(BI));

	return redirect("/inputs1")
}

/**
 * 
 * @param longitude 
 * @param latitude 
 * @param start_date 
 * @param end_date 
 * @returns {SI,TIWD,BI} Summary input: hardcoded data.TIWD: TemperatureInput: WeatherData from calling open meto API
 * Billing input: hardcoded data
 * 
 * Function just to generate test data. inputs come from the values entered in from HomeInformation component
 */
async function genny(longitude: number, latitude: number, start_date: string, end_date: string) {
	SI = new SummaryInput(6666,"GAS",80,67,null,null,60);


	// const TIWD: TemperatureInput = await WU.getThatWeathaData(longitude, latitude, start_date, end_date);
	const TIWD = await WU.getThatWeathaData(longitude, latitude, start_date, end_date);
	const BI = [{
		period_start_date: new Date("2023-12-30"),//new Date("2023-12-30"),
		period_end_date: new Date("2024-01-06"),
		usage:100,
		inclusion_override: null
	}];
	return {SI, TIWD, BI};
}
