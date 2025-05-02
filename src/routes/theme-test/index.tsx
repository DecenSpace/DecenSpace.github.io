import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { heroGradient } from "theme";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Divider from "@mui/material/Divider";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import LinearProgress from "@mui/material/LinearProgress";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionActions from "@mui/material/AccordionActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Chip from "@mui/material/Chip";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SnackbarContent from "@mui/material/SnackbarContent";
import Alert from "@mui/material/Alert";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Pagination from "@mui/material/Pagination";
import Link from "@mui/material/Link";

const ThemeTest: React.FC = () => {

    const [dialogOpen, setDialogOpen] = useState(false);
    const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);

    return (
        <Stack direction="row" minHeight="100vh">
            <Box minWidth="240px" padding={2}>
                <Card elevation={0} sx={{ marginBottom: 2 }}>
                    <CardContent>
                        Elevation 0
                    </CardContent>
                </Card>
                <Card sx={{ marginBottom: 2 }}>
                    <CardContent>
                        Elevation 1
                    </CardContent>
                </Card>
                <Card elevation={2} sx={{ marginBottom: 2 }}>
                    <CardContent>
                        Elevation 2
                    </CardContent>
                </Card>
                <List
                    component={Card}
                    variant="outlined"
                    subheader={
                        <ListSubheader component="div">
                            Nested List Items
                        </ListSubheader>
                    }
                    dense
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sent mail" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton onClick={() => { }}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                        <ExpandMore />
                    </ListItemButton>
                    <Collapse in={false} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Starred" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
            </Box>
            <Box bgcolor="background.default" flexGrow={1} padding={3}>
                <Typography variant="h1">App</Typography>
                <Tabs value={0} sx={{ marginTop: 4 }}>
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                </Tabs>
                <Box marginTop={4}>
                    <Typography variant="body1" marginBottom={2}>
                        This is the app page.
                    </Typography>
                    <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
                        <div>
                            <Card sx={{ marginBottom: 3 }}>
                                <CardHeader title="Card" subheader="Subheadline" />
                                <CardContent>
                                    <Typography variant="h2" marginBottom={2}>
                                        126
                                    </Typography>
                                    <Stack direction="row" spacing={2}>
                                        <Chip label="Chip Filled" />
                                        <Chip label="Chip Filled" color="primary" />
                                        <Chip label="Chip Filled" color="secondary" />
                                        <Chip label="Chip Outlined" variant="outlined" />
                                    </Stack>
                                </CardContent>
                            </Card>
                            <Card variant="outlined" sx={{ marginBottom: 3 }}>
                                <CardHeader
                                    title="Controls"
                                    action={
                                        <IconButton>
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                />
                                <Divider />
                                <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "flex-start" }}>
                                    <Button>Normal button</Button>
                                    <Button disabled>Disabled button</Button>
                                    <Button variant="text">Text button</Button>
                                    <Button variant="outlined">Outlined button</Button>
                                    <Button color="secondary" startIcon={<InboxIcon />}>Secondary button</Button>
                                    <Button size="small">Small button</Button>
                                    <Fab>
                                        <AddIcon />
                                    </Fab>
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            name="radio-buttons-group"
                                        >
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                                        </RadioGroup>
                                    </FormControl>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                                        <FormControlLabel required control={<Checkbox />} label="Required" />
                                        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
                                        <FormControlLabel required control={<Switch />} label="Required" />
                                        <FormControlLabel disabled control={<Switch />} label="Disabled" />
                                    </FormGroup>
                                    <TextField label="Outlined" variant="outlined" />
                                    <TextField label="Filled" variant="filled" />
                                    <TextField label="Standard" variant="standard" />
                                    <TextField label="Outlined" variant="outlined" error />
                                    <TextField label="Filled" variant="filled" error />
                                    <TextField label="Standard" variant="standard" error />
                                    <TextField label="Outlined" variant="outlined" disabled />
                                    <TextField label="Filled" variant="filled" disabled />
                                    <TextField label="Standard" variant="standard" disabled />
                                    <LinearProgress sx={{ marginTop: 1, width: "100%" }} />
                                </CardContent>
                            </Card>
                            <div>
                                <Accordion variant="outlined" defaultExpanded>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3-content"
                                        id="panel3-header"
                                    >
                                        <Typography component="span">Accordion Actions</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </AccordionDetails>
                                    <AccordionActions>
                                        <Button color="secondary">Cancel</Button>
                                        <Button>Agree</Button>
                                    </AccordionActions>
                                </Accordion>
                                <Accordion variant="outlined">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3-content"
                                        id="panel3-header"
                                    >
                                        <Typography component="span">Accordion Actions</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion variant="outlined">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3-content"
                                        id="panel3-header"
                                    >
                                        <Typography component="span">Accordion Actions</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                        <div>
                            <Card sx={{ marginBottom: 3 }}>
                                <CardHeader title="Dialog" />
                                <CardContent>
                                    <Button variant="outlined" onClick={() => setDialogOpen(true)}>
                                        Open dialog
                                    </Button>
                                    <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                                        <DialogTitle>Dialog</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button color="secondary" onClick={() => setDialogOpen(false)}>Disagree</Button>
                                            <Button onClick={() => setDialogOpen(false)} autoFocus>
                                                Agree
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                    <br />
                                    <br />
                                    <Button variant="outlined" onClick={(e) => setMenuAnchorEl(e.currentTarget)}>
                                        Open Menu
                                    </Button>
                                    <Menu
                                        anchorEl={menuAnchorEl}
                                        open={!!menuAnchorEl}
                                        onClose={() => setMenuAnchorEl(null)}
                                    >
                                        <MenuItem>Profile</MenuItem>
                                        <MenuItem>My account</MenuItem>
                                        <MenuItem>Logout</MenuItem>
                                    </Menu>
                                </CardContent>
                            </Card>
                            <TableContainer component={Paper} variant="outlined" sx={{ marginBottom: 3 }}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Dessert (100g serving)</TableCell>
                                            <TableCell align="right">Calories</TableCell>
                                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {[
                                            { name: "Frozen yoghurt", calories: 159, fat: 6, carbs: 24, protein: 4 },
                                            { name: "Ice cream sandwich", calories: 237, fat: 9, carbs: 37, protein: 4.3 },
                                            { name: "Eclair", calories: 262, fat: 16, carbs: 24, protein: 6 },
                                            { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
                                            { name: "Gingerbread", calories: 356, fat: 16, carbs: 49, protein: 3.9 }
                                        ].map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right">{row.calories}</TableCell>
                                                <TableCell align="right">{row.fat}</TableCell>
                                                <TableCell align="right">{row.carbs}</TableCell>
                                                <TableCell align="right">{row.protein}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Card sx={{ marginBottom: 3 }}>
                                <CardContent>
                                    <Stepper nonLinear activeStep={0}>
                                        {["Step one", "Step 2", "Step 3"].map((label, index) => (
                                            <Step key={label} completed={index === 0}>
                                                <StepButton color="inherit">
                                                    {label}
                                                </StepButton>
                                            </Step>
                                        ))}
                                    </Stepper>
                                </CardContent>
                            </Card>
                            <Card sx={{ marginBottom: 3 }}>
                                <CardContent>
                                    <Pagination count={10} />
                                </CardContent>
                            </Card>
                            <Stack spacing={2} sx={{ maxWidth: 600 }}>
                                <SnackbarContent
                                    message="This is the default snackbar style"
                                    action={(
                                        <Button size="small">
                                            lorem ipsum dolorem
                                        </Button>
                                    )}
                                />
                                <Alert
                                    onClose={() => { }}
                                    severity="success"
                                    variant="outlined"
                                >
                                    This is a success Alert
                                </Alert>
                                <Alert
                                    onClose={() => { }}
                                    severity="error"
                                    variant="outlined"
                                >
                                    This is a error Alert
                                </Alert>
                                <Alert
                                    onClose={() => { }}
                                    severity="warning"
                                    variant="outlined"
                                >
                                    This is a warning Alert
                                </Alert>
                                <Alert
                                    onClose={() => { }}
                                    severity="success"
                                    variant="filled"
                                >
                                    This is a success Alert
                                </Alert>
                                <Alert
                                    onClose={() => { }}
                                    severity="error"
                                    variant="filled"
                                >
                                    This is a error Alert
                                </Alert>
                                <Alert
                                    onClose={() => { }}
                                    severity="warning"
                                    variant="filled"
                                >
                                    This is a warning Alert
                                </Alert>
                            </Stack>
                            <Box sx={{ width: "100%", height: 200, margin: "20px 0", backgroundImage: heroGradient }} />
                            <Box marginTop={4}>
                                <Typography variant="h1" marginBottom={2}>
                                    Headline 1
                                </Typography>
                                <Typography variant="h2" marginBottom={2}>
                                    Headline 2
                                </Typography>
                                <Typography variant="h3" marginBottom={2}>
                                    Headline 3
                                </Typography>
                                <Typography variant="h4" marginBottom={2}>
                                    Headline 4
                                </Typography>
                                <Typography variant="h5" marginBottom={2}>
                                    Headline 5
                                </Typography>
                                <Typography variant="body1" marginBottom={2}>
                                    The space industry faces a <Link href="#">critical infrastructure</Link> challenge: ground station access is expensive, centralized, and inefficient. Satellite operators struggle with limited coverage while existing ground stations sit underutilized. We built Decen Space to create a marketplace that transforms how the space industry communicates with satellites, democratizing access while rewarding participation.
                                </Typography>
                                <Typography variant="body2" marginBottom={2}>
                                    The space industry faces a <Link href="#">critical infrastructure</Link> challenge: ground station access is expensive, centralized, and inefficient. Satellite operators struggle with limited coverage while existing ground stations sit underutilized. We built Decen Space to create a marketplace that transforms how the space industry communicates with satellites, democratizing access while rewarding participation.
                                </Typography>
                            </Box>
                        </div>
                    </Box>
                </Box>
            </Box>
        </Stack >
    );
};

export default ThemeTest;