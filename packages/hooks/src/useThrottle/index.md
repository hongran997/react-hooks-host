---
nav:
  path: /hooks
---

# useThrottle

用来处理节流值的 Hook

## 代码演示

### 基础用法

<code src="./demo.tsx" />

## API

```ts
const throttledValue = useThrottle(value: any, wait?: number)
```

### Params

| 参数  | 说明         | 类型   | 默认值 |
| ----- | ------------ | ------ | ------ |
| value | 需要节流的值 | any    | -      |
| wait  | 节流时间     | number | 1000   |
