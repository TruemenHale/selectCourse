/**
 * Created by truemenhale on 15/5/30.
 */
$(function(){
	var oTi=$('.teacher_infor');
	var oClose=$('.close');
	var oM=$('.mask');
	var aT=$('.Teacher');
	var oL=$('.login_box');
	var oC=$('.login_close');
	var oLb=$('.login_btn');
	aT.click(function(){
		oTi.css('display','block');
		oM.css('display','block');
	});
	oLb.click(function(){
		oL.css('display','block');
		oM.css('display','block');
	});
	oClose.click(function(){
		oTi.css('display','none');
		oM.css('display','none');
	});
	oC.click(function(){
		oL.css('display','none');
		oM.css('display','none');
	});
	oTi.css('left',($(window).width()-1000)/2);
	oL.css('left',($(window).width()-507)/2);
});