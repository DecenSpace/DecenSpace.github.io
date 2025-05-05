import Button, { ButtonProps } from "@mui/material/Button";

const DashboardCardButton: React.FC<ButtonProps> = props => (
    <Button size="small" variant="text" color="secondary" {...props} />
);

export default DashboardCardButton as typeof Button;