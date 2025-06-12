/**
 * This file contain test code for extension development.
 * It will not be included or compiled when this package is added to a project as an extension
 */

basic.forever(() => {
    basic.showNumber(banana.bananas(1))
    basic.pause(1000)
    basic.showNumber(banana.bananaAdd(2, 3))
    basic.pause(1000)
    basic.showNumber(banana.bananaMultiplier(4))
    basic.pause(1000)
    basic.showNumber(banana.bananasV2Only(5))
    basic.pause(1000)
})
