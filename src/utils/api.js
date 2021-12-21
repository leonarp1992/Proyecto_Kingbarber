const baseUrl="http://localhost:3002/api";
export const apiServicios = baseUrl + '/services';
export const apiCreateServices = apiServicios + '/create';
export const apiUsers = baseUrl + '/users';
export const apiCreateUsers = apiUsers + '/create';
export const apiCreateBarbers = apiUsers + '/createbarber';
export const apiGetBarbers = apiUsers + '/barbers';
export const apiAuth = baseUrl + '/auth';
export const apiReservas = baseUrl + '/reserva';
export const apiReservasBarber = apiReservas + '/barber';
export const apiCreateReservas = apiReservas + '/create'; 
