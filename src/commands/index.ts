import { commands, ExtensionContext, window } from 'vscode';
import { fix } from './_fixJSON';

module.exports = function (context: ExtensionContext) {
  const decoration = window.createTextEditorDecorationType({
    color: 'pink',
    backgroundColor: 'green'
  });
  context.subscriptions.push(decoration);
  context.subscriptions.push(
    commands.registerTextEditorCommand('vscode-json-enhanced.fixJSON', fix({ decoration }))
  );
};