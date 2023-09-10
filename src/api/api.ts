import axios from 'axios';
import { AppointmentProps, UserProps } from '../@types';

const backEndUrl = 'http://localhost:3000';

export const apiBackEnd = axios.create({
  baseURL: backEndUrl,
  // timeout: 1000,
  withCredentials: true,
});

export const getLogin = () => {
  return apiBackEnd
    .get('/client')
    .then((res) => res.data as UserProps)
    .catch((err) => console.log(err));
};

export const getAllAppointments = (userId: number) => {
  return apiBackEnd
    .get<UserProps>(`/client/${userId}`)
    .then((res) => res.data.appointments)
    .catch((err) => console.log(err));
};
