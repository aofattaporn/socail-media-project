import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const CreatePost = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        className="container bg-gray-700 w-full rounded-lg h-10 flex justify-center space-x-3 p-2 hover:bg-slate-600   overflow-hidden"
        onClick={handleClickOpen}
      >
        <h1>Createe Poste</h1>
        <AddCircleOutlineIcon></AddCircleOutlineIcon>
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className=" text-white"
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle
          id="alert-dialog-title"
          className="bg-gray-900 border-b-0 border-x-0 border-gray-800 text-white border-8"
        >
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent className="bg-gray-900 border-gray-800 border-0">
          <input  className="my-5 container" type={"text"}></input>
          <textarea className="my-5 container"></textarea>
        </DialogContent>
        <DialogActions className="bg-gray-900 border-t-0 border-x-0 border-gray-800 text-white border-8">
          <Button onClick={handleClose}>cancle</Button>
          <Button onClick={handleClose} autoFocus>
            create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreatePost;
