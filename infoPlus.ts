//% groups=['Style']
//% blockGap=8
namespace info.plus {
    /**
     * Sets life icon
     * @param new life icon
     */
    //% block="set life image to $lifeImage"
    //% lifeImage.shadow=screen_image_picker
    //% group="Life"
    //% lifeImage.defl=image.create(8, 8)
    export function setLifeIcon(lifeImage: Image): void {
        info.setLifeImage(lifeImage)
    }
    /**
     * Sets life border color
     * @param border color
     */
    //% block="set border color to $borderColor"
    //% borderColor.shadow="colorindexpicker"
    //% group="Style"
    //% textColor.defl=3
    export function setInfoBorderColor(borderColor: number): void {
        info.setBorderColor(borderColor)
    }

    /**
    * Sets life background color
    * @param background color
    */
    //% block="set background color to $bgColor"
    //% bgColor.shadow="colorindexpicker"
    //% group="Style"
    //% textColor.defl=1
    export function setInfoBackgroundColor(bgColor: number): void {
        info.setBackgroundColor(bgColor)
    }

    /**
    * Sets life text color
    * @param text color
    */
    //% block="set text color to $textColor"
    //% textColor.shadow="colorindexpicker"
    //% group="Style"
    //% textColor.defl=3
    export function setTextColor(textColor: number): void {
        info.setFontColor(textColor)
    }

    /**
    * Returns the info border color
    */
    //% block="border color"
    //% group="Style"
    export function borderColor(): number {
        return info.borderColor()
    }

    /**
    * Returns the info background color
    */
    //% block="background color"
    //% group="Style"
    export function backgroundColor(): number {
        return info.backgroundColor()
    }

    /**
    * Returns the info text color
    */
    //% block="text color"
    //% group="Style"
    export function textColor(): number {
        return info.fontColor()
    }

    /**
* Turns the score on/off
*/
    //% block="turn score $on"
    //% group="Score"
    //% on.shadow="toggleOnOff"
    export function scoreDisplay(on: boolean): void {
        info.setScore(info.score())
        info.showScore(on)
    }
    /**
    * Shows/hides the life
    */
        //% block="turn life $on"
        //% group="Life"
        //% on.shadow="toggleOnOff"
        export function lifeDisplay(on: boolean): void {
            info.setLife(info.life())
            info.showLife(on)
        }
    /**
* Shows/hides the countdown
* Countdown is automatically 0:00 if not previously set
*/
    //% block="turn countdown $on"
    //% group="Countdown"
    //% on.shadow="toggleOnOff"
    export function countdown(on: boolean): void {
        info.startCountdown(info.countdown())
        info.showCountdown(on)
    }
}