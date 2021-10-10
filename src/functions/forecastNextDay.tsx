import conversToArr from './conversToArr'

export default function forecastNextDay(loader: any){

  const superArr = conversToArr(loader)[1].flat().flat().flat()
 
  function getItems(num: number){
    const indexDate = superArr.findIndex((item: any) => item === "dt_txt") + num
    const indexPic = superArr.findIndex((item: any) => item === "weather") + num
    const indexTemper = superArr.findIndex((item: any) => item === "main") + num
    
    const date = superArr[indexDate]
    const tempers = []
    const temperArr = superArr[indexTemper]
    for (let key in temperArr){
      tempers.push(temperArr[key])
    }
    const temper = tempers.map(item => {
      return Math.round(item -273)
    })
    const pics = []
    const picArr = superArr[indexPic]
    for (let key in picArr){
      pics.push(picArr[key])
    }
    return [date, temper[1], pics[3]]
  }
  return [getItems(1), getItems(19), getItems(37), getItems(55)]
}



