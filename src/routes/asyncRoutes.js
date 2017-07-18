/**
 * Created by hotread on 2017/6/14.
 */
if (typeof require.ensure !== "function") require.ensure = function(d, c) { c(require) };

const indexComponent=  r => require.ensure([], () => r(require('../views/index.vue')), 'indexComponent')
const componentShow=  r => require.ensure([], () => r(require('../views/ComponentShow.vue')), 'aboutComponent')
const notFoundComponent=  r => require.ensure([], () => r(require('../views/NotFound.vue')), 'noFoundComponent')


export {
    indexComponent,
    componentShow,
    notFoundComponent
}