import axios from 'axios'

const getSchema = async () => {
    let data = []
    await axios.get("http://127.0.0.1:8011/schema").then(response => {
        data = response.data
    })
    return data
}

const getData = async () => {
    let data = []
    await axios.get("http://127.0.0.1:8011/data").then(response => {
        data = response.data
    })
    return data
}


export { getSchema, getData }
