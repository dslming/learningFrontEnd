# 一、todolist应用分析

![todolist2](G:\REACT\react学习笔记\react第3阶段-redux\img\todolist2.png)
应用主要由3个部分组成

- 代办事项的列表
- 增加新待办事项的输入框和按钮
- 待办事项过滤器，可以选择过滤不同状态的事件。

3件事由两个功能模块组成,todos和filter。

# 二、Todo状态设计

## 2.1 待办项

```js
{
  	id : ／／唯一标示
	text : ／／待办事项内容
	completed : ／／布尔值，标示待办事项是否已完成
}
```

## 2.2 过滤器项

- 全部待办事项； 

- 已完成代办事项； 
- 未完成待办事项 。    

```js
const ALL =’ all ’;
const COMPLETED =’ completed’;
const UNCOMPLETED = ’ uncompleted’;
```

## 2.3 Store对象

```js
{
    todos: [
        {
            text:’First todo ’ ,
            completed: false ,
            id : 0
        },
        {
            text:’Second todo ' ,
            completed : false,
            id : 1
        }
       ]
       filter : ’ all ’
}
```

todos使用数组存取。

# 三、action构造函数

生成action对象。

在 todos 和 filter 目录下，我们都要分别创造 actionTypes. 和 actions. 文件，这两 个文件几乎每个功能模块都需要，文件如此命名是大家普遍接受的习惯 。    


