import {createApp} from 'vue'

const app = createApp({
    data() {
        return {
            count1: '0',
            count2: '0',
            count3: '0',
            count4: '0',
            count5: '0'
        }
    },

    methods: {
        addToCount1() {
            this.count1++
        },

        subtractCount1() {
            this.count1--
        },

        addToCount2() {
            this.count2++
        },

        subtractCount2() {
            this.count2--
        },

        addToCount3() {
            this.count3++
        },

        subtractCount3() {
            this.count3--
        },

        addToCount4() {
            this.count4++
        },

        subtractCount4() {
            this.count4--
        },

        addToCount5() {
            this.count5++
        },

        subtractCount5() {
            this.count5--
        },
    }
}).mount("#player-area")

// const questions= createApp({
//     data() {
//         return {
//             count: 0,

//             questionArray: [
//                 {
//                     question: "Welcome EmblemCon!"
//                 },

//                 {
//                     question: "Which character do you think deserves a different ending? Happier is optional"
//                 },

//                 {
//                     question: "Sell me on your OTP"
//                 },

//                 {
//                     question: "Which character would trick sorority girls into summoning a demon?"
//                 },

//                 {
//                     question: "Which character (or characters) would show up to Area 51 raids the year after?"
//                 },

//                 {
//                     question: "Which character would be an open Sanrio stan?"
//                 },

//                 {
//                     question: "Which character would start a fight in a Denny’s parking lot? (Credit to JaidenAnimations)"
//                 },

//                 {
//                     question: "Which character would star in a sequel to “Cats”"
//                 },

//                 {
//                     question: "Why didn’t Alear receive any sleep last night?"
//                 },

//                 {
//                     question: "Who would you want Henry to swap bodies with?"
//                 },

//                 {
//                     question: "Who’s cuter than Hortensia?"
//                 },

//                 {
//                     question: "What’s the weirdest item Byleth has found? (Returned is optional)"
//                 },

//                 {
//                     question: "What was the most baffling commission Ignatz has received?"
//                 },

//                 {
//                     question: "FINAL QUESTION! Go find me an outfit for Rosado to wear. Cutest wins!"
//                 },
//             ]
//         }
//     },

//     methods: {
//        previousQuestion() {
//         this.count--

//         if (this.count < 0) {
//             count = questionArray.length-1
//         }
//        },

//        nextQuestion() {
//         this.count++

//         if (this.count>=questionArray.length) {
//             count = 0
//         }
//        }
//     }
// }).mount("#questions")