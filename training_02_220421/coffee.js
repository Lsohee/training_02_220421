/*
커피 원두 : 20000
우유 : 30000
물 : 100
설탕 : 3000
시럽 : 2000
빨대 : 300
계피 : 1000
머그컵 : 300000
일회용컵 : 1000000
얼음 : 200000
*/


const jearyoObj = {
  shrimp : 10000,
  galric : 2000,
  oil : 3000,
  moen : 4000,
  qorhvmssk :1000000
};

let good =[jearyoObj.shrimp,jearyoObj.oil,jearyoObj.moen];

const dish = good[0] + good[1] + good[2] + jearyoObj.galric;

console.log(dish);


if (dish > 10000) {
  console.log(`감바스 값이 ${dish}입니다 맛있겠지`)
} else{
  console.log(`${dish}이니까 더 맛있지`)
}

