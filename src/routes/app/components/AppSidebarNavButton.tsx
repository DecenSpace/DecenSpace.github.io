import ListItemButton, { ListItemButtonProps } from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link, useMatch } from "react-router";

interface AppSidebarNavButtonProps extends ListItemButtonProps {
    path: string;
    icon: React.ReactElement;
    text: string;
}

const AppSidebarNavButton: React.FC<AppSidebarNavButtonProps> = ({ path, icon, text, ...props }) => {

    const match = useMatch(path);

    return (
        <ListItemButton component={Link} to={path} selected={!!match} {...props}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItemButton>
    );
};

export default AppSidebarNavButton