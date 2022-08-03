# FindRareENS - 批量查询 ENS 地址是否被注册

## 环境要求

- Node.js
- dotenv
- ether

### 环境配置

#### 1. Node.js

点击这里打开[官网](https://nodejs.org/zh-cn/)，下载长期稳定版。下载完后一路点击下一步安装即可。

如果已安装，可以忽略。

#### 2. 安装 dotenv ➕ ether

打开终端：

- Windows 用户按 Win ➕ R 键在弹出的窗口输入 cmd 之后回车

- Mac 用户使用 command ➕ 空格 搜索 terminal

在打开的终端中输入 `npm install` 等待安装成功即可。

### 运行脚本

1. 在 `.env` 文件下配置你申请的 Provider。

2. 在 `unchecked-ens.json` 中填写你想批量查询的 ENS 域名，不用输入 ".eth"。
   eg: ["chuckgao", "jennifer"]

3. 在第二步打开的终端中输入 `node findRareENS.js` 即可运行脚本。

运行成功的截图如下

![运行成功截图](https://tva1.sinaimg.cn/large/e6c9d24ely1h4tdo79048j20go012aa0.jpg)

玩的开心！！！
