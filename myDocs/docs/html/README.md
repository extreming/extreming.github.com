# HTML笔记

## HTML文档结构

    <!DOCTYPE html>                 文档头，告诉浏览器这是一个网页
    <html>
        <head>                      头部，存放重要信息
            <meta charset="utf-8">  网页元数据，存放如编码格式等重要信息
            <title>网页标题</title>  网页标题
        </head>

        <body>                      网页主体
            网页主体
        </body>
    </html>

## HTML标签

### 标签名

#### div
一个装东西的盒子，默认没有样式
#### h1 - h6
标题标签

::: danger
h1标签在网页中一般只使用一次,有利于SEO搜索引擎优化
:::
#### p
段落标签

#### br
换行标签

#### img
图片标签

宽高如果只写一个值，另一个会自动计算出来。如果宽高不协调，图片会扭曲变形。

#### a
超链接标签
1. target：	打开方式

        _self	本页面打开
        _blank	新页面打开
::: danger

_blank方式有安全风险!

:::

2. 锚点：要用id

        href="#id名"	跳转到本页面标签
        href="文件名/页面名称#id名"	跳转其他页面锚点

3. \#

4. http协议

5. javascript协议

#### span, b, strong, i, em
修饰文本类的标签，span是一个纯洁的标签，没有附加样式

#### ol, ul, li

    ol 有序列表
    ul 无序列表

### 分类
单标签

    br, img

双标签

    h1-h6, p, a

#### 元素分类
块标签（块元素）

    div, p, h1-h6
    用途：写结构，搭架子，做布局
    特点：
        1.支持宽高
        2.独占一行
        3.不受空格和换行的影响
    *** 如果不写width，默认独占一行（通屏）

行内标签（行内元素、内联元素）

    span, a, b, i, strong, em
    用途：修饰细节，块元素里边的内容
    特点：
        1.不支持宽高，不支持margin-top, margin-bottom, padding-top, padding-bottom
        2.共处一行
        3.受空格和换行的影响

行内块标签
    
    img
    特点：
        1.支持宽高
        2.共处一行
        3.受空格和换行的影响

#### 块与行内的转化

    display：inline；       块转行内
    display：block；        行内变成块	显示元素
    display：inline-block； 转化成行内块
    display：none；         隐藏元素

#### 标签的嵌套规则

    1.行内元素只能嵌套行内元素(a标签除外，一般都会把a标签转化成块元素。
    2.块元素可以嵌套任何元素(p标签除外，只能包行内元素和行内块元素)。




### 标签的书写规范
1. 有起始标签就一定要有结束标签。
2. 标签一定要小写。
3. 标签一定要合理闭合。

### 语义化
是指用相应的标签和它的特有的属性写相应的内容。

eg：p标签要写段落，a标签要写超链接。


## 标签属性

### 属性的分类

####    公有属性
        title(文本提示, title="文本内容")
####    私有属性
        href, src, alt(替换文本, alt="替换的内容", 图片加载失败时出现，在img中使用)

### 属性的书写规范
1. 属性名="属性值"。
2. 属性名与标签名之间有空格。
3. 属性与属性之间有空格。
4. 引号是英文状态下的。

### 属性的弊端
1. 属性修饰的标签范围有限-属性不能修饰所有标签；<br>(样式可以修饰所有的标签)
2. 属性修饰标签产生的结果范围有限；<br>(border作为标签属性只能改变边框的大小，不能改变颜色和样式）

## 实体字符
在 HTML 中，某些字符是预留的。

在 HTML 中不能使用小于号（<）和大于号（>），这是因为浏览器会误认为它们是标签。

如果希望正确地显示预留字符，我们必须在 HTML 源代码中使用字符实体（character entities）。

    &nbsp;		空格
    &gt;		>
    &lt;		<

## 表单

### form标签

    <form action="提交地址" method="get/post">
        <input type="text" value="" />
    </form>

    action="提交地址"

    method 提交方法
        get:
            从服务器获取数据，传输量小，不大于2kb,不加密，执行效率高
        post:
            向服务器发送数据，传输量大，默认不受限制，加密，执行效率低

    input: 输入框，支持宽高，默认垂直居中（行内块元素）
            type： 类型
            value：提交的值
    
    *提交的信息是input中的value

### 输入框

#### 文本输入框

    <input type="text" value="" placeholder="" />

    text        文本
    placeholder 提示信息（H5属性）

#### 密码输入框

    <input type="password" value="" />

#### 单选框

    <input type="radio" name="sex" value="man" checked />   咖啡
    <input type="radio" name="sex" value="women" />         可乐
    <input type="radio" name="sex" value="manwomen" />      酸奶

    name	一组(同一组要有相同的name)
            name="sex"	名为sex的一组单选框
    checked	默认选中

#### 多选框/复选框

    <input type="checkbox" value="值"/>

#### 按钮

    提交按钮：
        <input type="submit" value="提交按钮"/>
    重置按钮：
        <input type="reset" value="重置按钮"/>
    确定按钮：
        <input type="button" value="按钮"/>

### 标记标签

    <label for="id名">值</label>

    <input type="radio" name="sex" value="man" id="man" />
    <label for="man">男</label>

### 下拉菜单

    <select>
        <option>1</option>
        <option selected>2</option>
        <option>3</option>
        <option>4</option>
    </select>

    selected 默认选中

### 文本域

    <textarea></textarea>
    可随意变化大小

### 清楚默认样式

    input{
        border:none;
        padding:0;
        outline:none;
        background:none;
    }
    outline:none;	        去掉焦点框
    textarea{
        resize:none;
    }                       禁止变化大小

::: tip

input和img不受浮动半脱离文档流的影响。(也不受定位完全脱离文档流的影响,他本身不会脱离文档流)

:::

## 表格

    <table>	
        <thead>                         头部
            <tr>	                    行：横的
                <th></th>	            列：竖的
            </tr>
        </thead>

        <tbody>                         身体
            <tr>	                    行
                <td></td>	            列
            </tr>
        </tbody>

        <tfoot>                         尾部
            <tr>	                    行
                <td></td>	            列
            </tr>
        </tfoot>
    </table>

    cellpadding	清除内容与单元格边框的距离
    cellspacing	清除单元格与单元格之间的距离
    border-collapse: collapse;	边框合并
    rowspan                     行合并  row翻译为行
    colspan                     列合并  col翻译为列

### 对齐

**水平**

    text-align: 
                left;
                right;
                center;

**垂直**

    vertical-align:
                    top;
                    middle;(默认)
                    bottom

## iframe框架

**作用：** 广告

    <iframe src="iframeson.html"></iframe>

可以定义宽高，跟普通元素写法一样

frameborder="0"	去掉边框

**滚动条：**

    scrolling   no      没有
                auto    自适应
                yes	    有


## HTML 元标签 meta 属性及含义

    <meta charset="utf-8">	    编码
    <meta http-equiv="X-UA-Compatible" content="IE=edge">   支持IE,如果支持Google Chrome Frame：GCF，则使用GCF渲染；如果系统安装ie8或以上版本，则使用最高版本ie渲染
    <meta name="viewport" content="width=device-width, initial-scale=1">    写移动端必加

    viewport                视口
    width=device-width      设备宽
    initial-scale=1         不需要用户改变比例
