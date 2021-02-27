import React from 'react';
import RadioButton from '../../components/UI/RadioButton/RadioButton';
import { useLocalStorageState } from '../../hooks/useLocalStorage';
import { radioButtons } from '../../utils/constants';
import './Settings.scss';

const Settings: React.FunctionComponent = (): JSX.Element => {
  const [state, setState] = useLocalStorageState('nationality', '');
  const onRadioButtonHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return (
    <div className="Settings">
      <h4>Hey, select one of the nationalities below!</h4>
      {radioButtons.map((radio) => (
        <RadioButton
          key={radio.id}
          id={radio.id}
          value={radio.value}
          label={radio.label}
          isSelected={state == radio.value}
          onRadioButtonHandler={onRadioButtonHandler}
        />
      ))}
    </div>
  );
};

export default Settings;
