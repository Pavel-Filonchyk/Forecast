import conversToArr from './conversToArr'

export default function forecastToday(loader: any): any{
  
  const superArr1 = conversToArr(loader)[0].flat().flat()
  const superArr2 = conversToArr(loader)[1].flat().flat()
  
  const index1 = superArr1.findIndex((item: any) => item === "temp") + 1
  const index2 = superArr2.findIndex((item: any) => item === "icon") + 1
  const temp = Math.round(superArr1[index1]- 273)
  const icon = superArr2[index2]
  return [temp, icon]
}