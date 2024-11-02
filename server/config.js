/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [{
        type: 0,
        count: 1,
        title: "",
        text: "特别奖"
    },
    {
        type: 1,
        count: 1,
        text: "一等奖",
        title: "迪斯尼门票",
        img: "../img/disney.jpg"
    },
    {
        type: 2,
        count: 2,
        text: "二等奖",
        title: "玲娜贝儿公仔",
        img: "../img/linabell.jpg"
    },
    {
        type: 3,
        count: 3,
        text: "三等奖",
        title: "安泰定制纪念卫衣",
        img: "../img/shirt.jpg"
    }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 1, 1];

/**
 * 卡片公司名称标识
 */
const COMPANY = "ACEM";

module.exports = {
    prizes,
    EACH_COUNT,
    COMPANY
};