import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)


export default (app) => {
    app.component('font-awesome-icon',FontAwesomeIcon)
}