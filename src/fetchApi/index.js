import axios from "axios";

const request = axios.create({
    baseURL: "https://tiktok.fullstack.edu.vn/api/",
});
const fetchApi = async (path, option) => {
    let data
    try {
        const res = await request.get(path, option);
        data = res.data.data
        return data
    } catch (err) {
        console.log(err);
        return
    }

};
export default fetchApi
export { request };
