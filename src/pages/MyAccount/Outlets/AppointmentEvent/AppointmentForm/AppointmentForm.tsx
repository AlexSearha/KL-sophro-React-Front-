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
import PaiementTotal from './AppointmentPaiement/AppointmentPaiement';
// API
import { fetchAddAppointment } from '../../../../../api/api';
// LAYOUT
import { AlertError } from '../../../../../components/Layouts/Alert/AlertBox';
// STORE
import { useUser, useUserInformations } from '../../../../../store/store';
// CSS
import './style.scss';

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
    // console.log('appointmentsDates: ', appointmentsDates);
    return appointmentsDates.filter((testDates) => {
      const [bookedDate] = testDates;
      if (selectionDate[0]) {
        return bookedDate === selectionDate[0];
      }
    });
  };

  function generateTimeSteps() {
    const stepInterval = 1.5 * 60 * 60 * 1000;
    const startTimeDate = new Date();
    const endTimeDate = new Date();
    startTimeDate.setHours(15, 0, 0, 0);
    endTimeDate.setHours(20, 0, 0, 0);

    const steps = [];
    const currentTime = new Date(startTimeDate); // Cloner l'heure de départ

    while (currentTime <= endTimeDate) {
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      // const stepTime = `${hours}h${minutes}`;
      const stepTime = [hours, minutes];
      steps.push(stepTime);

      currentTime.setTime(currentTime.getTime() + stepInterval);
    }

    return steps;
  }

  const filterHours = () => {
    const dates = filterDates();
    const splitHoursFilteredArray: number[] = [];
    dates.forEach((date) => {
      const splitHours = date[1].split(':')[0];
      splitHoursFilteredArray.push(parseInt(splitHours, 10) + 2);
    });
    return splitHoursFilteredArray;
  };

  function availableItemSlots() {
    const timeSteps = generateTimeSteps();
    const takenHours = filterHours();
    const availableItemSlotsVar: JSX.Element[] = [];

    timeSteps.forEach((elem) => {
      const formatHour = elem[0].toString().padStart(2, '0');
      const formatMinutes = elem[1].toString().padStart(2, '0');
      if (!takenHours.includes(elem[0])) {
        const hourList = (
          <MenuItem
            key={formatHour}
            value={`${formatHour}h${formatMinutes}`}
          >{`${formatHour}h${formatMinutes}`}</MenuItem>
        );
        availableItemSlotsVar.push(hourList);
      }
    });
    return availableItemSlotsVar;
  }

  const reductionPaiementIfStudent = (studentStatus: boolean) => {
    if (studentStatus) {
      return 40;
    }
    return 50;
  };

  const onSubmit = async (userInformations, data) => {
    const [hours, minutes] = data.appointmentHour.split('h');
    try {
      const selectedDate = new Date(
        `${data.appointmentDate}T${hours}:${minutes}:00`
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
              <Button
                fullWidth
                sx={{ textTransform: 'capitalize', fontWeight: 700 }}
                variant="contained"
                type="submit"
              >
                Réserver
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
