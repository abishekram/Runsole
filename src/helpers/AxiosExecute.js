import Axios from "axios"

export const AxiosExecute = (req) => {

    console.log(req);

    return Axios({
        ...req,
        responseType: 'text'
    });
}