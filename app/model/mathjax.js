'use strict';
/**
 * mathjax 图片生成服务
 */
const cloverx = require('cloverx');
const mjAPI = require('mathjax-node');
mjAPI.start();

async function getSvg(math) {
    return new Promise(function(resolve, reject) {
        mjAPI.typeset({
            math: math,
            format: 'TeX',
            svg: true
        }, function (data) {
            if(data.errors) return reject(cloverx.error.badParameter(data.errors));
            resolve(data.svg);
        });
    });
}

module.exports = {
    getSvg
};
