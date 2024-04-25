declare module "bf.js" {
    export const options: [
        (t: number) => Uint8Array,
        (arg0: number) => string,
        (s: string) => number,
        (t: string) => any,
        () => string
    ]

    export function base(code: string, options?: [
        (t: number) => Uint8Array,
        (arg0: number) => string,
        (s: string) => number,
        (t: string) => any,
        () => string
    ]): void
    export function random(code: string, options?: [
        (t: number) => Uint8Array,
        (arg0: number) => string,
        (s: string) => number,
        (t: string) => any,
        () => string
    ]): void

    export function shell(): void
}