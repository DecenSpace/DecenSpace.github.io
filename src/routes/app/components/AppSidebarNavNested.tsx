import Collapse from "@mui/material/Collapse";
import List, { ListProps } from "@mui/material/List";
import { styled } from "@mui/material/styles";
import { useMatch } from "react-router";

const AppSidebarNavNestedList = styled(List)(({ theme }) => ({
    "& > .MuiListItemButton-root": {
        paddingLeft: theme.spacing(4)
    }
})) as typeof List;

const AppSidebarNavNested: React.FC<ListProps & { showOnRoute?: string }> = ({ showOnRoute, children }) => {

    const showOnRouteMatch = useMatch(showOnRoute || "*");

    return (
        <Collapse in={!!showOnRouteMatch} timeout="auto" unmountOnExit>
            <AppSidebarNavNestedList component="section" disablePadding>
                {children}
            </AppSidebarNavNestedList>
        </Collapse>
    );
};

export default AppSidebarNavNested;