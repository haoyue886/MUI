# Badge
Badge组件

### 示例
<M-Badge :value="1" type="success">
<M-Button size="small">成功</M-Button>
</M-Badge>

### 代码
```html
<M-Badge :value="1" type="success">
<M-Button size="small">成功</M-Button>
</M-Badge>
```

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---  | ---  |  ---  |   ---  |
| value | 显示值 | String,Number | — | — |
| max | 最大值，超过最大值会显示 {max}+，要求 value 是 Number 类型 | Number | — | — |
| is-dot | 小圆点 | Boolean | — | false |
| hidden | 隐藏badge | Boolean | — | false |
| type | 类型 | String | primary/success/warning/danger/info | — |
