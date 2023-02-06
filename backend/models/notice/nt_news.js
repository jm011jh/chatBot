const mongoose = require("mongoose")

const NoticeNewsSchema = new mongoose.Schema({
    id : {type:Number, required: true},//인덱스 부여
    is_show : {type:Boolean, required: true},//공개여부
    name: {type:String, required: true},//작성자 이름
    location: {type:Number, required: true},//위치
    desc : {type:String, required: true},//설명글
    link_01 : {type:String, required: false},//기타링크
    img : {type:String, required: false},//이미지링크
    date : {type:String, required: true},
    like : {type:Number, required:true}
},{collection: 'notice_news'})

module.exports = mongoose.model("NoticeNews",NoticeNewsSchema)
