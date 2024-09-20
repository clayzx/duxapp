/**
 * 默认主题配置
 */
import { px } from '../utils'

const getConfig = {
  radiusValue: 16,
  radiusPxValue: null
}

export default {
  // General
  primaryColor: '#337ab7', // 主色
  secondaryColor: '#5bc0de', // 辅色
  successColor: '#34a853',
  dangerColor: '#ea4335',
  warningColor: '#fbbc05',
  pageColor: '#fafbf8',

  //用户自定义颜色1
  customColor1: '#337ab7',
  customColor2: '#337ab7',
  customColor3: '#337ab7',

  // 文本颜色 从暗色到亮色
  textColor1: '#373D52',
  textColor2: '#73778E',
  textColor3: '#A1A6B6',
  textColor4: '#FFF',

  // 文本尺寸 从小到大
  textSize1: 24,
  textSize2: 26,
  textSize3: 28,
  textSize4: 30,
  textSize5: 32,
  textSize6: 34,
  textSize7: 36,

  // 公共配置
  common: {
    get radius() {
      if (!getConfig.radiusPxValue) {
        getConfig.radiusPxValue = px(getConfig.radiusValue)
      }
      return getConfig.radiusPxValue
    },
    set radius(value) {
      getConfig.radiusValue = value
    },
    get radiusValue() {
      return getConfig.radiusValue
    }
  },

  header: {
    color: '#fff', // 仅支持rgb hex值，请勿使用纯单词 设置为数组将显示一个渐变按钮
    textColor: '#000', // 文本颜色
    showWechat: false, // 微信公众号是否显示header
    showWap: true, // h5是否显示header
  },

  topView: {
    weappRem: false
  }
}
