## 组件功能
   可以根据html内的标签自动添加到tab栏中
## 组件实现方式
   对html内class里带有tab-container的元素获取其h1标签的文本内容和p标签的文本内容，然后将其append到对应的元素中
## 如何使用
   在html内新建一个div，结构如下
```
<div class="tab-container">
<h1>标签文本内容</h1>
<p>展示栏文本内容</p>
</div>
```
   然后在js中选中dom，并作为参数传给Tab类进行实例化
```
var node0 = document.querySelectorAll('.tab-container')[0];
var tab1 = new Tab(node0);
```
   自动构建tab就完成了