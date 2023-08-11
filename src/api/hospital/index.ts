import { request } from "@/utils/request";
import * as HospitalDetailInterface from "./interface";

enum API {
  API_HOSPITALRESERVE = "/api/hosp/hospital/",
  API_DEPARTMENT = "/api/hosp/hospital/department/",
}
const HospitalDetail = {
  Reserve: (query: string) => {
    return request.get<any, HospitalDetailInterface.DataInfo>(
      API.API_HOSPITALRESERVE + query
    );
  },
  DEPARTMENT: (query: string) => {
    return request.get<any, HospitalDetailInterface.DepartmentInfo>(
      API.API_DEPARTMENT + query
    );
  },
};

export { HospitalDetail, HospitalDetailInterface };
