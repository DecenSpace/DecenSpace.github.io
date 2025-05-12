import Alert, { AlertColor } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { createContext, useContext, useEffect, useState } from "react";

interface IMessage {
    text: string;
    severity?: AlertColor;
    hideDuration?: number;
    action?: React.ReactNode;
    id: number;
}

type ShowSnackbarFn = (
    text: string,
    severity?: AlertColor,
    hideDuration?: number,
    action?: React.ReactNode
) => void;

interface ISnackbarContext {
    showSnackbar: ShowSnackbarFn;
    message: IMessage | null
}

const SnackbarContext = createContext<ISnackbarContext>({
    showSnackbar: () => { },
    message: null
});

export function useShowSnackbar() {

    const { showSnackbar } = useContext(SnackbarContext);

    return showSnackbar;
}

const SnackbarProvider: React.FC<React.PropsWithChildren> = ({ children }) => {

    const [snackPack, setSnackPack] = useState<readonly IMessage[]>([]);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState<IMessage | null>(null);

    useEffect(() => {
        if (snackPack.length && !message) {
            setMessage({ ...snackPack[0] });
            setSnackPack((prev) => prev.slice(1));
            setOpen(true);
        } else if (snackPack.length && message && open) {
            setOpen(false);
        }
    }, [snackPack, message, open]);

    const showSnackbar: ShowSnackbarFn = (text, severity, hideDuration, action) => setSnackPack(prev => [
        ...prev,
        { 
            text,
            severity,
            hideDuration,
            action,
            id: Date.now() + Math.floor(Math.random() * 1000)
        }
    ]);

    const handleClose = () => setOpen(false);

    const handleExited = () => {
        setMessage(null);
    };

    return (
        <SnackbarContext.Provider value={{ showSnackbar, message }}>
            {children}
            <Snackbar
                key={message?.id || 0}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                slotProps={{ transition: { onExited: handleExited } }}
            >
                <Alert
                    onClose={handleClose}
                    severity={message?.severity}
                    variant="filled"
                    sx={{ width: "100%" }}
                    action={message?.action}
                >
                    {message?.text}
                </Alert>
            </Snackbar>
        </SnackbarContext.Provider>
    );
};

export default SnackbarProvider;