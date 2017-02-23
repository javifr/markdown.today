import { SET_ENCRYPTION_PASSWORD } from "../actionTypes";
import { uploadToDropbox } from "./dropbox";
import { addNotification } from "./";

// Set the encryption password we want to use.
export const setEncryptionPassword = password => ({
  type: SET_ENCRYPTION_PASSWORD,
  password
});

// Reencrypt the journal with a new password.
// TODO: Rename
export const updateEncryptionPassword = password => {
  return dispatch => {
    dispatch(setEncryptionPassword(password));
    dispatch(addNotification("Encryption password updated"));
    dispatch(uploadToDropbox());
  };
};