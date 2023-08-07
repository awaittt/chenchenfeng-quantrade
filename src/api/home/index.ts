import * as HomeHospitalInterface from "./interface";
import { request } from "@/utils/request";
enum API {
  API_HOSTPITAL = "/api/hosp/hospital/",
  API_DICDOCT = "/admin/cmn/dict/findByDictCode/",
}
const HomeHospital = {
  List: (query: HomeHospitalInterface.ListParams) => {
    return request.get<
      any,
      HomeHospitalInterface.ListInfo<Array<HomeHospitalInterface.Content>>
    >(
      API.API_HOSTPITAL +
        `${query.page}` +
        `/${query.limit}` +
        `?hostype=${query.hostype ?? ""}&districtCode=${
          query.districtCode ?? ""
        }`,
      {}
    );
  },
  LeverAndRegone: (query: string) => {
    return request.get<any, Array<HomeHospitalInterface.LevelAndRegoneInfo>>(
      API.API_DICDOCT + `${query}`,
      {}
    );
  },
  Search: (query: HomeHospitalInterface.ListParams) => {
    return request.get<
      any,
      HomeHospitalInterface.ListInfo<Array<HomeHospitalInterface.Content>>
    >(
      API.API_HOSTPITAL +
        `${query.page}` +
        `/${query.limit}` +
        `?hosname=${query.hosname ?? ""}`,
      {}
    );
  },
};

export { HomeHospital, HomeHospitalInterface };
