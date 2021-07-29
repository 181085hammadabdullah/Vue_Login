export const SET_Admin = (state, User) => {

    if (User.Errors) {
        state.errors = User.Errors;
        state.Admin = null;
        state.Admin_Token = null;
    } else {
        state.Admin = User.user;
        state.Admin_Token = User.token;
        state.errors = null;
    }

}

export const set_token = (state, token) => {
    state.Admin_Token = token;
}

export const Set_Admin_only = (state, admin) => {
    state.Admin = admin;
}
export const Admin_Logout = (state, value) => {
    state.Admin = value;
    state.Admin_Token = value;
    state.errors = value;
}