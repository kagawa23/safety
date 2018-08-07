# 前端安全

## xss (cross site scripting)
本该在接受数据的地方加入了脚本，结果运行脚本，造成了损失
最常用的可以使用`<script>alert(1)</script>`看是否存在漏洞
chrome会拦截这样的请求
危害：
1. 获取用户的cookie
2. 劫持前端逻辑
3. 偷取用户数据
4. 偷取密码

1. html注入
2. html属性注入 <img src onerror>
3. js注入
4. 富文本注入
