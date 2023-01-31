/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx16194e329051008c',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'ef854ccc8356db9c974456567e1d905a',

  PROVINCE: '浙江',
  CITY: '宁波',

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
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
      customizedDateList: [
        // 天气
        { keyword: 'weather' },
        // 最低气温
        { keyword: 'min_temperature' },
        // 最高气温
        { keyword: 'max_temperature' },
        // 风向
        { keyword: 'wind_direction' },
        // 风级
        {keyword: 'wind_scale'},
        // 湿度
        {keyword: 'shidu'},
        // PM2.5
        {keyword: 'pm25'},
        // 日出时间
        {keyword: 'sunrise'},
        // 日落时间
        {keyword: 'sunset'},
        // 空气质量指数
        {keyword: 'aqi'},
        // 预防感冒提醒
        {keyword: 'ganmao'},
        // 天气温馨语
        {keyword: 'notice'},
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'qIOsXBXXr7zQt6I2fvg8Ehbz-m4Wzvk1Hq9I37DvwEI',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o--sv5sD9z6vHyniVseZokp9WAck',
    }
  ],

}

module.exports = USER_CONFIG
