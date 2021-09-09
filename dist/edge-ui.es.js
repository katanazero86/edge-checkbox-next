import {
    pushScopeId as e,
    popScopeId as d,
    defineComponent as a,
    openBlock as r,
    createElementBlock as t,
    normalizeClass as l,
    createElementVNode as o,
    computed as c,
    createVNode as i,
    unref as n,
    normalizeStyle as u,
    toDisplayString as s
} from "vue";

e("data-v-678ed7de");
const h = ["width", "height", "color"], g = [o("path", {
    stroke: "currentColor",
    fill: "currentColor",
    "fill-rule": "nonzero",
    "stroke-width": "1.5",
    d: "M8.489 13.597l7.304-7.304a1 1 0 0 1 1.414 1.414l-8 8a1 1 0 0 1-1.403.011l-4-3.875a1 1 0 1 1 1.392-1.436l3.293 3.19z"
}, null, -1)];
d();
var b = a({
    props: {
        width: {type: Number, default: 18},
        height: {type: Number, default: 18},
        color: {type: String, default: "#e6e6e6"},
        option: {type: String, default: ""},
        disabled: {type: Boolean, default: !1}
    },
    setup: e => (d, a) => (r(), t("svg", {
        class: l(["check-icon", [e.disabled && "check-icon--disabled"]]),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        width: e.width,
        height: e.height,
        color: e.color
    }, g, 10, h))
});
b.__scopeId = "data-v-678ed7de";
const p = {unchecked: "#d9d9d9", checked: "#5468ff"}, k = {unchecked: "#d9d9d9", checked: "#03dac5"},
    f = {unchecked: "#d9d9d9", checked: "#f44336"}, y = {unchecked: "#d9d9d9", checked: "#ff9800"},
    m = {unchecked: "#d9d9d9", checked: "#bfbfbf"};
e("data-v-017d9a7f");
const v = ["name", "id", "disabled", "value", "checked"], w = ["name", "id", "disabled", "value", "checked"],
    C = {class: "label__option"};
d();
var S = a({
    props: {
        name: {type: String, default: ""},
        id: {type: String, default: ""},
        disabled: {type: Boolean, default: !1},
        color: {type: String, default: "primary"},
        option: {type: String, default: ""},
        border: {type: Boolean, default: !1},
        size: {type: String, default: "md"},
        inline: {type: Boolean, default: !1},
        value: {type: String, default: ""},
        modelValue: {type: [Boolean, Array], default: !1}
    }, emits: ["change", "update:modelValue"], setup(e, {emit: d}) {
        const a = e, h = c((() => {
            if ("string" != typeof a.color) return p;
            if (a.disabled) return m;
            switch (a.color) {
                case"primary":
                    return p;
                case"secondary":
                    return k;
                case"red":
                    return f;
                case"orange":
                    return y;
                default:
                    return p
            }
        })), g = c((() => {
            if ("string" != typeof a.color) return {backgroundColor: p.checked, borderColor: p.checked};
            if (a.disabled) return {backgroundColor: m.checked, borderColor: m.checked};
            switch (a.color) {
                case"primary":
                    return {backgroundColor: p.checked, borderColor: p.checked};
                case"secondary":
                    return {backgroundColor: k.checked, borderColor: k.checked};
                case"red":
                    return {backgroundColor: f.checked, borderColor: f.checked};
                case"orange":
                    return {backgroundColor: y.checked, borderColor: y.checked};
                default:
                    return {backgroundColor: p.checked, borderColor: p.checked}
            }
        })), S = c((() => {
            if ("string" != typeof a.size) return {width: 18, height: 18};
            switch (a.size) {
                case"sm":
                    return {width: 16, height: 16};
                case"md":
                    return {width: 18, height: 18};
                case"lg":
                    return {width: 20, height: 20};
                default:
                    return {width: 18, height: 18}
            }
        })), V = e => {
            e.stopPropagation(), d("change", e.target.checked, e.target.value, e.target), Array.isArray(a.modelValue) ? e.target.checked ? d("update:modelValue", [...a.modelValue, e.target.value]) : d("update:modelValue", [...a.modelValue.filter((d => d !== e.target.value))]) : d("update:modelValue", e.target.checked)
        };
        return (d, a) => (r(), t("div", {class: l(["edge-checkbox", [e.disabled && "edge-checkbox--disabled", e.border && "edge-checkbox--border", e.inline && "edge-checkbox--inline"]])}, [o("label", {
            class: "edge-checkbox__label label",
            onChange: V
        }, [Array.isArray(e.modelValue) ? (r(), t("input", {
            key: 0,
            type: "checkbox",
            name: e.name,
            id: e.id,
            disabled: e.disabled,
            value: e.value,
            checked: -1 != e.modelValue.indexOf(e.value)
        }, null, 8, v)) : (r(), t("input", {
            key: 1,
            type: "checkbox",
            name: e.name,
            id: e.id,
            disabled: e.disabled,
            value: e.value,
            checked: e.modelValue
        }, null, 8, w)), i(b, {
            class: "checkbox--unchecked",
            width: n(S).width,
            height: n(S).height,
            color: n(h).unchecked,
            style: u([e.border && e.disabled && {borderColor: "#bfbfbf"}]),
            disabled: e.disabled
        }, null, 8, ["width", "height", "color", "style", "disabled"]), i(b, {
            class: "checkbox--checked",
            width: n(S).width,
            height: n(S).height,
            color: n(h).checked,
            style: u([e.border && n(g)]),
            disabled: e.disabled
        }, null, 8, ["width", "height", "color", "style", "disabled"]), o("span", C, s(e.option), 1)], 32)], 2))
    }
});
S.__scopeId = "data-v-017d9a7f", e("data-v-7bbb475e");
const V = ["name", "id", "disabled", "value", "checked"], x = o("span", {class: "radio-mark"}, null, -1),
    _ = {class: "label__option"};
d();
var B = a({
    props: {
        name: {type: String, default: ""},
        id: {type: String, default: ""},
        disabled: {type: Boolean, default: !1},
        color: {type: String, default: "primary"},
        option: {type: String, default: ""},
        size: {type: String, default: "md"},
        inline: {type: Boolean, default: !1},
        value: {type: String, default: ""},
        modelValue: {type: [Boolean, String], default: ""}
    }, emits: ["change", "update:modelValue"], setup(e, {emit: d}) {
        const a = e, i = c((() => {
            if ("string" != typeof a.color) return "edge-radio--primary";
            if (a.disabled) return "edge-radio--disabled";
            switch (a.color) {
                case"primary":
                    return "edge-radio--primary";
                case"secondary":
                    return "edge-radio--secondary";
                case"red":
                    return "edge-radio--red";
                case"orange":
                    return "edge-radio--orange";
                default:
                    return "edge-radio--primary"
            }
        })), u = c((() => {
            if ("string" != typeof a.size) return "";
            switch (a.size) {
                case"sm":
                    return "edge-radio--sm";
                case"md":
                    return "";
                case"lg":
                    return "edge-radio--lg";
                default:
                    return ""
            }
        })), h = e => {
            e.stopPropagation(), d("change", e.target.checked, e.target.value, e.target), d("update:modelValue", e.target.value)
        };
        return (d, a) => (r(), t("div", {class: l(["edge-radio", [n(i), n(u), e.inline && "edge-radio--inline"]])}, [o("label", {
            class: "edge-radio__label label",
            onChange: h
        }, [o("input", {
            type: "radio",
            name: e.name,
            id: e.id,
            disabled: e.disabled,
            value: e.value,
            checked: e.modelValue == e.value
        }, null, 8, V), x, o("span", _, s(e.option), 1)], 32)], 2))
    }
});
B.__scopeId = "data-v-7bbb475e";
export {S as EdgeCheckbox, B as EdgeRadio};
