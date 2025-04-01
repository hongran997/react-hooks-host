因为 webpack 的缘故， 最高支持 node16, node:16.14.0

如果使用 rimraf ， 需要调整rimraf 到 18.17.0 版本，
为了避免删除包可能有的权限问题，需要使用管理员权限启动VSCode

限制包管理器
pnpm run preinstall

打包：
pnpm run init

清理：
pnpm run clean-dist
pnpm run clean

测试：
pnpm run test

静态站点：
pnpm run dev
pnpm run build:doc

发版：
pnpm run pub
pnpm run pub:beta
