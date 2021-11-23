import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import ElementPlus from 'element-plus'

export default function (app) {
    app.use(ElementPlus, {
        locale: zhCn,
    })
}
