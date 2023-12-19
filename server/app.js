const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const cors = require('koa2-cors');  

const app = new Koa();
const router = new Router();

// 使用 cors 中间件  
app.use(cors());  

// 设置静态文件目录  
app.use(serve('../static'));

// 设置路由  
router.get('/', (ctx) => {
    ctx.body = 'Hello, this is an image proxy service!';
});

router.get('/:imagePath', (ctx) => {
    const imagePath = ctx.params.imagePath;
    ctx.body = serve('../static/' + imagePath);
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});