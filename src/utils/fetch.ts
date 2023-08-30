// api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrlBackEndAPI = 'http://localhost:3000';
const baseUrlAddressAPI = 'https://api-adresse.data.gouv.fr/search/'; // ?q=20%20avenue%20de%20S%C3%A9gur%2C%20Paris&type=housenumber&autocomplete=1'

export const apiBackEnd = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseUrlBackEndAPI }),
  endpoints: (builder) => ({
    // QUERY GET
    fetchClient: builder.query({
      query: () => '/client',
    }),
    fetchClientById: builder.query({
      query: (id) => `/client/${id}`,
    }),
    fetchDoctorById: builder.query({
      query: (id) => `/doctor/${id}`,
    }),
    fetchAppointment: builder.query({
      query: () => '/appointment',
    }),
    fetchAppointmentById: builder.query({
      query: (id) => `/appointment/${id}`,
    }),
    fetchProtocol: builder.query({
      query: () => '/protocol',
    }),
    fetchProtocolById: builder.query({
      query: (id) => `/protocol/${id}`,
    }),
    fetchLoggout: builder.query({
      query: () => '/loggout',
    }),
    fetchConfirmAccount: builder.query({
      query: (token) => `/confirm/${token}`,
    }),
    fetchResetPassword: builder.query({
      query: (token) => `/reset-password/${token}`,
    }),
    // MUTATION CLIENT
    addNewClientPostData: builder.mutation({
      query: (bodyData) => ({
        url: '/client',
        method: 'POST',
        body: bodyData,
      }),
    }),
    updateClientPatchData: builder.mutation({
      query: ({ id, bodyData }) => ({
        url: `/client/${id}`,
        method: 'PATCH',
        body: bodyData,
      }),
    }),
    removeClientDeleteData: builder.mutation({
      query: ({ id, bodyData }) => ({
        url: `/client/${id}`,
        method: 'DELETE',
        body: bodyData,
      }),
    }),
    // MUTATION DOCTOR
    addNewDoctorPostData: builder.mutation({
      query: (bodyData) => ({
        url: '/doctor',
        method: 'POST',
        body: bodyData,
      }),
    }),
    updateDoctorPatchData: builder.mutation({
      query: ({ id, bodyData }) => ({
        url: `/doctor/${id}`,
        method: 'PATCH',
        body: bodyData,
      }),
    }),
    removeDoctorDeleteData: builder.mutation({
      query: ({ id, bodyData }) => ({
        url: `/doctor/${id}`,
        method: 'DELETE',
        body: bodyData,
      }),
    }),
    // MUTATION APPOINTMENT
    updateAppointmentPatchData: builder.mutation({
      query: ({ id, bodyData }) => ({
        url: `/appointment/${id}`,
        method: 'PATCH',
        body: bodyData,
      }),
    }),
    removeAppointmentDeleteData: builder.mutation({
      query: ({ id, bodyData }) => ({
        url: `/appointment/${id}`,
        method: 'DELETE',
        body: bodyData,
      }),
    }),
    addNewAppointmentPostData: builder.mutation({
      query: ({ clientId, bodyData }) => ({
        url: `/client/${clientId}/appointment`,
        method: 'POST',
        body: bodyData,
      }),
    }),
    addAppointmentToProtocolPostData: builder.mutation({
      query: ({ protocolId, bodyData }) => ({
        url: `/protocol/${protocolId}/appointment`,
        method: 'POST',
        body: bodyData,
      }),
    }),
    removeAppointmentToProtocolDeleteData: builder.mutation({
      query: ({ protocolId, appointmentId, bodyData }) => ({
        url: `/protocol/${protocolId}/appointment/${appointmentId}`,
        method: 'DELETE',
        body: bodyData,
      }),
    }),
    // MUTATION PROTOCOL
    addNewProtocolPostData: builder.mutation({
      query: (bodyData) => ({
        url: `/protocol`,
        method: 'POST',
        body: bodyData,
      }),
    }),
    getOneProtocolGetData: builder.mutation({
      query: ({ id, bodyData }) => ({
        url: `/protocol/${id}`,
        method: 'GET',
        body: bodyData,
      }),
    }),
    updateProtocolPatchData: builder.mutation({
      query: ({ id, bodyData }) => ({
        url: `/protocol/${id}`,
        method: 'PATCH',
        body: bodyData,
      }),
    }),
    removeProtocolDeleteData: builder.mutation({
      query: ({ id, bodyData }) => ({
        url: `/protocol/${id}`,
        method: 'DELETE',
        body: bodyData,
      }),
    }),
    // MUTATION LOGIN
    loginPostData: builder.mutation({
      query: (bodyData) => ({
        url: `/login`,
        method: 'POST',
        body: bodyData,
      }),
    }),
    // MUTATION RESET PASSWORD
    sendEmailToResetPostData: builder.mutation({
      query: (bodyData) => ({
        url: `/reset-password`,
        method: 'POST',
        body: bodyData,
      }),
    }),
    resetPasswordPostData: builder.mutation({
      query: ({ token, bodyData }) => ({
        url: `/reset-password/${token}`,
        method: 'POST',
        body: bodyData,
      }),
    }),
  }),
});

export const apiAddress = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseUrlAddressAPI }),
  endpoints: (builder) => ({
    fetchAddressData: builder.query({
      query: (address) => `/?q=${address}&type=housenumber&autocomplete=1`,
    }),
  }),
});

export const {
  useFetchClientQuery,
  useFetchClientByIdQuery,
  useFetchDoctorByIdQuery,
  useFetchProtocolQuery,
  useFetchProtocolByIdQuery,
  useFetchAppointmentQuery,
  useFetchAppointmentByIdQuery,
  useFetchLoggoutQuery,
  useFetchConfirmAccountQuery,
  useFetchResetPasswordQuery,
  useAddNewClientPostDataMutation,
  useUpdateClientPatchDataMutation,
  useRemoveClientDeleteDataMutation,
  useAddNewDoctorPostDataMutation,
  useRemoveDoctorDeleteDataMutation,
  useUpdateAppointmentPatchDataMutation,
  useRemoveAppointmentDeleteDataMutation,
  useAddNewAppointmentPostDataMutation,
  useAddAppointmentToProtocolPostDataMutation,
  useRemoveAppointmentToProtocolDeleteDataMutation,
  useUpdateDoctorPatchDataMutation,
  useAddNewProtocolPostDataMutation,
  useUpdateProtocolPatchDataMutation,
  useGetOneProtocolGetDataMutation,
  useRemoveProtocolDeleteDataMutation,
  useLoginPostDataMutation,
  useSendEmailToResetPostDataMutation,
  useResetPasswordPostDataMutation,
} = apiBackEnd;

export const { useFetchAddressDataQuery } = apiAddress;
