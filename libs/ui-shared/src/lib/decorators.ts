export const WidgetRegistry: Map<string, any> = new Map();

export const RegisterWidget = (className: string): any => {
    return (widgetClass) => {
        WidgetRegistry.set(className, widgetClass);
    };
};
