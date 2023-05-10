// Conditional type examples

type a1 = number;
type a3 = undefined;
type a4 = number;

type a2 = a1 extends string ? string : null;


// Nested conditional type

type x = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : never;


type CarType = {
    version1: string;
    version2: string;
}

type A = keyof CarType;

type CheckProperty<T, V> = V extends keyof CarType ? true : false;

type CheckCarVersion = CheckProperty<CarType, 'version1'>;



type Friends = 'John' | 'Jeson' | 'Bob';

type RemoveOne<T, K> = T extends K ? never : T;

type CurrentFriends = RemoveOne<Friends, 'Jeson'>;
