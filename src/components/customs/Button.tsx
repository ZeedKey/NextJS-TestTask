import { Button as MuiButton } from "@mui/material";

interface ICustomButtonProps {
  type: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  disabled?: boolean;
}

function Button(props: ICustomButtonProps) {
  return (
    <MuiButton
      sx={{ m: 2 }}
      size="small"
      variant="contained"
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
    >
      {props.children}
    </MuiButton>
  );
}

export { Button };
