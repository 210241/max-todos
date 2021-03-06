import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Divider,
  useMediaQuery,
} from "@material-ui/core";

const DeleteConfirm = ({ open, close, yes }) => {
  const matches = useMediaQuery("(max-width: 768px)");
  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>DELETE ITEM?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this item?
        </DialogContentText>
        <div style={{ display: matches ? "none" : "block" }}>
          <Divider />
          <br />
          <DialogContentText>
            <span style={{ color: "green", fontWeight: "bold" }}>PROTIP:</span>
            <br />
            You can hold down shift when clicking the <b>delete button</b> to
            bypass this confirmation entirely
          </DialogContentText>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary">
          No
        </Button>
        <Button onClick={yes} color="primary" variant="contained">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirm;
