/**
 * This file contain test code for extension development.
 * It will not be included or compiled when this package is added to a project as an extension
 */

basic.forever(() => {
    basic.showNumber(banana.bananas(2))
    basic.pause(1000)
    basic.showNumber(banana.bananaAdd(2, 2))
    basic.pause(1000)
    basic.showNumber(banana.bananaMultiplier(3))
    basic.pause(1000)
    basic.showNumber(banana.bananasV2Only(3))
    basic.pause(1000)
})
