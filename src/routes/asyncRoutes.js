/**
 * Created by hotread on 2017/6/14.
 */
if (typeof require.ensure !== "function") require.ensure = function(d, c) { c(require) };

const indexComponent=  r => require.ensure([], () => r(require('../views/index.vue')), 'indexComponent')
const aboutComponent=  r => require.ensure([], () => r(require('../views/about.vue')), 'aboutComponent')
const notFoundComponent=  r => require.ensure([], () => r(require('../views/NotFound.vue')), 'noFoundComponent')


export {
    indexComponent,
    aboutComponent,
    notFoundComponent
}