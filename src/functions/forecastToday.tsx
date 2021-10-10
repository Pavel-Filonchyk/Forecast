export default function forecastToday(loader: any): any{
  let dates1: any = []
  let dates2: any = []
  for (let key in loader) {
    dates1.push(loader[key])
    for (let i in loader[key]) { 
      dates2.push(loader[key][i])  
    }
  }
  const items1 = dates1.map((item: any) => {
    return Object.entries(item)
  })
  
  const items2 = dates2.map((item: any) => {
    return Object.entries(item)
  })
  
  const newItems1 = items1.flat().flat()
  const newItems2 = items2.flat().flat()
  const index1 = newItems1.findIndex((item: any) => item === "temp") + 1
  const index2 = newItems2.findIndex((item: any) => item === "icon") + 1
  const temp = Math.round(newItems1[index1]- 273)
  const icon = newItems2[index2]
  return [temp, icon]
}