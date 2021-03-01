import React from 'react';
import RadioButton from '../../components/UI/RadioButton/RadioButton';
import { useUsersContext } from '../../contexts/usersContext';
import { useLocalStorageState } from '../../hooks/useLocalStorage';
import { radioButtons } from '../../utils/constants';
import './Settings.scss';

const Settings: React.FunctionComponent = (): JSX.Element => {
  const [state, setState] = useLocalStorageState('nationality');
  const { dispatch } = useUsersContext();
  const onRadioButtonHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
    dispatch({ type: 'SET_NATIONALITY', value: e.target.value });
  };

  return (
    <section aria-labelledby="settings" className="Settings" role="radiogroup">
      <h4 id="settings">Hey, select one of the nationalities below!</h4>
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
    </section>
  );
};

export default Settings;
