let expandRight = [
    {
        left: '25%'
    },
    {
        left: '0%'
    }
];

let expandRightTime = 
{
    duration: 2000,
}

let expandLeft = [
    {
        right: '25%'
    },
    {
        right: '0%'
    }
];

let expandLeftTime = 
{
    duration: 2000,
}

let contentFadeIn = [
    {
        opacity: '0'
    },
    {
        opacity: '1'
    }
];

let contentFadeInTime =
{
    delay: 2000,
    duration: 2000,
    fill: "forwards"
}
let borderAppear = [
{
    opacity: '0'
},
{
    opacity: '1'
}]
let borderAppearTime =
{
    duration: 2000,
    fill: "forwards"
}

let imageOne = document.getElementById('IntroImg')
let imageTwo = document.getElementById('AboutImg')
let imageThree = document.getElementById('PortfolioImg')
let imageFour = document.getElementById('InterestingImg')
let contentOne = document.getElementById('IntroContent')
let contentTwo = document.getElementById('AboutContent')
let contentThree = document.getElementById('PortfolioContent')
let contentFour = document.getElementById('InterestingContent')
let CardHeadOne = document.getElementById('CardHeadOne')
let CardHeadTwo = document.getElementById('CardHeadTwo')
let CardHeadThree = document.getElementById('CardHeadThree')
let CardHeadFour = document.getElementById('CardHeadFour')
let borderOne = document.getElementById('Intro')
let borderTwo = document.getElementById('About')
let borderThree = document.getElementById('Portfolio')
let borderFour = document.getElementById('Interesting')

let animateRight1 = imageOne.animate(
    expandRight,
    expandRightTime
)
let animateRight2 = imageThree.animate(
    expandRight,
    expandRightTime
)
let animateLeft1 = imageTwo.animate(
    expandLeft,
    expandLeftTime
)
let animateLeft2 = imageFour.animate(
    expandLeft,
    expandLeftTime
)
let animateContentRight1 = contentOne.animate(
    contentFadeIn,
    contentFadeInTime
)
let animateContentRight2 = contentThree.animate(
    contentFadeIn,
    contentFadeInTime
)
let animateContentLeft1 = contentTwo.animate(
    contentFadeIn,
    contentFadeInTime
)
let animateContentLeft2 = contentFour.animate(
    contentFadeIn,
    contentFadeInTime
)
let animateBorder1 = borderOne.animate(
    borderAppear,
    borderAppearTime
)
let animateBorder2 = borderTwo.animate(
    borderAppear,
    borderAppearTime
)
let animateBorder3 = borderThree.animate(
    borderAppear,
    borderAppearTime
)
let animateBorder4 = borderFour.animate(
    borderAppear,
    borderAppearTime
)

let playRight1 = function() {
    if(click1 % 2 != 0){
        animateRight1.play();
        animateContentRight1.play()
        animateBorder1.play()
    }
    else{
        animateRight1.reverse();
        animateContentRight1.reverse()
        animateBorder1.reverse()
    }
    click1++
}

let playRight2 = function() {
    if(click2 % 2 != 0){
        animateRight2.play();
        animateContentRight2.play()
        animateBorder3.play()
    }
    else{
        animateRight2.reverse();
        animateContentRight2.reverse()
        animateBorder3.reverse()
    }
    click2++
}
let playLeft1 = function() {
    
    if(click3 % 2 != 0){
        animateLeft1.play();
        animateContentLeft1.play()
        animateBorder2.play()
    }
    else{
        animateRight1.reverse();
        animateContentRight1.reverse()
        animateBorder2.reverse()
    }
    click3++
}
let playLeft2 = function() {
    
    if(click4 % 2 != 0){
        animateLeft2.play();
        animateContentLeft2.play()
        animateBorder4.play()
    }
    else{
        animateRight2.reverse();
        animateContentRight2.reverse()
        animateBorder4.reverse()
    }
    click4++
}

animateRight1
animateRight1.pause()
animateRight2
animateRight2.pause()
animateLeft1
animateLeft1.pause()
animateLeft2
animateLeft2.pause()
animateContentRight1
animateContentRight1.pause()
animateContentRight2
animateContentRight2.pause()
animateContentLeft1
animateContentLeft1.pause()
animateContentLeft2
animateContentLeft2.pause()
animateBorder1
animateBorder1.pause()
animateBorder2
animateBorder2.pause()
animateBorder3
animateBorder3.pause()
animateBorder4
animateBorder4.pause()

let click1 = 1
let click2 = 1
let click3 = 1
let click4 = 1
CardHeadOne.addEventListener("click", playRight1, false)
CardHeadTwo.addEventListener("click", playLeft1, false)
CardHeadThree.addEventListener("click", playRight2, false)
CardHeadFour.addEventListener("click", playLeft2, false)