import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    PopUp1:
    {
        display: "block",
        margin: "auto",
        position: "relative",
        marginTop: "-642px",
        marginLeft: "223px",
    },
}));

export default function PopUp() {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title" style={{ fontSize: "21pt" }}>Current Number of Votes:</h2>
            <p id="simple-modal-description" style={{ color: "blue" }}>Democratic Party:</p>
            <p id="simple-modal-description" style={{ color: "red" }}>Republican Party:</p>
            <button type="button" onClick={handleClose}>Close</button>
        </div>
    );

    return (
        <div>
            <button type="button" onClick={handleOpen} className={classes.PopUp1} style={{ backgroundColor: "transparent", border: "none", color: "purple", textDecoration: "underline" }}>WA</button>
            <Modal open={open} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">{body}</Modal>

            <button type="button" onClick={handleOpen} className={classes.PopUp1} style={{ backgroundColor: "transparent", border: "none", color: "purple", textDecoration: "underline", marginTop:"50px", marginLeft:"200px" }}>OR</button>
            <Modal open={open} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">{body}</Modal>

            <button type="button" onClick={handleOpen} className={classes.PopUp1} style={{ backgroundColor: "transparent", border: "none", color: "purple", textDecoration: "underline", marginTop:"117px", marginLeft:"174px" }}>CA</button>
            <Modal open={open} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">{body}</Modal>

            <button type="button" onClick={handleOpen} className={classes.PopUp1} style={{ backgroundColor: "transparent", border: "none", color: "purple", textDecoration: "underline", marginTop:"-130px", marginLeft:"289px" }}>ID</button>
            <Modal open={open} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">{body}</Modal>

            <button type="button" onClick={handleOpen} className={classes.PopUp1} style={{ backgroundColor: "transparent", border: "none", color: "purple", textDecoration: "underline", marginTop:"59px", marginLeft:"237px" }}>NV</button>
            <Modal open={open} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">{body}</Modal>

            <button type="button" onClick={handleOpen} className={classes.PopUp1} style={{ backgroundColor: "transparent", border: "none", color: "purple", textDecoration: "underline", marginTop:"-146px", marginLeft:"374px" }}>MT</button>
            <Modal open={open} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">{body}</Modal>

            <button type="button" onClick={handleOpen} className={classes.PopUp1} style={{ backgroundColor: "transparent", border: "none", color: "purple", textDecoration: "underline", marginTop:"136px", marginLeft:"315px" }}>UT</button>
            <Modal open={open} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">{body}</Modal>
        </div>
    );
}
