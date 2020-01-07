import storage from '@/api/storage'
import defaultConfig from '@/global/js/config'
const
  state = {
    showLogo: (storage.getMemoryPmt('setting') && storage.getMemoryPmt('setting').showLogo !== undefined)
      ? storage.getMemoryPmt('setting').showLogo
      : true,
    showTags: (storage.getMemoryPmt('setting') && storage.getMemoryPmt('setting').showTags !== undefined)
      ? storage.getMemoryPmt('setting').showTags
      : true,
    showBreadcrumb: (storage.getMemoryPmt('setting') && storage.getMemoryPmt('setting').showBreadcrumb !== undefined)
      ? storage.getMemoryPmt('setting').showBreadcrumb
      : true,
    showFooter: (storage.getMemoryPmt('setting') && storage.getMemoryPmt('setting').showFooter !== undefined)
    ? storage.getMemoryPmt('setting').showFooter
    : true,
    isVerticleMenu: (storage.getMemoryPmt('setting') && storage.getMemoryPmt('setting').isVerticleMenu !== undefined)
      ? storage.getMemoryPmt('setting').isVerticleMenu
      : true,
    menuStyle: (storage.getMemoryPmt('setting') && storage.getMemoryPmt('setting').menuStyle)
      ? storage.getMemoryPmt('setting').menuStyle
      : defaultConfig.menuStyleType,
    background: (storage.getMemoryPmt('setting') && storage.getMemoryPmt('setting').background)
      ? {
        url: storage.getMemoryPmt('setting').background.url ? storage.getMemoryPmt('setting').background.url : "",
        color: storage.getMemoryPmt('setting').background.color ? storage.getMemoryPmt('setting').background.color : "",
        mask: storage.getMemoryPmt('setting').background.mask ? storage.getMemoryPmt('setting').background.mask : 0,
        opacity: storage.getMemoryPmt('setting').background.opacity ? storage.getMemoryPmt('setting').background.opacity : 100,
        cardOpacity: storage.getMemoryPmt('setting').background.cardOpacity ? storage.getMemoryPmt('setting').background.cardOpacity : 90
      }
      : {
        url: "",
        color: "",
        mask: 0,
        opacity: 100,
        cardOpacity: 90
      },
      layoutSize: (storage.getMemoryPmt('setting') && storage.getMemoryPmt('setting').layoutSize !== undefined)
    ? storage.getMemoryPmt('setting').layoutSize
    : defaultConfig.layoutSize,
    themeColor: (storage.getMemoryPmt('setting') && storage.getMemoryPmt('setting').themeColor !== undefined)
    ? storage.getMemoryPmt('setting').themeColor
    : defaultConfig.themeColor,
    themeStyle: (storage.getMemoryPmt('setting') && storage.getMemoryPmt('setting').themeStyle !== undefined)
    ? storage.getMemoryPmt('setting').themeStyle
    : defaultConfig.themeStyle,
    brightness: (storage.getMemoryPmt('setting') && storage.getMemoryPmt('setting').brightness !== undefined)
    ? storage.getMemoryPmt('setting').brightness
    : defaultConfig.brightness
  }
export default {
  state
}