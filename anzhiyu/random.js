var posts=["2013/12/24/categories/","2013/12/24/elements/","2019/07/25/code-highlight/","2013/12/25/gallery-post/","2013/12/25/excerpts/","2024/02/18/hello-world/","2013/12/26/images/","2013/12/24/link-post-without-title/","2013/12/24/link-post/","2018/07/24/markdown/","2013/12/25/tag-plugins/","2013/12/24/long-title/","2013/12/25/no-title/","2013/12/24/tags/","2013/12/24/中文測試/","2013/12/24/日本語テスト/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };