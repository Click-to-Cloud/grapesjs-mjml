export default (editor, opt = {}) => {
  return {
    run(editor, sender = {}) {
      function onSuccess() {
      }

      function onError(error) {
      }

      opt.logout && opt.logout('logout', onSuccess, onError);

      sender.set && sender.set('active', 0);
    },

  }
}
