import * as actions from '../src/actions/global';
import * as types from '../src/constants/ActionTypes';


import { put, call } from 'redux-saga/effects';

import { requestLottoNums } from '../src/sagas/global';

import { GraphQLClient } from '../src/utils/GraphQLClient';

import { lottoNums } from '../src/utils/GraphQLQuery';


describe('actions', () => {

  const params = {
    size: 10,
    playId: 1010011,
    lottoId: 1010,
  };
  const generator = requestLottoNums(params);
  const mockArticleList = { data: {} };
  const step = input => generator.next(input).value;


  it(`should put(fetchLottoNums())`, () => {
    const next = step();
    expect(next).toEqual(put(actions.fetchLottoNums()));
  });
  const queryQql = lottoNums(params);
  it(`should call(GraphQLClient, ${queryQql})`, () => {
    const next = step();
    expect(next).toEqual(call(GraphQLClient, queryQql));
    console.log(next);
  });

  it(`should put(receiveLottoNums(list))`, () => {
    const next = step(mockArticleList);
    expect(next).toEqual(put(actions.receiveLottoNums(mockArticleList)));
  });

  it('should be done', () => {
    const done = generator.next().done;
    expect(done).toEqual(true);
  });
});

