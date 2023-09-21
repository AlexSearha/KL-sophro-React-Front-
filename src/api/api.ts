import axios from 'axios';
import { APIaddressGouvProps, APIaddressMainProps, UserProps } from '../@types';

interface UpdateDataProps {
  [key: string]: string;
}

const backEndUrl = 'http://localhost:3000';
const addressGouvAPIurl = 'https://api-adresse.data.gouv.fr/search';

export const apiBackEnd = axios.create({
  baseURL: backEndUrl,
  withCredentials: true,
});

export const addressGouvAPI = axios.create({
  baseURL: addressGouvAPIurl,
});

export const getLogin = () => {
  return apiBackEnd
    .get<UserProps>('/client')
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getAllAppointments = (userId: number) => {
  return apiBackEnd
    .get<UserProps>(`/client/${userId}`)
    .then((res) => res.data.appointments)
    .catch((err) => console.log(err));
};

export const updateClientInfos = (
  userId: number | null,
  data: UpdateDataProps
) => {
  return apiBackEnd
    .patch<UserProps>(`/client/${userId}`, data)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getUnavailableDaysOfTheWeek = () => {
  return apiBackEnd
    .get('/unavailability/1')
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getSpecificUnavailableDays = () => {
  return apiBackEnd
    .get('/unavailability')
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const fetchAddAppointment = (data: any) => {
  return apiBackEnd
    .post(`/client/${data.id}/appointment`, data)
    .then((res) => res.data)
    .catch((err) => console.log('err: ', err));
};

export const fetchDeleteAppointment = (
  appointmentId: number,
  userInfos: any
) => {
  return apiBackEnd
    .patch(`/appointment/${appointmentId}`, userInfos)
    .then((res) => res.data)
    .catch((err) => console.log('err: ', err));
};

export const fetchAddressAPI = (addressToSearch: string) => {
  return addressGouvAPI
    .get<APIaddressMainProps>(
      `/?q=${addressToSearch}&type=housenumber&autocomplete=1`
    )
    .then((res) => res.data)
    .catch((err) => console.log('err: ', err));
};
