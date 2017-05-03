'use strict';
/**
 * <plusmancn@gmail.com> created at 2017.01.10 19:10:43
 *
 * Copyright (c) 2017 Souche.com, all rights
 * reserved.
 *
 * 数据类型定义
 */
module.exports = {
    StdResponse: {
        type: 'object',
        description: '搜车标准返回-模块包含',
        properties: {
            success: {
                type: 'boolean',
                description: '请求是否成功'
            },
            code: {
                type: 'number',
                description: '请求状态码，10000 为无错误',
                default: 10000
            },
            msg: {
                type: 'string',
                description: '错误描述'
            }
        }
    }
};
