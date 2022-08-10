
const Koa = require("koa");
const app = new Koa();

// response
app.use((ctx) => {
  if (ctx.url === "/") {
    ctx.status = 200;
    ctx.body = `<div><a style="margin-left: 30px;" class="headlink" href="/">Index</a><a style="margin-left: 30px;" class="headlink" href="/about">About</a><a style="margin-left: 30px;" class="headlink" href="/contact">Contact</a></div><h1>Index Safyası</h1>`;
  }
  else if (ctx.url === "/about"){
    ctx.status = 200;
    ctx.body = `<div><a style="margin-left: 30px;" class="headlink" href="/">Index</a><a style="margin-left: 30px;" class="headlink" href="/about">About</a><a style="margin-left: 30px;" class="headlink" href="/contact">Contact</a></div><h1>Hakkimda Safyası</h1>`;
  }
  else if (ctx.url === "/contact"){
    ctx.status = 200;
    ctx.body =`<div><a style="margin-left: 30px;" class="headlink" href="/">Index</a><a style="margin-left: 30px;" class="headlink" href="/about">About</a><a style="margin-left: 30px;" class="headlink" href="/contact">Contact</a></div><h1>Iletisim Safyası</h1>`;
  }
  else{
    ctx.status = 404;
    ctx.body = "<h1>404 Sayfa Bulunamadı.</h1>.";
  }
});

app.listen(3000);