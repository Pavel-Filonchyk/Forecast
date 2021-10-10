export default function conversToArr(loader: any) {

    let dates1: any = []
    let dates2: any = []
    for (let key in loader) {
      dates1.push(loader[key])
      for (let i in loader[key]) { 
        dates2.push(loader[key][i])  
      }
    }
    const superArr1 = dates1.map((item: any) => {
      return Object.entries(item)
    })
    
    const superArr2 = dates2.map((item: any) => {
      return Object.entries(item)
    })
  return [superArr1, superArr2]     
}

/*
for (let key in loader){
  let value1 = loader[key]
  if ((typeof value1 === "object")){
      result1.push(FindItems(value1))
    }else{
      result1.push(value1)
  }
}
for (let i in result1){
  let value2 = result1[i]
  if (Array.isArray(value2)){
    result2.push(FindItems(value2))
  }else{
    result2.push(value2)
  }
}
*/
