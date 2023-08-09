import { request } from "@/utils/request";
import * as HospitalDetailInterface from "./interface";

enum API {
  API_HOSPITALRESERVE = "/api/hosp/hospital/",
}
const HospitalDetail = {
  Reserve: (query: string) => {
    return request.get<any, HospitalDetailInterface.DataInfo>(
      API.API_HOSPITALRESERVE + query
    );
  },
};

export { HospitalDetail, HospitalDetailInterface };
