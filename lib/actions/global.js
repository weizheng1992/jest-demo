// @flow

import * as types from '../constants/ActionTypes';

import type { RequestLottoNums, ResponseLottoNums } from '../constants/FlowType';


export function currentAnimate(text: string) {
  return {
    type: types.CURRENT_ANIMATE,
    text
  }
};




export function requestLottoNums(val: RequestLottoNums): any {
  return {
    type: types.REQUEST_LOTTONUMS,
    val
  }
}

export function fetchLottoNums(): any {
  return {
    type: types.FETCH_LOTTONUMS
  }
}


export function receiveLottoNums(list: { data: ResponseLottoNums }): any {
  return {
    type: types.RECEIVE_LOTTONUMS,
    list
  }
}



