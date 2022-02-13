import Colorpicker from './Colorpicker'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(Vue) {
        registerComponent(Vue, Colorpicker)
    }
}

use(Plugin)

export default Plugin

export {
    Colorpicker as BColorpicker
}
