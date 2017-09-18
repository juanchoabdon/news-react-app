const api = {

  async getArticlesBySource(sourceId) {
    const response = await fetch(`https://newsapi.org/v1/articles?source=${sourceId}&apiKey=8e6c175db378493993454d24ccd5e3c7`)
    return await response.json();
  },

  async getSources() {
    const response = await fetch("https://newsapi.org/v1/sources?language=en")
    return await response.json();
  }

}


export default api;
