export interface RadioButtonProps {
  id: string;
  value: string;
  label: string;
  isSelected: boolean;
  onRadioButtonHandler(e: React.ChangeEvent<HTMLInputElement>): void;
}