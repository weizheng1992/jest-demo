
//@flow


export type RequestLottoNums = {
  size: number,
  playId: number,
  lottoId: number
}

export type ResponseLottoNums = {
  endTime?: number,
  endTime?: string,
  issue?: string,
  lottoNum?: string,
  miss?: Array<number>,
  playLottoNum?: string,
  testNum?: string
}
