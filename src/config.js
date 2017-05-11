/**
 * Created by billbear on 2017/5/11.
 */
export const IS_DEV = process.env.NODE_ENV !== 'production'

export function formateDate(time){
  time = new Date(time)
  let month = time.getMonth() + 1
  let date = time.getDate()
  let day = time.getDay()
  switch (day) {
    case 1:
      day = '星期一'
      break
    case 2:
      day = '星期二'
      break
    case 3:
      day = '星期三'
      break
    case 4:
      day = '星期四'
      break
    case 5:
      day = '星期五'
      break
    case 6:
      day = '星期六'
      break
    default:
      day = '星期日'
      break
  }
  return {
    date:`${month}月${date}日上映`,
    day
  }
}