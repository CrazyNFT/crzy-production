import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Image from "next/image";

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'fixed',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        width:"96%",
        marginLeft:"2%",
        padding: theme.spacing(3),
        display: 'flex',
        alignContent: 'center',
        alignItems: "center",
        flexDirection: 'column',
        borderRadius: "1.5em",
        border: "none",
        [theme.breakpoints.up("sm")]: {
            width: 400,
            top: '50%',
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: theme.spacing(5),
        }
    },
    modalInput: {
        flexGrow: 1,
        marginBottom: theme.spacing(2),

    },
    launchAppButton: {
        background: "rgb(0,192,182)",
        background: "linear-gradient(90deg, rgba(0,192,182,1) 0%, rgba(0,80,80,1) 100%)",
        padding: theme.spacing(1.5),
        margin: theme.spacing(0.5),
        fontSize: theme.spacing(1),
        width: theme.spacing(15),
        height: '80%',
        color: 'white',
        float: 'right',
        [theme.breakpoints.up("md")]: {
            padding: theme.spacing(2),

        }
    },
}));

export default function WalletModal() {
    const classes = useStyles();
    // Modal State
    const [open, setOpen] = React.useState(false);

    // Modal Content State   
    const [viewMore, setviewMore] = React.useState(false);

    // State Toggles
    const handleModalToggle = () => {
        setOpen(!open);
    }
    const handleViewToggle = () => {
        setviewMore(!viewMore);
    }

    const connectWallet = (
        <div className={classes.paper}>

            {viewMore ? (
                // Back Side Modal Content
                <>
                    <TextField className={classes.modalInput} id="outlined-basic" label="FirstName" variant="outlined" />
                    <TextField className={classes.modalInput} id="outlined-basic" label="LastName" variant="outlined" />
                    <TextField className={classes.modalInput} id="outlined-basic" label="Email" variant="outlined" />
                    <TextField className={classes.modalInput} id="outlined-basic" label="password" variant="outlined" />
                    <Button onClick={handleViewToggle} >{"View Less"}<ExpandLess /></Button>
                </>
            ) : (
                // Front Side Modal Content
                <>
                    <Image
                        src="/logo.svg"
                        height={80}
                        width={160}
                        layout="intrinsic"
                        priority
                    />
                    <h2 id="simple-modal-title">Connect Wallet</h2>
                    <p id="simple-modal-description">
                        To start using NFT market.
                    </p>
                    <TextField className={classes.modalInput} id="outlined-basic" label="username" variant="outlined" />
                    <TextField className={classes.modalInput} id="outlined-basic" label="password" variant="outlined" />
                    <Button onClick={handleViewToggle} >{"View More"}<ExpandMore /></Button>
                </>
            )

            }

        </div>
    );

    return (
        <div>

            <Button className={classes.launchAppButton} onClick={handleModalToggle} color="inherit">Connect Wallet</Button>
            <Modal
                open={open}
                onClose={handleModalToggle}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {connectWallet}
            </Modal>
        </div>
    );
}
