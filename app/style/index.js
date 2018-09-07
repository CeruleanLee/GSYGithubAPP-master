/**
 * Created by guoshuyu on 2017/11/7.
 */
import React, {StyleSheet, Dimensions, PixelRatio, Platform, StatusBar} from "react-native";
import * as constant from "./constant"

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;
export const navBarHeight = (Platform.OS === 'ios') ? constant.iosnavHeaderHeight : constant.andrnavHeaderHeight;
export const statusHeight = (Platform.OS === 'android') ? StatusBar.currentHeight : 25;
export const drawerWidth = screenWidth / 3 * 2;

export const shadowRadius = (Platform.OS === 'android') ? 5 : 2;
export const elevation = (Platform.OS === 'android') ? 2 : 1;

const styles = StyleSheet.create({
    //适用于所有场景的Style（可选）
    routerStyle: {
        //设置router的样式
        flex: 1,
        backgroundColor: constant.mainBackgroundColor,
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,

    },
    navigationBar: {
        backgroundColor: constant.primaryColor,
        paddingTop: StatusBar.currentHeight,
        height: navBarHeight,
    },
    titleTextStyle: {
        color: constant.titleTextColor,
        fontSize: constant.normalTextSize,
        fontWeight: "bold"
    },
    mainBgColor: {
        backgroundColor: constant.mainBackgroundColor
    },
    mainBox: {
        backgroundColor: constant.mainBackgroundColor,
        flex: 1
    },
    flex: {
        flex: 1,
    },
    flexDirectionRow: {
        flexDirection: 'row',
        flex: 1,
    },
    flexDirectionColumn: {
        flexDirection: "column",
        flex: 1,
    },
    flexDirectionRowNotFlex: {
        flexDirection: 'row',
    },
    flexDirectionColumnNotFlex: {
        flexDirection: "column",
    },
    justifyCenter: {
        //弹性盒子元素在主轴（横轴）的对齐方式
        //取值：
        //
        // justify-content: flex-start | flex-end | center | space-between | space-around;
        // 1
        // flex-start: 弹性盒子元素将向行起始位置对齐。第一个元素与左起始边界对齐，后面的元素接着第一个元素进行排列。
        //
        // flex-end: 弹性盒子元素将向行结束位置对齐。整体靠着行结束的位置排列。
        //
        // center：整体居中显示。
        //
        // space-between: 弹性盒子元素均匀分布。第一个元素的边界与行的主起始位置的边界对齐，同时最后一个元素的边界与行的主结束位置的边距对齐，而剩余的伸缩盒项目则平均分布，并确保两两之间的空白空间相等。
        //
        // space-around: 弹性盒子元素均匀分布。两端保留子元素与子元素之间间距大小的一半。
        justifyContent: "center"
    },
    centered: {
        justifyContent: "center",
        alignItems: "center"
    },
    centerV: {
        justifyContent: "center",
    },
    centerH: {
        alignItems: "center"
    },
    justifyBetween: {
        justifyContent: "space-between"
    },
    alignItemsEnd: {
        alignItems: "flex-end"
    },
    justifyEnd: {
        justifyContent: "flex-end"
    },
    welcomeText: {
        color: constant.primaryColor,
        fontSize: constant.largetTextSize,
        fontWeight: "bold",
        textAlign: "center"
    },
    smallTextWhite: {
        color: constant.TextColorWhite,
        fontSize: constant.smallTextSize
    },
    smallText: {
        color: constant.mainTextColor,
        fontSize: constant.smallTextSize
    },
    subLightSmallText: {
        color: constant.subLightTextColor,
        fontSize: constant.smallTextSize
    },
    miLightSmallText: {
        color: constant.miWhite,
        fontSize: constant.smallTextSize
    },
    subSmallText: {
        color: constant.subTextColor,
        fontSize: constant.smallTextSize
    },
    middleText: {
        color: constant.mainTextColor,
        fontSize: constant.middleTextWhite
    },
    normalText: {
        color: constant.mainTextColor,
        fontSize: constant.normalTextSize
    },
    subNormalText: {
        color: constant.subTextColor,
        fontSize: constant.normalTextSize
    },
    normalTextWhite: {
        color: constant.TextColorWhite,
        fontSize: constant.normalTextSize
    },
    normalTextMitWhite: {
        color: constant.miWhite,
        fontSize: constant.normalTextSize
    },
    normalTextLight: {
        color: constant.primaryLightColor,
        fontSize: constant.normalTextSize
    },
    middleTextWhite: {
        color: constant.TextColorWhite,
        fontSize: constant.middleTextWhite
    },

    largeText: {
        color: constant.mainTextColor,
        fontSize: constant.bigTextSize
    },
    largeTextWhite: {
        color: constant.TextColorWhite,
        fontSize: constant.bigTextSize
    },
    absoluteFull: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 999,
    },
    shadowCard: {
        shadowColor: constant.cardShadowColor,
        shadowOffset: {
            width: 1,
            height: 2
        },
        shadowOpacity: 0.7,
        shadowRadius: shadowRadius,
        elevation: 2,
        backgroundColor: constant.cardBackgroundColor
    },
    shadowText: {
        textShadowColor: constant.cardShadowColor,
        textShadowOffset: {width: 0, height: 0.4},
        textShadowRadius: 0.4
    },
    inCode: {
        color: constant.subTextColor,
        backgroundColor: '#eeeeee',
        borderColor: '#dddddd',
        borderRadius: 3,
        borderWidth: 1,
        padding: constant.normalMarginEdge,
    },
    pCode: {
        color: constant.subTextColor,
        backgroundColor: '#eeeeee',
        borderColor: '#cccccc',
        borderRadius: 1,
        borderWidth: 1,
        padding: constant.normalMarginEdge,
    }
});

export default styles;

