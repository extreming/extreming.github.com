#   JS笔记

## JS优秀参考书

[阮一峰老师，Javascript教程](https://wangdoc.com/javascript/index.html)

[阮一峰老师，ECMAScript6入门](http://es6.ruanyifeng.com/#README)

## 基本语法

## 语法专题

## 数据类型

## 运算符

## 标准库

## 面向对象编程

## 异步操作

## 事件

## DOM

## BOM 浏览器模型

## 网页元素接口

## 实际问题总结

## 学习笔记中的重要点

::: tip

任何标签都能加事件

任何样式都能修改

:::

1. . 操作已知的属性
	[] 能操作变量
    点能操作的方括号都能操作

2. 循环里面用事件，事件里面的i有问题

3. 匿名函数 function () {}

4. this: this就是属性或方法“当前”所在的对象。

5. 获取id只能在document下面获取；通过标签获取元素的时候，不管嵌套规则，可以在父级下面获取一组元素

6. document.title = '111' 也可以用来调试

7. 获取标签内容；表单元素：value; 非表单元素：innerHTML

8. 数据类型：基本数据类型（ECMAScript原始类型）：String, Number, Boolean, Undefined, Null； 复杂数据类型（ECMAScript引用类型）：Object

9. JavaScript 语言将函数看作一种值，与其它值（数值、字符串、布尔值等等）地位相同。凡是可以使用值的地方，就能使用函数。比如，可以把函数赋值给变量和对象的属性，也可以当作参数传入其他函数，或者作为函数的结果返回。函数只是一个可以执行的值，此外并无特殊之处。

***由于函数与其他数据类型地位平等，所以在 JavaScript 语言中又称函数为第一等公民***

10. 字符串转化成数字：

	**显示类型转化：**

		parseInt()；转换成整数
			12 		 --->   12
     		12.5 	 --->   12
     		'12abc'	 --->   12
     		'abc12'  --->   NaN
     	从左往右找，遇到非数字(包括小数点),停止。如果第一位就不是数字，返回NaN
        parseFloat(): 转换成小数
        	12  	 ------>   12
        	'12.5'   ------>   12.5
      		'12.5abc'------>   12.5
      		'abc12.5'------>   NaN
      	从左往右找，遇到非数字(不包括小数点)停止。如果第一位就不是数字，返回NaN
        Number():	转化成数字
        	12  	 ------>   12
        	'12.5'   ------>   12.5
      		'12.5abc'------>   NaN
      		'abc12.5'------>   NaN
      	纯数字，否则返回NaN
    
    **隐式类型转化：**

	**除加号 “ + ” 外都会发生隐式类型转化**

		系统偷偷摸摸字符串转成数字类型
		- * / == > < ++...


11. 数字转字符串：
	'' + number; number + ''

12. break: 中断整个循环体； <br>
    continue: 中止、跳过本次循环

## js字面量

英文里面叫做literal,被翻译成了字面量，感觉上很奇怪，其实就是文本代码的意思。

非字面量就是new出来的，字面量就是直接创建的

**javascript字面量**
在JavaScript里面，字面量包括：字符串字面量(string literal )、数组字面量(array literal)和对象字面量(object literal)，另外还有函数字面量(function literal)。


**1. 字符串字面量（String Literal）**

	是指双引号引住的一系列字符，双引号中可以没有字符，可以只有一个字符，也可以有很多个字符（来源：互动百科）。 
	在编程语言中，字面量是一种表示值的记法。
	
	示例：

	var test="hello world!";

	"hello world!"就是字符串字面量，test是变量名。

**2.数组字面量(array literal)**

	示例：

	var team=["tom","john","smith","kobe"];

	["tom","john","smith","kobe"]是数组字面量

**3.对象字面量(object literal)**

	示例：

	var person={name:"tom",age:"26",sex:"male"};

	{name:"tom",age:"26",sex:"male"}为对象字面量

**4.函数字面量(function literal)**

	示例

	var person={
		name:"tom",
		age:"23",
		tell:function(){alert(name);}
	}

##	数组方法

### Array.prototype.some()

some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。

some() 方法会依次执行数组的每个元素：

+ 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。

+ 如果没有满足条件的元素，则返回false。

::: tip

注意： some() 不会对空数组进行检测。

注意： some() 不会改变原始数组。

:::

	var ages = [3, 10, 18, 20];

	function checkAdult(age) {
		return age >= 18;
	}

	function myFunction() {
		document.getElementById("demo").innerHTML = ages.some(checkAdult);
	}

	=> true