export const useSendToasts = (controller) => {
  Object.assign(controller, {
    sendToast(text) {
      this.dispatch("toast", { detail: { content: text }, prefix: false })
    }
  });
};
