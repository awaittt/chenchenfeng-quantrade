import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { HospitalDetail, HospitalDetailInterface } from "@/api/hospital";

const useCounterStore = defineStore("hospitalDetail", () => {
  let thedata = ref<HospitalDetailInterface.DataInfo|undefined>();
  const getData = async (query: string) => {
    thedata.value = await HospitalDetail.Reserve(query);
  };

  return { getData, thedata };
});

export default useCounterStore;
