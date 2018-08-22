# wutong_dva
##周五开始dva@2:smirk:
#### google密码

*  lijiahangfox@gmail.com  
* 13832352036

#### :bowtie:  表情

* :smirk: :blush: :grin: 

#### git

* git init
* git remote add origin
* git add .
* git commit -m"first blood"
* git push origin master

 ## 0817

#### dva@2

* umi
* mock

:grin: 

## 0821😊 😁 

* 滚动的颜色渐变







## 0822

#### tomcat

* 运行模式
  * bio
  * nio
  * aio（nio2）
  * apr

~~~~
<!--
    <Connector port="8080" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443" />
    -->
    <!-- protocol 启用 nio模式，(tomcat8默认使用的是nio)(apr模式利用系统级异步io) -->
    <!-- minProcessors最小空闲连接线程数-->
    <!-- maxProcessors最大连接线程数-->
    <!-- acceptCount允许的最大连接数，应大于等于maxProcessors-->
    <!-- enableLookups 如果为true,requst.getRemoteHost会执行DNS查找，反向解析ip对应域名或主机名-->
    <Connector port="8080" protocol="org.apache.coyote.http11.Http11NioProtocol" 
        connectionTimeout="20000"
        redirectPort="8443

        maxThreads=“500” 
        minSpareThreads=“100” 
        maxSpareThreads=“200”
        acceptCount="200"
        enableLookups="false"       
    />
~~~~

* 部署方式

  * webapps下直接部署

  * server.xml指定路径

    * ~~~~
      <Context path="/web1" docBase="D:\web1"/>
      ~~~~

  * 通过Catalina来进行配置:进入到confCatalinalocalhost文件下，创建一个xml文件，该文件的名字就是站点的名字。编写XML的方式来进行设置。
* tomcat不在根目录的dva项目
 * 一般只需在webpack里修改 /dist/static/ 即可
 * 由于我的特殊情况需要调整目录为 （=== '/' || === '/dist/'）
