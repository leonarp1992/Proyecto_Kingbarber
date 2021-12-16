import { SAVE_USER } from '../../constants';
import { apiAuth } from '../../utils/api';
import request from '../../utils/request';

export const saveUser = (payload) => ({
  type: SAVE_USER,
  payload,
});

export const loginUser = ({ email, password }) => {
  return async (dispatch) => {
    const response = await request({
      link: apiAuth,
      body: {
        email,
        password,
      },
      method: 'POST',
    });
    if (response.success) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      dispatch(saveUser(response.user));
      alert(`Bienvenido ${response.user.name}`);
      if(response.rol === "user"){
        window.location.href = './serviciosue';
      }else{
        window.location.href = './agendaua';
      }
    } else {
      alert(`${response.message}`);
    }
  };
};
