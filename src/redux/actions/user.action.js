import { SAVE_USER } from '../../constants';

export const saveUser = (payload) => ({
  type: SAVE_USER,
  payload,
});

export const loginUser = ({ email, password }) => {
  return async (dispatch) => {
    /*const response = await request({
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
      window.location.href = './serviciosue';
    } else {
      alert(`${response.message}`);
    }*/
    const response = { user: { name: 'jerson' }, token: 'asdassd' };
    localStorage.setItem('token', response.token);
    localStorage.setItem('user', JSON.stringify(response.user));
    dispatch(saveUser(response.user));
    alert(`Bienvenido ${response.user.name}`);
    window.location.href = './serviciosue';
  };
};
