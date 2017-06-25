/**
 * Provides access to all the banana functionality.
 */
// Icon unicode characters can be found at: http://fontawesome.io/icons/
//% color=190 weight=100 icon="\uf1ec" block="Banana Blocks" advanced=false
namespace banana {
    /**
     * How many bananas?
     * @param n number of bananas
     */
    // Info about defining blocks: https://makecode.com/defining-blocks
    //% blockId=banana_bananas
    //% block="how many bananas %n"
    export function bananas(n: number): number {
        return n;
    }

    /**
     * Multiply your bananas by a predefined multiplier!
     * @param n number of bananas
     */
    //% blockId=banana_banana_multiplier
    //% block="multiply your bananas %n"
    // Info about shims: https://makecode.com/simshim
    //% shim=banana::banana_multipler
    export function bananaMultiplier(n: number): number {
        // Fake function for simulator
        return 0;
    }

    /**
     * Multiply your bananas!
     * @param n number of bananas
     */
    //% blockId=banana_banana_multipliy
    //% block="multiply your bananas %n | by %m"
    //% shim=banana::banana_multiply
    export function bananaMultiply(n: number, m: number): number {
        // Valid function for simulator
        return n * m;
    }
}
