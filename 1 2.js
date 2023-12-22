/*

新版需要自己抓包找域名

[rewrite_local]

#哔哩哔哩解锁大会员
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header blbl.js

[mitm]
hostname = *.biliapi.*, *.bilibili.*

*/


[mitm]
hostname = *.biliapi.*, *.bilibili.*

*/

var modifiedHeaders = $request.headers;

//modifiedHeaders['Cookie'] = '';

modifiedHeaders['Authorization'] = 'identify_v1 ff2981e96f3d9353f4e65dc800e2a8c1CjCkpbGp9LUOgYl652fQXYZRWfG1T_cyJPW-IJd3xP5HJsvJmXOunMsi5IAbBrmzB-sSVjg4clRudEcyQjViNWdGaUJzZVo5VHF2ZVJ4NXJ5S3lGOFVXXzFhM3FabGtHWHFyTnRMWG92OUhCSjJQSnFybDBZbGd5RkItQW41ekxSZ0VaclBjY01RIIEC';

modifiedHeaders['User-Agent'] = 'UA';

$done({headers : modifiedHeaders});
