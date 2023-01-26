const express = require("express")
const multer = require("multer")
const Count= require("./models/count")
const NoticeHire = require("./models/notice/nt_hire")
const NoticeNews = require("./models/notice/nt_news")
const HirePosition = require("./models/hire_position")
const HireLocation = require("./models/hire_location")
const router = express.Router()
router.get("/test", (req,res) => {
    res.send("test here")
})
router.get("/get/info/hire/position", (req, res) => {
    HirePosition.find((error, result) => {
        if(error) console.log(error)
        res.send(result)
    })
})
router.get("/get/info/hire/location", (req, res) => {
    HireLocation.find((error, result) => {
        if(error) console.log(error)
        res.send(result)
    })
})
router.get("/get/notice/hire", (req, res) => {
    NoticeHire.find((error, result) => {
        if(error) console.log(error)
        res.send(result)
    })
})
router.get("/get/count/notice/hire",(req,res) => {
    Count.findOne({count_name: "notice_hire"},(error, result) => {
        if(error) console.log(error)
        res.send(result)
    })
})
router.get("/get/notice/news", (req, res) => {
    NoticeNews.find((error, result) => {
        if(error) console.log(error)
        res.send(result)
    })
})
router.get("/get/count/notice/news",(req,res) => {
    Count.findOne({count_name: "notice_news"},(error, result) => {
        if(error) console.log(error)
        res.send(result)
    })
})
router.post("/post/notice/hire", async (req, res) => {
    var new_noticeHire = new NoticeHire(req.body)
    new_noticeHire.save((err) => {
        console.log(err)
        if (err) return res.status(500).json({message: "hire save failed"});
        else return res.status(200).json({message:"hire save success", data: new_noticeHire})
    })
    Count.findOne({count_name: "notice_hire"}, (err, res) => {
        if (err) console.log(err)
        let increaseOne = res.count_num + 1
        Count.updateOne({count_name : "notice_hire"}, {count_num : increaseOne}, (error) => {
            if (error) console.log(error)
        })
    })
})
router.post("/post/notice/news", async (req, res) => {
    var new_noticeNews = new NoticeNews(req.body)
    new_noticeNews.save((err) => {
        console.log(err)
        if (err) return res.status(500).json({message: "news save failed"});
        else return res.status(200).json({message:"news save success", data: new_noticeNews})
    })
    Count.findOne({count_name: "notice_news"}, (err, res) => {
        if (err) console.log(err)
        let increaseOne = res.count_num + 1
        Count.updateOne({count_name : "notice_news"}, {count_num : increaseOne}, (error) => {
            if (error) console.log(error)
        })
    })
})
module.exports = router