# m-ui0 组件库
### 快速开始
#### 1.安装组件库
```bash
npm i m-ui0
```
#### 2.引用组件库
```javascript
//全部引入
import 'm-ui0/dist/css/index.css';
import MUI from 'm-ui0';
Vue.use(MUI)

//按需引入
import 'm-ui0/dist/css/button.css';
import {Button} from 'm-ui0';
Vue.use(Button);
```