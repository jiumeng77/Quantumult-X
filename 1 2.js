
[mitm]
hostname = *.biliapi.*, *.bilibili.*

*/

var modifiedHeaders = $request.headers;

//modifiedHeaders['Cookie'] = '';

modifiedHeaders['Authorization'] = 'identify_v1 ff2981e96f3d9353f4e65dc800e2a8c1CjCkpbGp9LUOgYl652fQXYZRWfG1T_cyJPW-IJd3xP5HJsvJmXOunMsi5IAbBrmzB-sSVjg4clRudEcyQjViNWdGaUJzZVo5VHF2ZVJ4NXJ5S3lGOFVXXzFhM3FabGtHWHFyTnRMWG92OUhCSjJQSnFybDBZbGd5RkItQW41ekxSZ0VaclBjY01RIIEC';

modifiedHeaders['User-Agent'] = 'UA';

$done({headers : modifiedHeaders});
