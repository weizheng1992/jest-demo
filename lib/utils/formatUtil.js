import _ from 'lodash';

export const formatDateString = (timestamp, symbol = '-', getDate = false) => {
  if (timestamp) {
    const date = new Date(parseInt(timestamp));
    const year = date.getFullYear();
    const month = (parseInt(date.getMonth()) + 1) >= 10 ? (parseInt(date.getMonth()) + 1) : `0${date.getMonth() + 1}`;
    const day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
    let hours = 0, minutes = 0, seconds = 0;
    if (!getDate) {
      hours = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`;
      minutes = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;
      seconds = date.getSeconds() >= 10 ? date.getSeconds() : `0${date.getSeconds()}`;
      return `${year}${symbol}${month}${symbol}${day} ${hours}:${minutes}:${seconds}`;
    } else {
      return `${year}${symbol}${month}${symbol}${day}`;
    }

  } else {
    return null;
  }
};


export const formatDuring = (mss) => {
  let days = parseInt(mss / (1000 * 60 * 60 * 24));
  let hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = (mss % (1000 * 60)) / 1000;
  return days + " 天 " + hours + " 时 " + minutes + " 分 " + seconds + " 秒 ";
}


export const formatMoney = (number = 0, places = 2, symbol = '￥', thousand = ',', decimal = '.') => {
  places = !isNaN(places = Math.abs(places)) ? places : 2;
  number = number / 100;
  var negative = number < 0 ? "-" : "",
    i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;
  return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
}



export const formatGetUrl = (url, params) => (
  url + '?' +
  _.chain(params)
    .toPairs()
    .filter(([k, v]) => _.trim(v))
    .map(([k, v]) => (k + '=' + v))
    .join('&')
    .value()
)



/**格式化请求参数 */
export const gql = (...args) => {
  const [templates, ...v] = args;
  let query = "";
  for (let i = 0; i < templates.length; i++) {
    if (i === v.length) {
      query += templates[i];
    } else {
      query += templates[i];
      query += v[i];
    }
  }
  return query.trim()
  .replace(/\s+/g, " ")
  .replace(/([(){}\[\]:,]) /g, "$1")
  .replace(/ (?=[(){}\[\]:,])/g, "");
}