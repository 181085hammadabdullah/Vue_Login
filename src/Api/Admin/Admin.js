import Api from "../api";

const END_POINT1 = 'register';
const END_POINT2 = 'login';
const END_POINT3 = 'user';
const END_POINT4 = 'uploadImage';
export default {

    Admin_Reg(data) {
        return Api.post(END_POINT1, data);
    },
    Admin_Login(data) {
        return Api.post(END_POINT2, data);
    },
    getuserdata(token) {
        return Api.get(END_POINT3, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    },
    uploadimage(data) {
        return Api.post(END_POINT4, data)

    },
}