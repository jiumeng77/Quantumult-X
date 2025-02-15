// Loon 增强版去广告脚本
// 功能：拦截广告域名 + URL关键词 + 正则匹配
// 作者：你的名字（可删除）
// 更新时间：2024-03-20

// ==================== 配置区域 ====================
const debugMode = false; // 调试模式（true=显示拦截日志）

// 广告域名黑名单（支持子域名通配 *.xxx.com）
const adDomains = [
  "ad.com",
  "*.doubleclick.net",
  "*.googlesyndication.com",
  "*.googleadservices.com",
  "*.amazon-adsystem.com",
  "*.adnxs.com",
  "*.adsrvr.org",
  "*.criteo.com",
  "*.taboola.com",
  "*.advertising.com",
  "*.tracking.com",
  "*.analytics.com" // 示例，按需添加
];

// URL路径关键词黑名单（匹配任意位置）
const urlKeywords = [
  "/ad/",
  "/ads/",
  "/advert/",
  "banner",
  "popup",
  "sponsor",
  "tracking",
  "analytics"
];

// 高级正则匹配（用于复杂广告URL）
const regexPatterns = [
  /\/ad\/\d+\.(jpg|mp4)/, // 拦截类似 /ad/123.jpg 的请求
  /[?&]ad_position=/,     // 拦截含 ad_position 参数的请求
  /_300x250\.html/        // 拦截常见广告尺寸命名
];

// ==================== 核心逻辑 ====================
function isAdRequest(url) {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;
    const pathname = parsedUrl.pathname.toLowerCase();
    const fullUrl = parsedUrl.href.toLowerCase();

    // 1. 域名匹配检查
    if (adDomains.some(domain => {
      if (domain.startsWith("*.")) {
        return hostname.endsWith(domain.slice(2));
      }
      return hostname === domain;
    })) {
      debugLog(`[拦截] 广告域名: ${hostname}`);
      return true;
    }

    // 2. URL关键词检查
    if (urlKeywords.some(keyword => fullUrl.includes(keyword))) {
      debugLog(`[拦截] URL关键词: ${keyword}`);
      return true;
    }

    // 3. 正则表达式检查
    if (regexPatterns.some(regex => regex.test(fullUrl))) {
      debugLog(`[拦截] 正则匹配: ${regex}`);
      return true;
    }

    return false;
  } catch (e) {
    console.log(`广告检测异常: ${e}`);
    return false;
  }
}

function debugLog(message) {
  if (debugMode) console.log(message);
}

// ==================== 主程序 ====================
const request = $request;
if (isAdRequest(request.url)) {
  debugLog(`最终拦截: ${request.url}`);
  $done({ cancel: true }); // 拦截请求
} else {
  $done(request); // 放行请求
}
