import React, { useState } from 'react';
import RadioButton from '../../components/UI/RadioButton/RadioButton';
import './Settings.scss';

const Settings: React.FunctionComponent = (): JSX.Element => {
  const [, setSelectedValue] = useState('');
  const onRadioButtonHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="Settings">
      <h4>Hey, select one of the nationalities below!</h4>

      <RadioButton
        id="r1"
        value="CH"
        onRadioButtonHandler={onRadioButtonHandler}
      />
      <RadioButton
        id="r2"
        value="ES"
        onRadioButtonHandler={onRadioButtonHandler}
      />
      <RadioButton
        id="r3"
        value="FR"
        onRadioButtonHandler={onRadioButtonHandler}
      />
      <RadioButton
        id="r4"
        value="GB"
        onRadioButtonHandler={onRadioButtonHandler}
      />
    </div>
  );
};

export default Settings;
