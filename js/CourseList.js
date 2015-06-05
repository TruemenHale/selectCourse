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
	var oChange=$('.change');
	var aLi=$('.courseBox>li');
	//var data=[{
	//	'className':'操作系统',
	//	'classTeacher':'兴妈',
	//	'classType':'[人文]',
	//	'classValue':1
	//},{
	//	'className':'操作系统',
	//	'classTeacher':'兴妈',
	//	'classType':'[任选]',
	//	'classValue':2
	//},{
	//	'className':'操作系统',
	//	'classTeacher':'兴妈',
	//	'classType':'[科技]',
	//	'classValue':3
	//},{
	//	'className':'操作系统',
	//	'classTeacher':'兴妈',
	//	'classType':'[女子]',
	//	'classValue':4
	//},{
	//	'className':'操作系统',
	//	'classTeacher':'兴妈',
	//	'classType':'[人文]',
	//	'classValue':5
	//},{
	//	'className':'操作系统',
	//	'classTeacher':'兴妈',
	//	'classType':'[人文]',
	//	'classValue':0
	//}];
	var type=['className','classTeacher','classType'];
	oChange.click(function(){
		$.ajax({
			url: "?",
			type: "get",
			dataType: 'json',
			contentType: "application/json"
		}).fail(function () {
			alert("与服务器连接错误!");
		}).complete(function (data) {
			data = data.responseJSON;
		});
		for(var i = 0;i<aLi.length;i++){
			li = aLi.eq(i);
			var n = li.find('.details');
			for(var j = 0;j< 3;j++){
				var v=data[i][type[j]];
				console.log(v);
				n.eq(j).html(v);
			}
			var p = li.find('.star-line>i');
			p.removeClass('light');
			for(var y = 0;y < data[i]['classValue'];y++){
				p.eq(y).addClass('star light');
			}
		}
	});
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