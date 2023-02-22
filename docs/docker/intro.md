## 构建Docker镜像

以一个Ubuntu:16.04为例，更改为自己的python3.6+django2.0镜像

## 手动构建

这种方法就是根据docker镜像为基础镜像来创建容器，然后运行容器，在容器中安装自己需要的包，然后再提交(commit)一下，推送(push)到自己的镜像仓库

1. 拉取Ubuntu:16.04官方镜像
  ```shell
  docker pull ubuntu:16.04
  ```

2. 用镜像启动一个容器，安装一些包
  ```shell
  docker run -it ubuntu:16.04
  bash-5.0# apt-get update && exit
  ```

3. 退出容器，提交镜像
  ```shell
  docker commit -m="description about images" --author="author" {container_id}  {repository/images_name:tag}
  ```
-m是对提交的描述，author是作者(选填)，后面的c28e5976a6ab是修改容器的id，后面的是新镜像名字和标签(tag)。
成功之后，会生成新的镜像id，输入docker images 查看镜像，会发现新的名为spencer/django，标签为v1的镜像已经存在。

4. 推送到阿里云docker平台
  ```shell
  docker login --username=your_username registry.cn-beijing.aliyuncs.com
  docker tag [ImageId] registry.cn-beijing.aliyuncs.com/[命名空间]/[仓库名称]:[镜像版本号]
  docker push registry.cn-beijing.aliyuncs.com/[命名空间]/[仓库名称]:[镜像版本号]
  ```

## 利用Dockerfile构建
由Dockerfile自动构建镜像，就是把手动构建的命令逐行写入一个Dockerfile里
```dockerfile
FROM
WORKDIR
COPY
CD
RUN
EXPOSE 8080
CMD
```

## 通过代码源构建
可以将Dockerfile文件放在项目里面，然后利用阿里云镜像平台自动生成镜像功能，生成镜像，生成之后可以直接在本地拉取远程镜像。
1. 可以在阿里云code，github，等代码管理平台，创建项目，然后将自己的Dockerfile放大项目，推送到远程代码管理平台，然后绑定到阿里云镜像仓库，在创建镜像仓库的时候，设置代码源的选项，设置到Dockerfile文件路径下面
2. 进入镜像列表-->管理-->构建-->立即构建，注意：构建设置里面要设置对的Dockefile路径，不然会构建失败
3. 构建成功，查看镜像，拉取镜像到本地