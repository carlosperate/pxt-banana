/**
 * Provides access to all the banana functionality functionality.
 */
//% color=190 weight=100 icon="\uf1ec" block="Banana Blocks"
namespace banana {
    /**
     * How many bananas?
     * @param n number of bananas
     */
    //% blockId=banana_bananas
    //% block="show|number %n"
    //% icon="\uf1ec"
    export function bananas(n: number): number {
        return n;
    }
}
