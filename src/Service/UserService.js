import axios from 'axios'
const basedUrl = "https://univapi-production.up.railway.app/api/v1.0/user";

export const loginData = async (searchTerm) => {
    try{
        const bookData = await axios.post(basedUrl + "/login?pass=" + searchTerm );
        return bookData.data;
    }
    catch(err) {
        return "failed"
    }
}
export const loginDataAdmin = async (searchTerm) => {
    try{
        const bookData = await axios.post(basedUrl + "/login?pass=" + searchTerm );
        if(bookData.data.role !== "admin") return "failed";
        return bookData.data;
    }
    catch(err) {
        return "failed"
    }
}