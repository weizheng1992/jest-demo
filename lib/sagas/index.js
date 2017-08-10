




import { fork } from 'redux-saga/effects';

import { watchRequestLottoNums } from './global';


export default function* rootSaga() {
  yield [fork(watchRequestLottoNums)];
}
