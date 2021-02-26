export interface RadioButtonProps {
  id: string;
  value: string;
  onRadioButtonHandler(e: React.ChangeEvent<HTMLInputElement>): void
}