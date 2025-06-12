/**
 * Provides access to all the banana functionality.
 *
 * Function docstrings appear as info the in JavaScript toolbox.
 *
 * A function defined here with a "shim" entry will run this code in the
 * simulator, and the C++ code will run in the micro:bit.
 *
 * Info about shims: https://makecode.com/simshim
 * Info about defining blocks: https://makecode.com/defining-blocks
 */

// Icon unicode characters can be found at: http://fontawesome.io/icons/
//% color=#c2b711 weight=100 icon="\uf1ec" block="Banana Blocks" advanced=false
namespace banana {

    /**
     * How many bananas?
     *
     * This function is fully implemented in TypeScript.
     *
     * @param n number of bananas
     */
    //% blockId=banana_bananas
    //% block="how many bananas $n"
    export function bananas(n: number): number {
        return n;
    }

    /**
     * Add your bananas!
     *
     * This function is a shim and the micro:bit runs the C++ version.
     *
     * @param n number of bananas
     */
    //% blockId=banana_banana_add
    //% block="add your bananas $n | + $m"
    //% help=github:carlosperate/pxt-banana/docs/banana_add.md
    //% shim=banana::banana_add
    export function bananaAdd(n: number, m: number): number {
        // This code runs in the simulator
        return n + m;
    }

    /**
     * Multiply your bananas by a predefined multiplier depending on the
     * micro:bit version that runs this code!
     *
     * This function is a shim and the micro:bit runs the C++ version.
     * The output of this function will depend on the version of the micro:bit
     * that runs it, V1 or V2.
     *
     * @param n number of bananas
     */
    //% blockId=banana_banana_multiplier
    //% block="multiply your bananas $n"
    //% shim=banana::banana_multiplier
    export function bananaMultiplier(n: number): number {
        // The simulator cannot differentiate micro:bit versions
        return 0;
    }

    /**
     * Get your bananas! But this version only works on micro:bit V2.
     *
     * This function is a shim and the micro:bit runs the C++ version.
     *
     * @param n number of bananas
     */
    //% blockId=banana_banana_v2
    //% block="how many bananas (V2 only) $n"
    //% parts="v2"
    //% shim=banana::bananas_v2_only
    export function bananasV2Only(n: number): number {
        // The simulator does not differentiate between board version
        // so the TypeScript code will always run
        return n;
    }
}
