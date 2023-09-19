// REACT
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
// FORMIK
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
// DAYJS
// MUI
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
// COMPONENT
import AppointmentDatePicker from './AppointmentDatePicker/AppointmentDatePicker';
// API
import { fetchAddAppointment } from '../../../../../api/api';
// LAYOUT
import { AlertError } from '../../../../../components/Layouts/Alert/AlertBox';
// STORE
import { useUser, useUserInformations } from '../../../../../store/store';
// CSS
import './style.scss';
import PaiementTotal from './AppointmentPaiement/AppointmentPaiement';

export default function AppointmentForm({
  appointmentsDates,
}: {
  appointmentsDates: string[][] | void;
}) {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isConnected, selectionDate] = useUser((state) => [
    state.isConnected,
    state.selectionDate,
  ]);
  const userInfos = useUserInformations((state) => state.userInfos);
  const navigate = useNavigate();

  const filterDates = (): string[][] => {
    return appointmentsDates.filter((testDates) => {
      const [bookedDate] = testDates;
      if (selectionDate[0]) {
        return bookedDate === selectionDate[0];
      }
    });
  };

  const filterHours = () => {
    const dates = filterDates();
    console.log('dates: ', dates);
    const splitHoursFilteredArray: number[] = [];
    dates.forEach((date) => {
      const splitHours = date[1].split(':')[0];
      splitHoursFilteredArray.push(parseInt(splitHours, 10) + 2);
    });
    return splitHoursFilteredArray;
  };

  function availableItemSlots() {
    const filteredHours = filterHours();
    const availableSlot = [];

    if (selectionDate.length > 0) {
      for (let i = 15; i < 20; i++) {
        if (!filteredHours.includes(i)) {
          const menuItem = <MenuItem key={i} value={i}>{`${i}h00`}</MenuItem>;
          availableSlot.push(menuItem);
        }
      }
    }

    return availableSlot;
  }

  const reductionPaiementIfStudent = (studentStatus: boolean) => {
    if (studentStatus) {
      return 40;
    }
    return 50;
  };

  const onSubmit = async (userInformations, data) => {
    console.log('userInformations: ', userInformations);
    console.log('data: ', data);
    try {
      const selectedDate = new Date(
        `${data.appointmentDate}T${data.appointmentHour}:00:00`
      );
      const utcDate = new Date(selectedDate.toUTCString());

      const jsonToSend = {
        ...userInformations,
        ...data,
        date: utcDate.toISOString(), // Utiliser la date UTC
        studentPayment: reductionPaiementIfStudent(userInformations.student),
      };

      if (userInfos.id !== null) {
        const result = await fetchAddAppointment(jsonToSend);
        if (result) {
          navigate('/mon-compte');
        }
      }
    } catch (error) {
      console.log('error: ', error);
    }
  };

  useEffect(() => {
    if (!isConnected) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected]);

  return (
    <Formik
      initialValues={{ appointmentDate: '', appointmentHour: '', comments: '' }}
      validationSchema={Yup.object({
        appointmentDate: Yup.string().required(
          'une date de rendez-vous doit être sélectionnée'
        ),
        appointmentHour: Yup.string().required(
          'une heure de rendez-vous doit être sélectionnée'
        ),
        comments: Yup.string(),
      })}
      onSubmit={(values, action) => {
        onSubmit(userInfos, values);
        // console.log('userInfos: ', userInfos);
        // console.log('values: ', values);
        // alert(JSON.stringify(values, null, 2));
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <div className="appointment-form">
            <div className="appointment-form__calendar">
              <AppointmentDatePicker
                name="appointmentDate"
                label="Date de rendez-vous"
              />
            </div>
            <div className="appointment-form__date-choice">
              {errorMessage ? <AlertError message={errorMessage} /> : null}
              <FormControl sx={{ m: 1, width: '100%' }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Heure du rendez-vous
                </InputLabel>
                <Select
                  labelId="date-of-appointment-label"
                  id="hour"
                  name="appointmentHour"
                  value={formik.values.appointmentHour}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.appointmentHour &&
                    Boolean(formik.errors.appointmentHour)
                  }
                  autoWidth
                  label="Heure du rendez-vous"
                >
                  <MenuItem key="none" value="">
                    <em>Veuillez choisir un créneau</em>
                  </MenuItem>
                  {availableItemSlots()}
                </Select>
                <FormHelperText error>
                  {formik.touched.appointmentHour &&
                    formik.errors.appointmentHour}
                </FormHelperText>
              </FormControl>
              <TextField
                fullWidth
                label="Ajouter un commentaire (optionnel)"
                name="comments"
                value={formik.values.comments}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.comments && Boolean(formik.errors.comments)
                }
                helperText={formik.touched.comments && formik.errors.comments}
              />
              <PaiementTotal isStudent={userInfos.student} />
              <Button fullWidth variant="contained" type="submit">
                Réserver
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
