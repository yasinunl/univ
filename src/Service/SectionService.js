import axios from 'axios'
const basedUrl = "https://univapi-production.up.railway.app/api/v1.0/section";

export const getAllSection = async () => {
    try{
        const bookData = await axios.get(basedUrl);
        return bookData.data;
    }
    catch(err) {
        return "failed"
    }
}
