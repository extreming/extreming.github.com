#   CSS笔记

##  CSS命名规范

### 常见元素命名
    头：                        header
    内容：                      content
    容器：                      container
    尾：                        footer
    导航：                      nav
    侧栏：                      sidebar
    栏目：                      column
    页面外围控制整体布局宽度：    wrapper
    登录条：                    loginbar
    标志：                      logo
    广告：                      banner
    页面主体：                  main
    热点：                      hot
    新闻：                      news
    下载：                      download
    子导航：                    subnav
    菜单：                      menu
    子菜单：                    submenu
    搜索：                      search
    友情链接：                  friendlink
    页脚：                      footer
    版权：                      copyright
    滚动：                      scroll
    内容：                      content
    标签页：                    tab
    文章列表：                  list
    提示信息：                  msg
    小技巧：                    tips
    栏目标题：                  title
    加入：                      joinus
    指南：                      guide
    服务：                      service
    注册：                      regesiter
    状态：                      status
    投票：                      vote
    合作伙伴：                  partner

### 页面结构命名
    容器：                      container
    页头：                      header
    内容：                      container
    页面主体：                  main
    页尾：                      footer
    导航：                      nav
    侧栏：                      sidbar
    栏目：                      column
    页面外围控制整体宽度：      wrapper
    左中右：                    left/right/center
    条：                        bar
    块：                        block

### 导航命名
    导航：                      nav
    主导航：                    mainnav
    子导航：                    subnav
    顶导航：                    topnav
    边导航：                    sidenav
    左导航：                    leftnav
    右导航：                    rightnav
    菜单：                      menu
    子菜单：                    submenu
    标题：                      title
    摘要：                      summary

### 功能命名
    标志：                      logo
    广告：                      banner
    登录：                      login
    登录条：                    loginbar
    注册：                      regesiter
    搜索：                      search
    功能区：                    shop
    标题：                      title
    加入：                      joinus
    状态：                      status
    按钮：                      btn
    滚动：                      scroll
    标签页：                    tab
    文章列表：                  list
    提示信息：                  msg
    当前的：                    current
    小技巧：                    tips
    图标：                      icon
    注释：                      note
    指南：                      guide
    服务：                      service
    热点：                      hot
    新闻：                      news
    下载：                      download
    投票：                      vote
    合作伙伴：                  partner
    友情链接：                  friendlink
    版权：                      copyright

### 颜色命名
使用颜色的名称或16进制代码，如

    .red { color: red; }
    .f60 { color: #f60; }
    .ff8600 { color: #ff8600; }

[RGB颜色对照表](http://tool.oschina.net/commons?type=3)

### 字体大小命名
直接使用"font+字体大小"作为名称,如

    .font12px {
        font-size: 12px;
    }

    .font9pt {
        font-size: 9pt;
    }

### 使用对齐目标的英文名命名

    .left {
        float: left;
    }

    .bottom {
        position: absolute;
        bottom: 0;
        left: 0;
    }

### 使用“类别+功能”的方式命名，如

    .barnews {}
    .barproduct {}

### 注意事项
1.  一律小写
2.  尽量用英文
3.  不加中杠和下划线
4.  尽量不缩写，除非一看就明白的单词

### 常用css文件含义
    主要的      master.css
    模块        module.css
    基本公用    common.css/base.css
    布局/版面   layout.css
    主题        themes.css
    专栏        columns.css
    文字        font.css
    表单        forms.css
    补丁        mend.css
    打印        print.css
    
###  参考文章

[如何规范 CSS 的命名和书写？](https://www.zhihu.com/question/19586885)


##  注释的写法
    /* Footer */

    内容区

    /* EndFooter */




##  样式

### 颜色表示法
* 英文表示法：

    ```
    red, blue, green, yellow, black, pink
    ```

* rgb表示法：

    光的三原色(red, green, blue)

        color: rgb(1,0,68)
        color: rgba(1, 0, 68, .5)
        范围：0-255(黑→白)
        
* 十六进制表示法：

        color:#010044;

    简写

        #cccccc → #ccc
        #ffffff → #fff	
        #11aa33 → #1a3

    范围： 0-9 	a-f



### 样式
    color               字体颜色
    text-align          对齐方式
    line-height         行高
    font                字体
    text-decoration     划线
    border              边框
    background          背景

#### text-align
文本水平对齐方向：left/center/right

#### line-height
行高(对于单行文本，行高和高度一致时，能够实现垂直居中);

#### font
* 合写：font: italic bold 40px Microsoft YaHei;

    **区分顺序，至少要有字体大小和字体系列, 且字体大小在前，字体系列在后；其余样式在这两个样式之前生效，其余样式不区分顺序**

* 分写：

    font-size   
    
    > 字体大小要用偶数，浏览器默认字体大小是16px(12px)

    font-family  
    
    > Microsoft YaHei(微软雅黑) SimSun(宋体)	默认字体 SimHei(黑体)

    font-style

    > italic 倾斜 normal 默认

    font-weight

    > font-weight: bold;  /  font-weight: (700);

    ::: tip
    文本样式都能继承，如果自己有样式，则不继承父级样式。
    :::

#### text-decoration

    overline	上划线
    line-through	中划线/删除线
    underline	下划线(a标签的默认属性)
    none		无(除a之外所有标签的默认样式)

#### border
* 合写：

    border: width style color

    border: 5px solid/dotted(点划线)/dashed(虚线) black/rgb(0, 0, 0)/#000

* 分写：

    border-width    宽度

    border-style    线性    **不能省略**

    border-color    颜色

* border的四个方向：

    top/bottom/left/right

#### background
* 合写：

    background:url(img/123.jpg) no-repeat 100px 50px pink;

    不区分顺序

* 分写：

    background-color:red;   背景色

    background-image:url(图片路径); 背景图

    background-repeat：repeat(默认)/no-repeat   背景重复

    background-position：**第一个值是x轴，第二值是y轴**

    > 像素表示法 Xpx, Ypx

    > 百分比表示法 X%, Y%

    > 英文表示法 left/right/top/bottom/center  **一般都写两个值，如果只写一个值，第二个值默认居中。**

    > 混合表示法

### 样式类型
1. 行间样式
2. 内联样式
3. 外联样式

## 选择器
更为方便的为标签添加样式

    *	    通配符(代指所有的标签)
    h1          标签选择器(多个标签要用逗号分开)
    .class	    类选择器(最常用)
    #id	    id选择器(在同一个页面中只能出现一次，多用在js中)

### 选择器优先级
优先级越高，代表的范围越小

优先级的计算

#id > .class > 标签选择器 > *
