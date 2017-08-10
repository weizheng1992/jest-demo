//@flow

import { put, take, call, fork } from 'redux-saga/effects';
import type { RequestLottoNums } from '../constants/FlowType';
import * as types from '../constants/ActionTypes';
import { GraphQLClient } from '../utils/GraphQLClient';
import { lottoNums } from '../utils/GraphQLQuery';
import { fetchLottoNums, receiveLottoNums } from '../actions/global';



export function* requestLottoNums(val: RequestLottoNums): any {
  try {
    const queryQql = lottoNums(val);
    yield put(fetchLottoNums());
    const LottoNumsList = yield call(GraphQLClient, queryQql);
    yield put(receiveLottoNums(LottoNumsList));
  } catch (error) {
    yield put(receiveLottoNums({ data: {} }));
    console.log(error);
  }
}

export function* watchRequestLottoNums(): any {
  while (true) {
    const {
      val
    } = yield take(types.REQUEST_LOTTONUMS);
    yield fork(requestLottoNums, val);
  }
}