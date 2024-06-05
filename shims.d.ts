// Auto-generated. Do not edit.


    /**
     * C++ functions as part of the extension.
     * 
     * A function defined here will run on the micro:bit, there is also a "shim"
     * in the main.ts file that will be run in the simulator.
     * Info about shims: https://makecode.com/simshim
     */

declare namespace banana {

    /**
     * This simple C++ function to simply add your bananas!
     */
    //% shim=banana::banana_add
    function banana_add(bananas: int32, multiplier: int32): int32;

    /**
     * This function uses the C preprocessor to compile different code
     * depending on the version of the micro:bit.
     */
    //% shim=banana::banana_multiplier
    function banana_multiplier(bananas: int32): int32;

    /**
     * This function uses the C preprocessor to throw an error if this function
     * is run on a micro:bit V1.
     */
    //% shim=banana::bananas_v2_only
    function bananas_v2_only(bananas: int32): int32;
}

// Auto-generated. Do not edit. Really.
