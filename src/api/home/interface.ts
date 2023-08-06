export interface ListParams {
  page: number;
  limit: number;
}

export interface ListInfo<T1> {
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  first: boolean;
  sort: Sort;
  numberOfElements: number;
  size: number;
  number: number;
  empty: boolean;
  content: T1;
}

export interface Content {
  id: string;
  createTime: string;
  updateTime: string;
  isDeleted: number;
  param: Param;
  hoscode: string;
  hosname: string;
  hostype: string;
  provinceCode: string;
  cityCode: string;
  districtCode: string;
  address: Address;
  logoData: string;
  intro: null | string;
  route: string;
  status: number;
  bookingRule: BookingRule;
}

enum Address {
  Empty = "",
  大望路 = "大望路",
}

interface BookingRule {
  cycle: number;
  releaseTime: string;
  stopTime: StopTime;
  quitDay: number;
  quitTime: QuitTime;
  rule: Rule[];
}
enum QuitTime {
  The1530 = "15:30",
}

enum Rule {
  东院区预约号取号地点东院区老门诊楼一层大厅挂号窗口或新门诊楼各楼层挂号收费窗口取号 = "东院区预约号取号地点：东院区老门诊楼一层大厅挂号窗口或新门诊楼各楼层挂号/收费窗口取号",
  西院区预约号取号地点西院区门诊楼一层大厅挂号窗口取号 = "西院区预约号取号地点：西院区门诊楼一层大厅挂号窗口取号",
}

enum StopTime {
  The1130 = "11:30",
  The1230 = "12:30",
}

interface Param {
  hostypeString: HostypeString;
  fullAddress: string;
}

enum HostypeString {
  三级乙等 = "三级乙等",
  三级甲等 = "三级甲等",
  二级乙等 = "二级乙等",
}

interface Pageable {
  sort: Sort;
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}
