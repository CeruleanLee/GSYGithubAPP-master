/**
 * Created by guoshuyu on 2017/11/7.
 */

import React, {Component} from 'react';
import {
    View, Image, StatusBar, Platform, Animated, Easing
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles, {screenHeight, screenWidth} from "../style"
import I18n from '../style/i18n'
import loginActions from '../store/actions/login'
import userActions from '../store/actions/user'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Constant from "../style/constant"
import SplashScreen from './widget/native/SplashNative'
import LottieView from 'lottie-react-native';

/*组件挂载时有关的生命周期*/
/*constructor()
componentWillMount()
render()
componentDidMount()*/
/*上面这些方法的调用是有次序的，由上而下，也就是当说如果你要获取外部数据并加载到组件上，
只能在组件"已经"挂载到真实的网页上才能作这事情，其它情况你是加载不到组件的。

componentDidMount方法中的代码，是在组件已经完全挂载到网页上才会调用被执行，
所以可以保证数据的加载。此外，在这方法中调用setState方法，会触发重渲染。所以，
官方设计这个方法就是用来加载外部数据用的，或处理其他的副作用代码。

constructor被调用是在组件准备要挂载的最一开始，所以此时组件尚未挂载到网页上。

componentWillMount方法的调用在constructor之后，在render之前，在这方法里
的代码调用setState方法不会触发重渲染，所以它一般不会用来作加载数据之用，它也很少被使用到。

一般的从后台(服务器)获取的数据，都会与组件上要用的数据加载有关，所以都在
componentDidMount方法里面作。虽然与组件上的数据无关的加载，也可以在constructor里作，
但constructor是作组件state初绐化工作，并不是设计来作加载数据这工作的，
所以所有有副作用的代码都会集中在componentDidMount方法里。*/
/**
 * 欢迎页
 */
class WelcomePage extends Component {

    constructor(props) {
        super(props);
        this.toNext = this.toNext.bind(this);
        this.state = {
            progress: new Animated.Value(0),
        };
    }


    componentDidMount() {
        //处理白屏
        if (Platform.OS === 'android') {
            SplashScreen.hide();
        }
        //是否登陆，是否用户信息
        userActions.initUserInfo().then((res) => {
            this.toNext(res)
        });
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
        }).start();
    }
    //在组件从 DOM 中移除的时候立刻被调用。
    componentWillUnmount() {
        if (this.refs.lottieView) {
            this.refs.lottieView.reset();
        }
    }

    toNext(res) {
        setTimeout(() => {
            if (res && res.result) {
                //清除路由堆栈并将场景推入第一个索引. 没有过渡动画。
                Actions.reset("root");
            } else {
                Actions.reset("LoginPage");
            }
        }, 2100);
    }

    render() {
        return (
            <View style={[styles.mainBox, {backgroundColor: Constant.white}]}>
                <StatusBar hidden={true}/>
                <View style={[styles.centered, {flex: 1}]}>
                    <Image source={require("../img/welcome.png")}
                           resizeMode={"contain"}
                           style={{width: screenWidth, height: screenHeight}}/>
                    <View style={[styles.absoluteFull, styles.centered, {justifyContent: "flex-end"}]}>
                        <View style={[styles.centered, {width: 150, height:150}]}>
                            <LottieView
                                ref="lottieView"
                                style={{
                                    width: 150,
                                    height: 150,
                                }}
                                source={require('../style/lottie/animation-w800-h800.json')}
                                progress={this.state.progress}
                            />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
//用于从 UI 组件生成容器组件     WelcomePage ui组件

//Provider和connect，前者使React组件可被连接（connectable），后者把 React 组件和 Redux 的 store 真正连接起来
//connect()接收四个参数，它们分别是mapStateToProps，mapDispatchToProps，mergeProps和options。
//mapStateToProps(state, ownProps) : stateProps
//这个函数的第一个参数就是 Redux 的store  不必将state中的数据原封不动地传入组件，可以根据state中的数据，动态地输出组件需要的（最小）属性
//函数的第二个参数ownProps，是MyComp自己的props

//mapDispatchToProps(dispatch, ownProps): dispatchProps   将action作为props绑定到Comp上


//函数connect甚至react-redux的核心在于：将 Redux 中 store 的 state 绑定到组件的属性上，
// 使得对 state 的修改能够直接体现为组件外观的更改。因此，参数mapStateToProps是非常重要的，
// 但是参数mapDispatchToProps则比较多余——因为简单粗暴地导入全局 store 同样能达到相同的目的


//不管是stateProps还是dispatchProps，都需要和ownProps merge 之后才会被赋给MyComp。
// connect的第三个参数就是用来做这件事。通常情况下，你可以不传这个参数，
// connect就会使用Object.assign替代该方法。
export default connect(state => ({
    state
}), dispatch => ({
    //bindActionCreators函数，来将action包装成直接可被调用的函数。
    actions: bindActionCreators(loginActions, dispatch),
}))(WelcomePage)
