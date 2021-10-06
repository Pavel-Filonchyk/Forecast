export default function findItems(loader: any): any{
    const result1 = []
    const result2 = []
    for (let key in loader){
      let value1 = loader[key]
      if ((typeof value1 === "object")){
          result1.push(findItems(value1))
        }else{
          result1.push(value1)
      }
    }
    for (let i in result1){
      let value2 = result1[i]
      if (Array.isArray(value2)){
        result2.push(findItems(value2))
      }else{
        result2.push(value2)
      }
    }
    return result2
  }

/*
function loops(load){
  let dates = []
  for (let key in load) {
    for (let i in load[key]) { 
      dates.push(load[key][i])  
    }
  }
  return dates
  }
  console.log(loops(load[0]))
*/