import axios from 'axios';
import { APIaddressMainProps, UserProps } from '../@types';

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
    .catch((err) => {
      throw err;
    });
};

export const getAllAppointments = (userId: number) => {
  return apiBackEnd
    .get<UserProps>(`/client/${userId}`)
    .then((res) => res.data.appointments)
    .catch((err) => {
      throw err;
    });
};

export const updateClientInfos = (
  userId: number | null,
  data: UpdateDataProps
) => {
  return apiBackEnd
    .patch<UserProps>(`/client/${userId}`, data)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const getUnavailableDaysOfTheWeek = () => {
  return apiBackEnd
    .get('/unavailability/1')
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const getSpecificUnavailableDays = () => {
  return apiBackEnd
    .get('/unavailability')
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const fetchAddAppointment = (data: any) => {
  return apiBackEnd
    .post(`/client/${data.id}/appointment`, data)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const fetchDeleteAppointment = (
  appointmentId: number,
  userInfos: any
) => {
  return apiBackEnd
    .patch(`/appointment/${appointmentId}`, userInfos)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const fetchResetPassword = (data: any) => {
  return apiBackEnd
    .post(`/check-password`, data)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

// ADDRESS API
export const fetchAddressAPI = (addressToSearch: string) => {
  return addressGouvAPI
    .get<APIaddressMainProps>(
      `/?q=${addressToSearch}&type=housenumber&autocomplete=1`
    )
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
