import { useEffect } from 'react';
import { useUserInformations } from '../../../../../store/store';
import InputUpdateForm from './InputUpdateForm/TextFieldUpdateForm';
import './style.scss';

function PersonalInfos() {
  const userInfos = useUserInformations((state) => state.userInfos);
  return (
    <div className="personal-infos">
      <div className="personal-infos-container">
        <div className="personal-infos-container__userInfos">
          <h3>Infos Client</h3>
          <div className="personal-infos-container__userInfos-firstname">
            {`Prenom: ${userInfos.firstname}`}
          </div>
          <div className="personal-infos-container__userInfos-lastname">
            {`Nom de famille: ${userInfos.lastname}`}
          </div>
          <div className="personal-infos-container__userInfos-email">
            {`Email: ${userInfos.email}`}
          </div>
          <div className="personal-infos-container__userInfos-address">
            {userInfos.address
              ? `Adresse: ${userInfos.address}`
              : `Adresse: Pas d'adresse de renseignée`}
          </div>
          <div className="personal-infos-container__userInfos-phone">
            {userInfos.phone_number
              ? `Télephone: ${userInfos.phone_number}`
              : `Téléphone: Pas de numéro de renseigné`}
          </div>
        </div>
        <div className="personal-infos-container__form">
          <InputUpdateForm
            userId={userInfos.id}
            label="Prénom"
            name="firstname"
          />
          <InputUpdateForm
            userId={userInfos.id}
            label="Nom de famille"
            name="lastname"
          />
          <InputUpdateForm
            userId={userInfos.id}
            label="Adresse"
            name="address"
          />
          <InputUpdateForm
            userId={userInfos.id}
            label="Télephone"
            name="phone_number"
          />
          {/* <div className="personal-infos-container__form-student"></div> */}
        </div>
      </div>
    </div>
  );
}

export default PersonalInfos;
