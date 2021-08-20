import axios from 'axios'

const url = 'http://localhost:8070/api/products/'

class PostService {
  // Get Products

  static getPosts() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url)
        const data = res.data
        console.log(data)

        resolve(
          data.map((product) => ({
            ...product
          }))
        )
      } catch (e) {
        reject(e)
      }
    })
  }

  // Create Product

  static insertProduct(text) {
    return axios.post(url, {
      text
    })
  }

  // Delete Product

  static deletePost(id) {
    return axios.delete(`${url}${id}`)
  }
}

export default PostService
