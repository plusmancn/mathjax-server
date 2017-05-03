'use strict';

const cloverx = require('cloverx');
const modelMathjax = cloverx.model.get('mathjax');

let router = new cloverx.Router();
let V = cloverx.validator;

/**jsdoc
 * 生成 svg 图片
 * @tags svg
 * @httpMethod get
 * @path /
 * @param {string#query} m - latex 语法，例如
 * ```
 * V=(-1)^S * M * 2^E
 * ```
 * @response svg
 */
router.push({
    method: 'get',
    path: '/',
    query: {
        m: V.string().max(4000).required()
    },
    processors: [
        // 直接输出，不过接下来的中间件
        async (ctx) => {
            let svg = await modelMathjax.getSvg(ctx.filter.query.m);
            ctx.response.set({
                'Content-Type': 'image/svg+xml'
            });
            ctx.body = svg;
        }
    ]
});

module.exports = router;
