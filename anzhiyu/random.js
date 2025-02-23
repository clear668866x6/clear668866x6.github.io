var posts=["2025/02/14/整理/","2025/02/05/每日练习/","2025/02/17/知识点系列——基础数据结构/","2025/02/15/队内训练1/","2025/02/15/队内训练2/","2025/01/30/abc377/","2025/01/13/abc137/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };