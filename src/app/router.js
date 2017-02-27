/**
 * @file 路由模块： 可实现代码分割, 按需加载
 * @desc: 具体参考 https://github.com/ReactTraining/react-router/tree/master/examples/auth-with-shared-root
 * @author: liangzhongling
 * 2016.11.07
 */
export default {
    component: require('./components/App').default,
    childRoutes: [{
        path: '/',
        getComponent: (nextState, cb) => {
            return require.ensure([], (require) => {
                cb(null, require('./components/Main.js').default)
            }, 'index')
        }
    },{
        path: '/me',
        getComponent: (nextState, cb) => {
            return require.ensure([], (require) => {
                cb(null, require('./components/AboutMe/index').default)
            }, 'me')
        }
    }]
}