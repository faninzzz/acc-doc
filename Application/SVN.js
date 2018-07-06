SVN 
  介绍、说明篇 
    下载网址 https://tortoisesvn.net/downloads.html
    介绍
      TortoiseSVN 是一个 Windows 下的版本控制系统 Apache™ Subversion® 的客户端工具。
      文件存储于一个中央版本库中。
      版本库就像一个常见的文件服务器,保存对文件和目录所有的改变。
      Subversion 是一个通用系统,可以管理任何类型的文件集,包括源代码。
    TortoiseSVN 的特性 
      外壳集成
        TortoiseSVN 无缝地整合进 Windows 的外壳(例如资源管理器)。
        即可以继续使用已经熟悉的工具,而且当需要版本控制功能时不用切换到不同的应用程序。
        而且并没有被限制在 Windows 资源管理器中; 
        TortoiseSVN 的右键菜单可以在很多其它文件管理器中以及标准 Windows 程序的 文件/打开 对话框中被调出。
        不过,TortoiseSVN 是专 门作为 Windows 资源管理器的扩展进行开发的。有可能在其它程序中整合的不那么完整,例 如重载图标可能不显示。
      重载图标
        每个版本控制的文件和目录的状态使用小的重载图标表示,可以让你立刻看出工作副本的状态。
      图形用户界面
        当你列出文件或文件夹的更改时,你可以点击任意版本查看提交注释。
        也可以看到更改过的文件列 表 - 只要双击文件就可以查看更改内容。
        提交对话框列出了本次提交将要包括的条目,每一个条目有一个复选框,所以你可以选择包括哪些 条目。
        未版本控制的文件也会被列出,以防你忘记添加新文件。
      Subversion 命令的简便访问
        PS:TortoiseSVN 是一个 Subversion 客户端,包含一些 Subversion 本身的特性:
        所有的 Subversion 命令存在于资源管理器的右键菜单,TortoiseSVN 在那里添加子菜单。
        目录版本控制
          CVS 只能追踪单个文件的历史,
          但是 Subversion 实现了一个“虚拟”文件系统,可以追踪整个目 录树的修改,文件和目录都是版本控制的,
          结果就是可以在客户端对文件和目录执行移动和复制命
          令。
        原子提交
          提交要么完全进入版本库,要么一点都没有,这允许开发者以一个逻辑块提交修改。
        版本控制的元数据
          每个文件和目录都有一组附加的“属性”,你可以发明和保存任意的键/值对,
          属性是版本控制 的,就像文件内容。
        可选的网络层
          Subversion 在版本库访问方面有一个抽象概念,
          利于人们去实现新的网络机制,Subversion 的“高级”服务器是 Apache 网络服务器的一个模块,
          使用 HTTP 的变种协议 WebDAV/DeltaV 通讯,这给了 Subversion 在稳定性和交互性方面很大的好处,
          可以直接使用服务器的特性,例如认 证、授权、传输压缩和版本库浏览等等。
          也有一个轻型的,单独运行的 Subversion 服务器,这个 服务器使用自己的协议,可以轻松的用 SSH 封装。
        一致的数据处理
          Subversion 使用二进制文件差异算法展现文件的区别,
          对于文本(人类可读)和二进制(人类不可 读)文件具备一致的操作方式,
          两种类型的文件都压缩存放在版本库中,差异在网络上双向传递。
        高效的分支和标签
          分支与标签的代价不与工程的大小成比例,
          Subversion 建立分支与标签时只是复制项目,使用了 一种类似于硬链接的机制,
          因而这类操作通常只会花费很少并且相对固定的时间,以及很小的版本 库空间。
    命令、名词解释
      提交:将本地文件同步到服务器上
      更新:将服务器上的文件同步到本地
  使用总结 
    提交之前先更新
    当更新时中途中断后,仓库会锁住,下次在执行更新时需先执行清理操作
----------------------------------------------------------------------以下待整理
