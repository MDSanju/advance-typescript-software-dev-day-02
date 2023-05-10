// Mapped type example

type AreaNumber = {
    height: number;
    width: number;
}

type AreaString = {
    height: string;
    width: string;
}

type AreaReadonly = {
    readonly height: number;
    readonly width: number;
}

type X = AreaNumber['width'];   // Look up types


const rectangularArea: AreaNumber = {
    height: 10,
    width: 12,
};



type Area = {
    [key in keyof AreaNumber]: AreaNumber[key];
}


type Area1<T> = {
    readonly [key in keyof T]: T[key];
}

const area1: Area1<{ height: number; width: number; }> = { height: 34, width: 4 };
