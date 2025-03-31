#include "tabview.hpp"

static JSClassID TabViewClassID;

WRAPPED_JS_SETSTYLE(TabView, "TabView")
WRAPPED_JS_AddEventListener(TabView, "TabView")
WRAPPED_JS_Align(TabView, "TabView")
WRAPPED_JS_Align_To(TabView, "TabView")
STYLE_INFO(TabView, "TabView")
WRAPPED_JS_BACKGROUND_IMAGE(TabView,"TabView")
WRAPPED_APPEND_CHILD(TabView,"TabView")
WRAPPED_REMOVE_CHILD(TabView,"TabView")
WRAPPED_INSERT_CHILD(TabView,"TabView")
WRAPPED_MOVE_TO_FRONT(TabView, "TabView")
WRAPPED_MOVE_TO_BACKGROUND(TabView, "TabView")
WRAPPED_SCROLL_INTO_VIEW(TabView, "TabView")
WRAPPED_JS_CLOSE_COMPONENT(TabView, "TabView")

// static JSValue NativeCompSetTabs(JSContext *ctx, JSValueConst this_val, int argc, JSValueConst *argv) {
//     if (argc >= 1 && JS_IsArray(argv[0])) {
//         COMP_REF* ref = (COMP_REF*)JS_GetOpaque3(this_val);

//         COMP_REF* ref_content;
//         int len, i;
//         size_t str_len;
//         JSValue tab_value;
//         JSValue title_value;
//         JSValue content_value;
//         JSValue len_value = JS_GetPropertyStr(ctx, argv[0], "length");
//         JS_ToInt32(ctx, &len, len_value);

//         std::vector<std::string> tabs;
//         for (i=0; i<len; i++) {
//             tab_value = JS_GetPropertyUint32(ctx, argv[0], i);
//             content_value = JS_GetPropertyStr(ctx, tab_value, "comp");
//             title_value = JS_GetPropertyStr(ctx, tab_value, "title");

//             ref_content = (COMP_REF*)JS_GetOpaque3(content_value);

//             const char* str_ori = JS_ToCStringLen(ctx, &str_len, tab_value);
//             std::string str = str_ori;
//             str.resize(str_len);
//             static_cast<TabView*>(ref->comp)->setTabs(str, static_cast<BasicComponent*>(ref_content->comp));
//             JS_FreeCString(ctx, str_ori);
//             JS_FreeValue(ctx, tab_value);
//         }

//         JS_FreeValue(ctx, len_value);

//         LV_LOG_USER("TabView %s setTab", ref->uid);
//     };
//     return JS_UNDEFINED;
// };

static JSValue NativeCompSetTab(JSContext *ctx, JSValueConst this_val, int argc, JSValueConst *argv) {
    if (argc >= 2 && JS_IsString(argv[0]) && JS_IsObject(argv[1])) {
        COMP_REF* ref = (COMP_REF*)JS_GetOpaque(this_val, TabViewClassID);

        JSClassID _class_id;
        COMP_REF* ref_content = (COMP_REF*)JS_GetAnyOpaque(argv[1], &_class_id);

        size_t str_len;
        const char* str_ori = JS_ToCStringLen(ctx, &str_len, argv[0]);
        std::string str = str_ori;
        str.resize(str_len);
        static_cast<TabView*>(ref->comp)->setTab(str, static_cast<BasicComponent*>(ref_content->comp));
        JS_FreeCString(ctx, str_ori);

        LV_LOG_USER("TabView %s setTab child %s", ref->uid, ref_content->uid);
    };
    return JS_UNDEFINED;
};

static const JSCFunctionListEntry ComponentProtoFuncs[] = {
    TJS_CFUNC_DEF("setTab", 0, NativeCompSetTab),
    TJS_CFUNC_DEF("nativeSetStyle", 0, NativeCompSetStyle),
    TJS_CFUNC_DEF("addEventListener", 0, NativeCompAddEventListener),
    TJS_CFUNC_DEF("removeChild", 0, NativeCompRemoveChild),
    TJS_CFUNC_DEF("appendChild", 0, NativeCompAppendChild),
    TJS_CFUNC_DEF("insertChildBefore", 0, NativeCompInsertChildBefore),
    TJS_CFUNC_DEF("align", 0, NativeCompSetAlign),
    TJS_CFUNC_DEF("alignTo", 0, NativeCompSetAlignTo),
    TJS_CFUNC_DEF("getBoundingClientRect", 0, GetStyleBoundClinetRect),
    JS_OBJECT_DEF("style", style_funcs, countof(style_funcs), JS_PROP_WRITABLE | JS_PROP_CONFIGURABLE),
    TJS_CFUNC_DEF("setBackgroundImage", 0, NativeCompSetBackgroundImage),
    TJS_CFUNC_DEF("moveToFront", 0, NativeCompMoveToFront),
    TJS_CFUNC_DEF("moveToBackground", 0, NativeCompMoveToBackground),
    TJS_CFUNC_DEF("scrollIntoView", 0, NativeCompScrollIntoView),
    TJS_CFUNC_DEF("close", 0, NativeCompCloseComponent),
};

static const JSCFunctionListEntry ComponentClassFuncs[] = {
};

static JSValue TabViewConstructor(JSContext *ctx, JSValueConst new_target, int argc, JSValueConst *argv) {
    JSValue proto;
    JSValue obj;
    JSValue arg;
    JSValue jsUid;
    const char* uid;
    JSValue pos_value;
    JSValue size_value;
    int32_t pos = LV_DIR_TOP;
    int32_t size;

    COMP_REF *s;

    if (JS_IsObject(argv[0])) {
        arg = argv[0];
        jsUid = JS_GetPropertyStr(ctx, arg, "uid");
        pos_value = JS_GetPropertyStr(ctx, arg, "tabPosition");
        size_value = JS_GetPropertyStr(ctx, arg, "tabSize");

        if (JS_IsString(jsUid)) {
            uid = JS_ToCString(ctx, jsUid);
            JS_FreeValue(ctx, jsUid);
        }
        if (JS_IsNumber(pos_value)) {
            JS_ToInt32(ctx, &pos, pos_value);
        }
        if (JS_IsNumber(size_value)) {
            JS_ToInt32(ctx, &size, size_value);
        }
    }

    if (JS_IsUndefined(new_target)) {
        proto = JS_GetClassProto(ctx, TabViewClassID);
    } else {
        proto = JS_GetPropertyStr(ctx, new_target, "prototype");
        if (JS_IsException(proto))
            goto fail;
    }

    obj = JS_NewObjectProtoClass(ctx, proto, TabViewClassID);
    JS_FreeValue(ctx, proto);
    if (JS_IsException(obj))
        goto fail;
    s = (COMP_REF*)js_mallocz(ctx, sizeof(*s));
    s->uid = uid;
    s->comp = new TabView(uid, pos, size, NULL);

    JS_FreeCString(ctx, uid);

    if (!s)
        goto fail;

    JS_SetOpaque(obj, s);
    LV_LOG_USER("TabView %s created", uid);
    return obj;
 fail:
    JS_FreeValue(ctx, obj);
    return JS_EXCEPTION;
};

static void TabViewFinalizer(JSRuntime *rt, JSValue val) {
    COMP_REF *th = (COMP_REF *)JS_GetOpaque(val, TabViewClassID);
    LV_LOG_USER("TabView %s release", th->uid);
    if (th) {
        delete static_cast<TabView*>(th->comp);
        js_free_rt(rt, th);
    }
};

static JSClassDef TabViewClass = {
    .class_name = "TabView",
    .finalizer = TabViewFinalizer,
};

void NativeComponentTabViewInit (JSContext* ctx, JSValue ns) {
    JS_NewClassID(JS_GetRuntime(ctx), &TabViewClassID);
    JS_NewClass(JS_GetRuntime(ctx), TabViewClassID, &TabViewClass);
    JSValue proto = JS_NewObject(ctx);
    JS_SetPropertyFunctionList(ctx, proto, ComponentProtoFuncs, countof(ComponentProtoFuncs));
    JS_SetClassProto(ctx, TabViewClassID, proto);

    JSValue obj = JS_NewCFunction2(ctx, TabViewConstructor, "TabView", 1, JS_CFUNC_constructor, 0);
    JS_SetConstructor(ctx, obj, proto);
    JS_SetPropertyFunctionList(ctx, obj, ComponentClassFuncs, countof(ComponentClassFuncs));
    JS_DefinePropertyValueStr(ctx, ns, "TabView", obj, JS_PROP_C_W_E);
};

