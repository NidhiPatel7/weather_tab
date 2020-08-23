function moveTo() 
{
    // console.log('hi');
    var oCurrent = document.querySelector('.current');
    oCurrent.classList.remove('current');
    this.classList.add('current');
    //console.log(oCurentClass);

    var otabLeft = this.children[0];
    var oWeather = document.querySelector('.weather');
    oWeather.children[0].innerHTML = otabLeft.children[0].innerHTML;

    var oRight = this.children[1];
     
     oWeather.children[2].innerHTML = oRight.children[0].innerHTML; 
    // console.log(oRight.children[0].innerHTML);

}


var oTabs = document.querySelector('.tabs');
for (var i = 0; i < oTabs.children.length; i++) 
{
    oTabs.children[i].addEventListener('click',moveTo);
    
}