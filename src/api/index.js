import postJson from '@/mock/GamePosts.json?raw'
import gameDataJson from '@/mock/GameData.json?raw'
import commentJson from '@/mock/GameComments.json?raw'
import postContentJson from '@/mock/Posts.json?raw'
import adJson from '@/mock/Ad.json?raw'

let posts = JSON.parse(postJson)
let gameData = JSON.parse(gameDataJson)
let gameComment = JSON.parse(commentJson)
let postContent = JSON.parse(postContentJson)
let ad = JSON.parse(adJson)

export default {
  getGameReports(size, start = 0) {
    return posts.data.filter(i=>i.type == "report").slice(start, size);
  },
  getGameEvalByGame(gameId) {
    return posts.data.find(i=>i.gameId == gameId && i.type == "eval");
  },
  getDeveloperMessage(gameId) {
    return posts.data.find(i=>i.gameId == gameId && i.type == "devmsg")
  },
  getGameEvals(size, start = 0) {
    return posts.data.filter(i=> i.type == "eval").slice(start, size);
  },
  getGameRanks(size, start = 0) {
    return gameData.data
      .sort((a, b) => b.publicScore - a.publicScore)
      .slice(start, size);
  },
  getGameData(size = null, start = 0) {
    return gameData.data.slice(start, size);
  },
  getGameDataAll() {
    return gameData.data;
  },
  getGameDateById(id) {
    return gameData.data.find(i => i.id == id);
  },
  getHotGames(size) {
    return gameData.data
      .sort((a, b) => b.hotPoint - a.hotPoint)
      .slice(0, size);
  },
  getAd() {
    return ad.data;
  },
  getPostContent(id) {
    return postContent.data.find(i=>i.id == id);
  },
  getGameComments(id) {
    return gameComment.data.filter(i=>i.gameId == id);
  }
}