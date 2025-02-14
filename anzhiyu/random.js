var posts=["2025/02/14/整理/","2025/02/05/每日练习/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };