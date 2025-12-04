export type InfoActiveTypes = {
    displayNameInfoActive: boolean;
    usernameInfoActive: boolean;
};

export interface InfoLabelProps<T extends Record<string, boolean>> {
    htmlFor: string;
    infoActive: T;
    setInfoActive: React.Dispatch<React.SetStateAction<T>>;
    activeKey: keyof T;
    toolTipText: string;
    labelText: string;
}
