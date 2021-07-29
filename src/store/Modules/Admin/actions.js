import Admin from "../../../Api/Admin/Admin";
import router from '../../../router'
export const Admin_Login = ({ commit }, user) => {
    Admin.Admin_Login(user).then(response => {

        if (response.data.Errors) {
            console.log(response.data.Errors)
        } else {
            commit('set_token', response.data.token);
            localStorage.setItem('token', response.data.token);
            Admin.getuserdata(response.data.token).then(response1 => {
                if (response1.data.Error) {
                    localStorage.removeItem('token');
                    commit('set_token', null);
                } else {
                    commit('Set_Admin_only', response1.data.user);
                    localStorage.setItem('Admin', response1.data.user);
                    localStorage.setItem('Admin_Id', response1.data.user.id);
                    localStorage.setItem('Admin_Name', response1.data.user.name);
                    localStorage.setItem('Admin_Email', response1.data.user.email);
                    router.push({ name: 'AdminHome' });
                }
            })
        }
    })
}
export const Admin_Reg = ({ commit }, user) => {
    Admin.Admin_Reg(user).then(response => {
        if (response.data.Errors) {
            console.log(response.data.Errors)
        }
        commit('SET_Admin', response.data);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('Admin', response.data.user);
        localStorage.setItem('Admin_Id', response.data.user.id);
        localStorage.setItem('Admin_Name', response.data.user.name);
        localStorage.setItem('Admin_Email', response.data.user.email);
        router.push({ name: 'AdminHome' });
    })
}
export const Admin_logout = ({ commit }) => {
    localStorage.removeItem('token');
    localStorage.removeItem('Admin');
    localStorage.removeItem('Admin_Id');
    localStorage.removeItem('Admin_Name');
    localStorage.removeItem('Admin_Email');
    commit('Admin_Logout', null);
}

export const uploadimage = ({ commit }, data) => {
    Admin.uploadimage(data).then(response => {
        console.log(response);
    });
    commit('Admin_Logout', null);
}