const mongoose = require("mongoose")

const NoticeHireSchema = new mongoose.Schema({
    is_hire : {type:Boolean, required: true},//마감여부
    id : {type:Number, required: true},//인덱스 부여
    position: {type:Number, required: true},//직종
    location: {type:Number, required: true},//위치
    desc : {type:String, required: true},//설명글
    cathegory : {type:String, required: true},//유형(정규,계약 등)
    ability : {type:Array, required: true},//요구사항,우대사항
    link_01 : {type:String, required: false},//기타링크
},{collection: 'notice_hire'})

module.exports = mongoose.model("NoticeHire",NoticeHireSchema)
