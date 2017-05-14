function sums() {
	sum=10000;
	for(i=1;i<5;i++)
	{
		var elem=document.getElementById("box"+i);
		if(elem.checked)
			sum=sum+parseInt(elem.value);
	}
	document.formText.Сosts.value=sum+' руб';
}
/*
window.onload=function() {

	for(i=1;i<9;i++)
	{
		var a=document.querySelector("#view_"+i);
		var b=document.getElementById("block_"+i);
		a.onmouseout=function () {
			b.style.display='none';
		}
		a.onmouseover=function () {
			b.style.display='block';
		}
	}
}
*/
function ShowHideBlock(r){
    $('#block_'+r).slideToggle('slow');
}