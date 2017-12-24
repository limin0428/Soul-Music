#环境运行
- git clone 地址
- 找到NeteaseCloudMusicApi文件,剪切到其他文件内,解压NeteaseCloudMusicApi文件,使用cmd命令node.app.js运行
- 回到Soul-Music文件内npm install 配置文件
- 然后启动server.js
- npm run dev
- 即可访问页面localhost:8080


# 技术栈
- react
- react-router
- redux
- nodejs
- express

# 项目结构
```
├─ server———– 后台server文件
│  └─mock——————– 模拟后台请求数据的文件夹
│
├─src——– 项目文件
│  │
│  ├─api————– api接口
│  │
│  ├─ components ———– 公共组件
│  │  │
│  │  ├─ Tab ————– 底部菜单组件
│  │  ├─ NavBar ————– 头部组件
│  │  ├─ TabsControl ———– 首页tab切换组件
│  │  └─ Protected ———– 登陆保护组件
│  │
│  ├─ container ——– 页面级组件
│  │  │
│  │  ├─ Home —————–首页
│  │  │  │
│  │  │  ├─ Carousel ————– 首页轮播图
│  │  │  │
│  │  │  │─ Music ———————– 发现音乐页
│  │  │  │  │
│  │  │  │  ├─ Recommend ———————– 推荐音乐页
│  │  │  │  ├─ RankingList —————– 排行榜页
│  │  │  │  ├─ SongList ————————– 歌单列表页
│  │  │  │  └─ NewMusicList ————– 最新音乐列表页
│  │  │  │
│  │  │  └─ Search ——————–搜索音乐组件
│  │  │
│  │  ├─ MyMusic ——————————–我的音乐页
│  │  ├─ SongMenuDetail ———–歌单详情页
│  │  ├─ Single ———————————–单曲播放页
│  │  ├─ Login ————————————–登录页
│  │  ├─ Register——————————–注册页
│  │  └─ Profile ——————————–个人中心页
│  │
│  ├─ images ——————– 静态图片
│  │
│  ├─ store ———————– redux store文件夹
│  │  │
│  │  ├─ actions ——– 各页面actions集合文件
│  │  │  ├─ home ———————– 首页action
│  │  │  └─ session ————– 处理登陆注册的action
│  │  │
│  │  └─ reducers ————– reducers 文件夹
│  │      ├─ home ————————– 处理首页各组件状态的reducer
│  │      └─ session —————– 处理登陆注册状态的reducer
│  │
│  └─ style ———————– 公共样式
│
└─ utils ———– 工具库

```

















