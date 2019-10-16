import alert from './alert';
import $ from '../util/util';

/**
 * 延迟500ms弹出对话框
 * @param content
 * @param yes
 * @param options
 */
const alertDelay = function (content = '', yes = $.noop, options) {
    let dialog = {};
    setTimeout(function () {
        dialog.ref = alert(content, yes, options);
    }, 500);
    return dialog;
};
export default alertDelay;
