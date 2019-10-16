import $ from '../util/util';
import pickerTpl from './listPicker.html';

let _sington;
let temp = [];//上一次选中的项

/**
 * 对选列表
 * @param list {array} 列表数组
 * @param preCheck {array} 提前选中的项的id数组[1,2,3]
 * @param options {object} 列表配置
 * @returns {*}
 *
 *weui.list([{id: 1, name: '张三'}
 *, {id: 2, name: '李四'}
 *, {id: 3, name: '王五'}
 *, {id: 4, name: '赵六'}
 *, {id: 5, name: '田七'}
 *], [1, 3], {
 *       title:'请选择人员',
 *       onConfirm: function (result) {
 *           weui.alert(JSON.stringify(result), {isAndroid: false});
 *       }
 *   });
 */
function list(list = [], preCheck = [], options = {}) {
    if (_sington) return _sington;
    // 配置项
    const defaults = $.extend({
        id: 'default',
        className: '',
        title: '请选择',
        container: 'body',
        onConfirm: $.noop
    }, options);

    let isChecked;
    if (!preCheck && temp.length > 0) {
        preCheck = temp;
    }
    const $picker = $($.render(pickerTpl, defaults));

    $(defaults.container).append($picker);

    // 显示与隐藏的方法
    function show() {
        $(defaults.container).append($picker);

        // 这里获取一下计算后的样式，强制触发渲染. fix IOS10下闪现的问题
        $.getStyle($picker[0], 'transform');

        $picker.find('.weui-mask').addClass('weui-animate-fade-in');
        $picker.find('.weui-picker').addClass('weui-animate-slide-up');
    }

    function _hide(callback) {
        _hide = $.noop; // 防止二次调用导致报错

        $picker.find('.weui-mask').addClass('weui-animate-fade-out');
        $picker.find('.weui-picker')
            .addClass('weui-animate-slide-down')
            .on('animationend webkitAnimationEnd', function () {
                $picker.remove();
                _sington = false;
                callback && callback();
            });
    }

    function hide(callback) {
        _hide(callback);
    }

    function _clear(callback) {
        _clear = $.noop; // 防止二次调用导致报错
        $picker.remove();
        _sington = false;
        callback && callback();
    }

    function clear(cb) {
        if (_sington) {
            _clear(cb);
        }
    }

    const items = list.map((item, index) => {
        if (preCheck.indexOf(item.id) > -1) {
            isChecked = 'checked';
        } else {
            isChecked = '';
        }
        return `<label class="weui-cell weui-check__label" for="item${index}"><div class="weui-cell__hd"><input type="checkbox" ${isChecked} name="assistance" class="weui-check" id="item${index}"><i class="weui-icon-checked"></i></div><div class="weui-cell__bd">${item.name}</div></label>`;
    }).join('');

    $picker.find('#ls').html(items);

    let boxes = $picker.find('input[type=checkbox]');

    show();

    $picker
        .on('click', '.weui-mask', function () {
            hide();
        })
        .on('click', '.weui-picker__action', function () {
            hide();
        })
        .on('click', '#weui-picker-confirm', function () {
            let result = [];
            temp = [];
            boxes.forEach((value, index) => {
                if (value.checked === true) {
                    result.push(list[index]);
                    temp.push(list[index].id);
                }
            });
            defaults.onConfirm(result);
        });

    _sington = $picker[0];
    _sington.hide = hide;
    _sington.clear = clear;
    return _sington;
}

export default list;
