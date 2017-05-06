export const btns = {
  openModal: (doc) => {
    return doc.querySelector(`[data-home-click="openModal"]`);
  },
  openAlert: (doc) => {
    return doc.querySelector(`[data-modal-click="openAlert"]`);
  },
  closeAlert: (doc) => {
    return doc.querySelector(`[data-alert-click="closeAlert"]`);
  },
  goToCounter: (doc) => {
    return doc.querySelector(`[data-home-click="goToCounter"]`);
  },
};
