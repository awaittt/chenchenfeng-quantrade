import { defineStore } from "pinia";
import { ref } from "vue";
import { HospitalDetail, HospitalDetailInterface } from "@/api/hospital";

const useCounterStore = defineStore("hospitalDetail", () => {
  let data;
  const getData = async (query: string) => {
    const theDta = await HospitalDetail.Reserve(query);
    console.log(theDta);
  };

  return { getData, data };
});

export default useCounterStore;
