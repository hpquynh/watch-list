import { Constants } from "~/src/configs/constants"

export const generateColor = (str: string): string => {
  if (!str) {
    return ""
  }

  let sum = 0
  for (let i = 0; i < str.length; i++) {
    sum += str.toLowerCase().charCodeAt(i)
  }
  return Constants.BRAND_COLORS[sum % Constants.BRAND_COLORS.length]
}
