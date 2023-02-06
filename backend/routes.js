const express = require("express")
const multer = require("multer")
const Count= require("./models/count")
const NoticeHire = require("./models/notice/nt_hire")
const NoticeNews = require("./models/notice/nt_news")
const HirePosition = require("./models/hire_position")
const HireLocation = require("./models/hire_location")
const ProjectType = require("./models/project_type.js")
const RecruitType = require("./models/recruit_type.js")
const ProjectRequest = require("./models/project_request.js")
const RecruitRequest = require("./models/recruit_request.js")
const router = express.Router()
router.get("/get/count/:id", (req, res) => {
    let thisId = req.params.id
    Count.findOne({count_name: thisId}, (error, result) => {
        if(error) console.log(error)
        res.send(result)
    })
})
router.get("/get/info/contact/type", (req, res) => {
    ProjectType.find((error, result) => {
        if(error) console.log(error)
        res.send(result)
    })
})
router.get("/get/info/recruit/type", (req, res) => {
    RecruitType.find((error, result) => {
        if(error) console.log(error)
        res.send(result)
    })
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
router.get("/get/notice/news", (req, res) => {
    NoticeNews.find((error, result) => {
        if(error) console.log(error)
        res.send(result)
    })
})
router.post("/post/notice/hire", async (req, res) => {
    var new_noticeHire = new NoticeHire(req.body)
    new_noticeHire.save((err) => {
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
router.post("/post/notice/news/like/:type", async (req, _res) => {
    NoticeNews.findOne({id: req.body.id}, (err, res) => {
        setOne = req.params.type === "plus" ? res.like + 1 : res.like - 1
        if (err) console.log(err)
        NoticeNews.updateOne({id: req.body.id}, {like: setOne}, (error) => {
            if (error) console.log(error)
        })
    })
})
router.post("/post/request/project", async (req, res) => {
    var new_projectRequest = new ProjectRequest(req.body)
    new_projectRequest.save((err) => {
        if (err) return res.status(500).json({message: "projectRequest save failed"});
        else return res.status(200).json({message:"projectRequest save success", data: new_projectRequest})
    })
    Count.findOne({count_name: "project_request"}, (err, res) => {
        if (err) console.log(err)
        let increaseOne = res.count_num + 1
        Count.updateOne({count_name : "project_request"}, {count_num : increaseOne}, (error) => {
            if (error) console.log(error)
        })
    })
})
router.post("/post/request/recruit", async (req, res) => {
    var new_recruitRequest = new RecruitRequest(req.body)
    new_recruitRequest.save((err) => {
        if (err) return res.status(500).json({message: "recruitRequest save failed"});
        else return res.status(200).json({message:"recruitRequest save success", data: new_recruitRequest})
    })
    Count.findOne({count_name: "recruit_request"}, (err, res) => {
        if (err) console.log(err)
        let increaseOne = res.count_num + 1
        Count.updateOne({count_name : "recruit_request"}, {count_num : increaseOne}, (error) => {
            if (error) console.log(error)
        })
    })
})
module.exports = router