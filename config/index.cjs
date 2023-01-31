/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // USE_PASSAGE: 'wechat-test',
  
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx16194e329051008c',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'ef854ccc8356db9c974456567e1d905a',
  // 功能开关,打开：true，关闭：false
    SWITCH: {
      /** 每日天气 */
      // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
      weather: true,

      /** 节假日 */
      // 下一休息日综合提醒, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
      holidaytts: true,

      /** 每日N句 */
      // 金山每日一句, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
      CIBA: true,

      // 每日一言, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
      oneTalk: true,

      // 土味情话(彩虹屁), 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
      earthyLoveWords: false,

      // 朋友圈文案, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
      momentCopyrighting: false,

      // 毒鸡汤, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
      poisonChickenSoup: false,

      // 古诗古文, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
      poetry: false,

      /** 星座运势 */
      // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
      horoscope: true,

      /** 生日消息和节日消息 */
      // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
      birthdayMessage: false,

      /** 学生课表 */
      // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
      courseSchedule: false,
    },
  
  /** 是否给文字设置多彩颜色, 和emoji不兼容 */
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: false,
  
  /** 每日一言 */
  // 每日一言的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: '',
  
  PROVINCE: '浙江',
  CITY: '宁波',
  // 新历生日, 仅用作获取星座运势, 格式必须
  horoscopeDate: '07-16',
  // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
  horoscopeDateType: '今日',
  // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
  openUrl: 'https://wangxinleo.cn',

  USERS: [
    {
      // 想要发送的人的名字
      name: '史蕾小宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o--sv5sD9z6vHyniVseZokp9WAck',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'qIOsXBXXr7zQt6I2fvg8Ehbz-m4Wzvk1Hq9I37DvwEI',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-16',
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 相见的日子
        { keyword: 'love_day', date: '2022-07-16' },
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-15' },
        // 结婚纪念日
        // { keyword: 'marry_day', date: '2022-09-09' },
      ],
      weatherDateList: [
        // 天气
        { keyword: 'weather' },
        // 最低气温
        { keyword: 'min_temperature' },
        // 最高气温
        { keyword: 'max_temperature' },
        // 风向
        { keyword: 'wind_direction' },
        // 风级
        { keyword: 'wind_scale'},
        // 湿度
        { keyword: 'shidu'},
        // PM2.5
        { keyword: 'pm25'},
        // 日出时间
        { keyword: 'sunrise'},
        // 日落时间
        { keyword: 'sunset'},
        // 空气质量指数
        { keyword: 'aqi'},
        // 预防感冒提醒
        { keyword: 'ganmao'},
        // 天气温馨语
        { keyword: 'notice'},
      ],
    },
    {
      name: '史蕾小宝宝的天气推送',
      id: 'o--sv5sD9z6vHyniVseZokp9WAck',
      useTemplateId: 'qIOsXBXXr7zQt6I2fvg8Ehbz-m4Wzvk1Hq9I37DvwEI',
      province: '',
      city: '',
      weatherDateList: []     
    },
  ],
    
}

module.exports = USER_CONFIG
