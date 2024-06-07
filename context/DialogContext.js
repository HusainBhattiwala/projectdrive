// import { createContext, useState, useEffect } from "react";
// const DialogContext = createContext();

// export const DialogProvider = ({ children }) => {
//   const [openDialog, setOpenDialog] = useState(false);
//   const handleClickOpen = () => {
//     setOpenDialog(true);
//   };
//   const handleClose = () => {
//     setOpenDialog(false);
//   };
//   return (
//     <DialogContext.Provider
//       value={{
//         //dialog
//         openDialog,
//         setOpenDialog,
//         handleClickOpen,
//         handleClose
//       }}
//     >
//       {children}
//     </DialogContext.Provider>
//   );
// };

// export default DialogContext;
