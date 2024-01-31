const BASE_URL =  "https://geocoding.geo.census.gov";
const ADDRESS_ENDPOINT = "/geocoder/locations/address";
const params = new URLSearchParams();

class GeocodeUtil {

    async getLL(street,city,state) {
        params.append("street",street);
        params.append("state",state);
        params.append("city",city);
        params.append("format","json");
        params.append("benchmark",2020);

        let url = new URL(BASE_URL+ADDRESS_ENDPOINT+"?"+params.toString());
        let rezzy = await fetch(url);
        let jrez = await rezzy.json();
        let coordz = jrez.result.addressMatches[0].coordinates;
        console.log(coordz);
        return coordz;
    }
}

export default GeocodeUtil;