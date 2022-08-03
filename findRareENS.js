const fs = require("fs");
const path = require("path");
const { ethers } = require("ethers");
// require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
require("dotenv").config();

// 创建 Provider
const provider = new ethers.providers.JsonRpcProvider(process.env.Provider);

/**
 * 寻找 ENS 对应的 ETH 地址
 * @param {String} ENS Ethereum Name System 地址
 * @returns {Boolean} 未注册返回 null 反之返回地址
 */
const findENS = async function (ENS) {
  const address = await provider.resolveName(ENS);
  return address;
};

/**
 * 读取文件内容并返回
 * @param {String} path 要读取的文件路径
 * @returns {String} 文件内容
 */
const readfile = function (path) {
  return fs.readFileSync(path).toString();
};

/**
 * 写入内容到本地文件
 * @param {String} path 要写入的文件路径
 * @param {String} content 要写入的文件内容
 */
const savefile = async function (path, content) {
  fs.writeFileSync(path, content);
};

/**
 * ["os"]
 */
const main = async function () {
  // 存放查询状态
  const result = [];

  // 待查询ENS名单路径
  const rarelyENSFilePath = path.resolve(__dirname, "unchecked-ens.json");

  // 保存状态的路径
  const checkedENSFilePath = path.resolve(__dirname, "check-ens.json");

  // 格式化 ENS 名单
  const enss = JSON.parse(readfile(rarelyENSFilePath));

  // 查找 ENS 对应以太坊地址
  for (const ens of enss) {
    const address = await findENS(`${ens}.eth`);
    const tempObj = { ens: `${ens}.eth`, address };
    address
      ? console.log(`😭 ${ens} 已经被 ${address} 注册了`)
      : console.log(`🚀 ${ens} 还可以注册，抓紧去注册！！！`);
    result.push(tempObj);
  }

  // 保存查询状态
  savefile(checkedENSFilePath, JSON.stringify(result));
};

main();
