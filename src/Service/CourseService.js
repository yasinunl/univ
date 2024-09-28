import axios from 'axios'
const basedUrl = "https://univapi-production.up.railway.app/api/v1.0/course";

export const addData = async (searchTerm) => {
    try{
        const bookData = await axios({url: basedUrl, method:"post", data:{
            "name": searchTerm[0],
            "link": searchTerm[1],
            "section": {
                "number": searchTerm[2]
            }
        }});
        return bookData.data;
    }
    catch(err) {
        return "failed"
    }
}
export const updateData = async (searchTerm) => {
    try{
        const bookData = await axios({url: basedUrl, method:"put", data:searchTerm});
        return bookData.data;
    }
    catch(err) {
        return "failed"
    }
}

export const deleteData = async (searchTerm) => {
    try{
        const bookData = await axios({url: basedUrl + "/" + searchTerm, method:"delete"});
        return bookData.data;
    }
    catch(err) {
        return "failed"
    }
}