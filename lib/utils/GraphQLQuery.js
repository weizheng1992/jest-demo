

import type { RequestLottoNums } from '../constants/FlowType';

import { gql } from './formatUtil'


export const lottoNums = (val: RequestLottoNums): any => {
  return gql`{
    lottoNums(size:${val.size},playId:${val.playId},lottoId:${val.lottoId}){
      miss
      lottoNum
    }
  }`
}


