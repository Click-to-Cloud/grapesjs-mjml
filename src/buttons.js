export default (editor, opt = {}) => {

  let pnm = editor.Panels;
  let optPanel = pnm.getPanel('options');

  let btn = pnm.getButton('options', 'export-template');
  btn && pnm.removeButton('options', btn);

  btn = pnm.getButton('options', 'preview');
  btn && pnm.removeButton('options', btn);

  pnm.addButton('options', {
    id: 'mjml-edit',
    className: 'fa fa-code',
    command: 'mjml-edit',
    attributes: { title: 'Edit MJML' }
  });

  pnm.addButton('options', {
    id: 'mjml-preview',
    className: 'fa fa-eye',
    command: 'mjml-preview',
    attributes: { title: 'Preview' }
  });

  pnm.addButton('options', {
    id: 'mjml-variables',
    className: 'fa fa-ellipsis-v',
    command: 'mjml-set-variables',
    attributes: { title: 'Set Variables' }
  });

  pnm.addButton('options', {
    id: 'mjml-user-context',
    className: 'fa fa-exclamation',
    command: 'mjml-set-user-context',
    attributes: { title: 'Set User Context' }
  });

  if(!opt.readOnly) {
    pnm.addButton('options', {
      id: 'mjml-delete-user-block',
      className: 'fa fa-ban',
      command: 'mjml-delete-user-block',
      attributes: { title: 'Delete User Block' }
    });

    pnm.addButton('options', {
      id: 'mjml-save',
      className: 'fa fa-save',
      command: 'mjml-save',
      attributes: { title: 'Save' }
    });
  }

  pnm.addButton('options', {
    id: 'mjml-logout',
    className: 'fa fa-sign-out',
    command: 'mjml-logout',
    attributes: { title: 'Logout' }
  });
}
