export interface ButtonProps {
  buttonType: string;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void
}