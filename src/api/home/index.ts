import * as HomeHospitalInterface from "./interface";
const baseURL = "/api/hosp/hospital/";
import { request } from "@/utils/request";
const HomeHospital = {
  List: (query: HomeHospitalInterface.ListParams) => {
    return request.get<any,HomeHospitalInterface.ListInfo<Array<HomeHospitalInterface.Content>>>(
      baseURL + `/${query.page}` + `/${query.limit}`,
      {}
    );
  },
};

export { HomeHospital, HomeHospitalInterface };
