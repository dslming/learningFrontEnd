>直接作用import和export在浏览器中导入和导出各个模块了， 一个js文件代表一个js模块；

## 1.1 基本使用1

对于export default 导出的类名,导入时,import 时都不能用{}包裹.

B.js
```react
import React, { Component } from 'react';

class B extends Component{
    render(){
        return(
            <div>7777</div>
        )
    }
}

export default B;
```

App.js
```react
import React, { Component } from 'react';
import B from './B';//这里B是类名,不能用{}包裹

class App extends Component {
  render() {
    return (
      <div>
        <B/>
      </div>
    );
  }
}

export default App;
```
## 1.2 基本使用2

```js
// {字面量},直接使用其文件的变量
import React, { Component } from 'react';
//那么下面可以直接使用 Component
//否则就要 React.Component使用
```

