import { create } from 'zustand'



// 建立 store hook
const usePsyStore = create((set) => ({
	// states and actions
  state: 0, //0:start, 1:question, 2:displayResult, 3: result
  questionState: 0,
  totalQuestions: 5,
  score: 0,
  updateState: (newState) => set( (state)=>({ state: newState}) ),
  updateQuestionState: (newState) => set( (state)=>({ questionState: newState}) ),
  updateTotalQuestions: (newState) => set( (state)=>({ totalQuestions: newState}) ),
  updateScore: (newState) => set( (state)=>({ score: newState}) )
}));


const useQuestionStore = create((set) => ({
  questions: {
    "1":{
      title: "當你抽到一張卡牌時，你會怎麼做？",
      options: [
        {title: "仔細研究卡牌效果和數值", value: 2},
        {title: "立刻加入牌組開始測試", value: 3},
        {title: "先放著，等需要時再說", value: 1}
      ]
    },
    "2":{
      title: "在對戰中遇到強敵時，你會？",
      options: [
        {title: "冷靜分析局勢，尋找突破口", value: 2},
        {title: "直接發動最強組合技", value: 3},
        {title: "默默等待對手失誤", value: 1}
      ]
    },
    "3":{
      title: "當你的牌組被對手克制時，你會？",
      options: [
        {title: "快速調整策略，改變戰術", value: 2},
        {title: "堅持自己的打法，相信運氣", value: 3},
        {title: "乾脆投降，重新開始", value: 1}
      ]
    },
    "4":{
      title: "在組建新牌組時，你會？",
      options: [
        {title: "參考主流牌組，加入自己的創意", value: 2},
        {title: "完全原創，打造獨特風格", value: 3},
        {title: "直接複製冠軍牌組", value: 1}
      ]
    },
    "5":{
      title: "如果有一天你成為卡牌大師，你會？",
      options: [
        {title: "繼續鑽研，追求更高境界", value: 2},
        {title: "開直播分享經驗，培養新人", value: 3},
        {title: "保持低調，享受遊戲樂趣", value: 1}
      ]
    }
  },
}))



export { usePsyStore, useQuestionStore }