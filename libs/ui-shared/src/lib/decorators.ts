export const WidgetRegistry: Map<string, any> = new Map();

// @RegisterWidget('WidgetName')
export function RegisterWidget(className: string) {
    return (widgetClass) => {
        WidgetRegistry.set(className, widgetClass);
    };
};
