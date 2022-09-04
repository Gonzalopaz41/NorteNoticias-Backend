require ('dotenv/config');
const axios = require ('axios');
const newsSchema = require('../models/newsModel')

const getAdminController =async (req,res)=>{
  const getAll = await newsSchema.find({})
  res.json(getAll)
}

const postNewsController = async (req,res) =>{ 
  const {category,title,img,introduction,description,date,author} = req.body

  try {
    const news = new newsSchema({
      category:category,
      title:title,
      img:img,
      introduction:introduction,
      description:description,
      date:date,
      author:author
    })
    const newNews = await news.save()
    res.status(201).json(newNews)
    } catch (error) {
      res.status(401).json(error)
    }
}

const deleteNews = async (req,res) =>{
const {id} = req.params
const getById = await newsSchema.findByIdAndDelete(id)

if (getById !== null){
  res.status(200).json("se elimino el recurso")
  }else{
  res.status(404).json("no se encontro el recurso")
  }
}


const UpdateNewsController = async (req,res)=>{
  const body = req.body
  const {id} = req.params
  const updateNews = await newsSchema.findByIdAndUpdate(id,body,{new:true})
  res.json(updateNews)
}

module.exports = {getAdminController, postNewsController,deleteNews,UpdateNewsController}