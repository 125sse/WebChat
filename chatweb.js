// JavaScript Document
var set_pop;

/*------昵称------*/
var nickName = new Array();
nickName[0] = "Wgp.class";
nickName[1] = "FEI_Y";
nickName[2] = "安吉";
nickName[3] = "形同陌路";
nickName[4] = "空白的等待";
nickName[5] = "自找的痛";
nickName[6] = "久爱久碍";
nickName[7] = "烈酒烫心";
nickName[8] = "捂风挽笑";
nickName[9] = "无人暖心°";
nickName[10] = "弃我爱她";
nickName[11] = "她太刺眼";
nickName[12] = "恃爱行凶";
nickName[13] = "闭了眼的泪";
nickName[14] = "逼真的太虚伪";
nickName[15] = "赠我空欢喜";
nickName[16] = "旁观者^";
nickName[17] = "烂好人i";
nickName[18] = "冷暖自知。";
nickName[19] = "独角戏°";

/*------消息-----*/
var news = new Array();
news[0] = "哈哈";
news[1] = "晚安";
news[2] = "老爸在吗";
news[3] = "再见";
news[4] = "溜了溜了";
news[5] = "滚蛋";
news[6] = "哎呦喂";
news[7] = "来瓶烧酒";
news[8] = "树大招风";
news[9] = "心寒";
news[10] = "你真行啊";
news[11] = "反光镜.....";
news[12] = "凶多吉少";
news[13] = "怎么流得出来";
news[14] = "假动作真假";
news[15] = "奈我何";
news[16] = "嗯，很清楚";
news[17] = "你是个好人";
news[18] = "如人饮水";
news[19] = "梁静茹的勇气";

onload = function(){
	"use strict";
	/*
		主体（body）部分
	*/
	var mbody = document.getElementById("mbody");
	mbody.style.width = "85%";
	mbody.style.height = "85%";
	mbody.style.position = "absolute";
	mbody.style.margin = "4% 7.5%";
	
	/*
		左侧信息栏
	*/
	var left = document.getElementById("left");
	left.style.width = "5%";
	left.style.height = "100%";
	
	// 左侧头像
	var icon = document.getElementById("icon");
	icon.style.width = "80%";
	icon.style.height = icon.clientWidth + "px";
	icon.style.marginLeft = (left.clientWidth - icon.clientWidth)/2 + "px";
	icon.style.marginTop = icon.clientWidth / 10 + "px";
	icon.onmousedown = function(){};
	
	// 左侧消息
	var info = document.getElementById("info");
	info.style.width = "80%";
	info.style.height = info.clientWidth + "px";
	info.style.marginLeft = parseInt(icon.style.marginLeft)+"px";
	var a = icon.clientHeight + parseInt(icon.style.marginTop) + parseInt(icon.clientHeight / 2);
	info.style.marginTop = a + "px";
	
	// 左侧联系人
	var contact = document.getElementById("contact");
	contact.style.width = "80%";
	contact.style.height = contact.clientWidth + "px";
	contact.style.marginLeft = parseInt(icon.style.marginLeft)+"px";
	var b = a + parseInt(info.clientHeight) + parseInt(icon.clientHeight / 2);
	contact.style.marginTop = b + "px";
	
	// 左侧设置
	var set = document.getElementById("set");
	set.style.width = "80%";
	set.style.height = set.clientWidth + "px";
	set.style.marginLeft = parseInt(icon.style.marginLeft)+"px";
	set.style.marginTop = mbody.clientHeight * 0.91 + "px";
	
	/*
		中间的好友栏
	*/
	var friends = document.getElementById("friends");
	friends.onmousedown = function(){};
	
	//	中间搜索增加
	var seach_add = document.getElementById("seach_add");
	seach_add.style.width = "100%";
	seach_add.style.height = icon.clientWidth + "px";
	seach_add.style.marginTop = "0px";
	seach_add.onmousedown = function(){};
	
	//搜索
	var seach = document.getElementById("seach");
	seach.style.position = "relative";
	seach.style.float = "left";
	seach.style.width = "75%";
	seach.style.height = "50%";
	seach.style.marginLeft = "5%";
	seach.style.marginTop = "7%";
	seach.style.background = "#D1D1D1";
	seach.style.borderRadius = seach.clientHeight / 4 + "px";
	seach.style.boxSizing = "border-box";
	seach.style.paddingTop = seach.clientHeight / 5 +"px";
	seach.style.paddingLeft = seach.clientHeight / 4 + "px";
	seach.style.overflow = "hidden";
	seach.style.fontSize = "82%";
	seach.style.color = "rgba(0,0,0,0.5)";
	
	var add = document.getElementById("add");
	add.style.position = "relative";
	add.style.float = "right";
	add.style.height = "50%";
	add.style.width = add.clientHeight + "px";
	add.style.marginRight = "5%";
	add.style.marginTop = "7%";
	add.style.background = "#D1D1D1";
	add.style.borderRadius = add.clientHeight / 6 + "px";
	
	//	中间联系人列表
	var friend_contact = document.getElementById("friend_contact");
	friend_contact.style.marginLeft = "1%";
	friend_contact.style.marginTop = parseInt(seach_add.style.marginTop) + seach_add.clientHeight + "px";
	friend_contact.style.height = friends.clientHeight - parseInt(friend_contact.style.marginTop) + "px";
	
	//	第一个联系人
	var first_friend = document.getElementById("first_friend");
	first_friend.style.marginTop = "0px";
	first_friend.onmouseover = function(){
		this.style.background = "#D1D1D1";
	};
	first_friend.onmouseout = function(){
		this.style.background = "#E4E4E4";
	};
	
	//	第一个联系人的头像
	var friend_icon_first = document.createElement("img");
	first_friend.appendChild(friend_icon_first);
	friend_icon_first.style.position = "absolute";
	friend_icon_first.style.float = "left";
	friend_icon_first.style.height = "80%";
	friend_icon_first.style.width = friend_icon_first.clientHeight + "px";
	friend_icon_first.style.marginLeft = "5%";
	friend_icon_first.style.marginTop = "4%";
	friend_icon_first.style.borderRadius = friend_icon_first.clientWidth/4 + "px";
	friend_icon_first.src = "tx/0.jpg";
	friend_icon_first.onmousedown = function(e){
			e.preventDefault();
	};
	friend_icon_first.style.userSelect = "none";
	
	//	第一个联系人的名字
	var friend_name_first = document.createElement("div");
	first_friend.appendChild(friend_name_first);
	friend_name_first.style.position = "absolute";
	friend_name_first.style.float = "left";
	friend_name_first.style.width = first_friend.clientWidth - friend_icon_first.clientWidth - parseInt(friend_icon_first.style.marginLeft) + "px";
	friend_name_first.style.height = "40%";
	friend_name_first.style.marginLeft = 3*parseInt(friend_icon_first.style.marginLeft) + friend_icon_first.clientWidth + "px";
	friend_name_first.style.marginTop = "4%";
	friend_name_first.onmousedown = function(e){
			e.preventDefault();
	};
	friend_name_first.innerHTML = nickName[0];
	friend_name_first.style.fontFamily = "myFont_content";
	friend_name_first.style.fontSize = friend_name_first.clientHeight*0.85 + "px";
	friend_name_first.style.color = "rgba(0,0,0,0.8)";
	
	//	第一个联系人的消息
	var friend_info_first = document.createElement("div");
	first_friend.appendChild(friend_info_first);
	friend_info_first.style.position = "absolute";
	friend_info_first.style.float = "left";
	friend_info_first.style.width = first_friend.clientWidth - friend_icon_first.clientWidth - parseInt(friend_icon_first.style.marginLeft) + "px";
	friend_info_first.style.height = "40%";
	friend_info_first.style.marginLeft = 3*parseInt(friend_icon_first.style.marginLeft) + friend_icon_first.clientWidth + "px";
	friend_info_first.style.marginTop = parseInt(friend_name_first.style.marginTop) + friend_name_first.clientHeight*1.1 + "px";
	friend_info_first.onmousedown = function(e){
			e.preventDefault();
	};
	friend_info_first.innerHTML = news[0];
	friend_info_first.style.fontSize = "100%";
	friend_info_first.style.lineHeight = "220%";
	friend_info_first.style.fontFamily = "myFont_content";
	friend_info_first.style.color = "rgba(0,0,0,0.5)";
	
	//	自动增加联系人到列表
	for(var i=1;i<20;i++){
		//	联系人的父容器
		var mDivF = document.createElement("div");
		mDivF.style.float = "left";
		mDivF.style.clear = "both";
		mDivF.style.position = "absolute";
		mDivF.style.width = "99%";
		mDivF.style.height = friend_contact.lastElementChild.clientHeight + "px";
		mDivF.style.marginTop = friend_contact.lastElementChild.clientHeight + parseInt(friend_contact.lastElementChild.style.marginTop) + "px";
		mDivF.onmousedown = function(){};
		
		friend_contact.appendChild(mDivF);
		
		mDivF.onmouseover = function(){
			this.style.background = "#D1D1D1";
		};
		mDivF.onmouseout = function(){
			this.style.background = "#E4E4E4";
		};
		
		//	好友的头像
		var friend_icon = document.createElement("img");
		mDivF.appendChild(friend_icon);
		friend_icon.style.position = "absolute";
		friend_icon.style.float = "left";
		friend_icon.style.height = "80%";
		friend_icon.style.width = friend_icon.clientHeight + "px";
		friend_icon.style.marginLeft = "5%";
		friend_icon.style.marginTop = "4%";
		friend_icon.style.borderRadius = friend_icon.clientWidth/4 + "px";
		friend_icon.src = "tx/" + i +".jpg";
		friend_icon.onmousedown = function(e){
			e.preventDefault();
		};
		friend_icon.style.userSelect = "none";
		
		//	好友的名字
		var friend_name = document.createElement("div");
		mDivF.appendChild(friend_name);
		friend_name.style.position = "absolute";
		friend_name.style.float = "left";
		friend_name.style.width = mDivF.clientWidth - friend_icon.clientWidth - parseInt(friend_icon.style.marginLeft) + "px";
		friend_name.style.height = "40%";
		friend_name.style.marginLeft = 3*parseInt(friend_icon.style.marginLeft) + friend_icon.clientWidth + "px";
		friend_name.style.marginTop = "4%";
		friend_name.onmousedown = function(e){
			e.preventDefault();
		};
		friend_name.style.boxSizing = "border-box";
		friend_name.innerHTML = nickName[i];
		friend_name.style.fontFamily = "myFont_content";
		friend_name.style.fontSize = friend_name.clientHeight*0.85 + "px";
		friend_name.style.color = "rgba(0,0,0,0.8)";
		
		//	好友的消息
		var friend_info = document.createElement("div");
		mDivF.appendChild(friend_info);
		friend_info.style.position = "absolute";
		friend_info.style.float = "left";
		friend_info.style.width = mDivF.clientWidth - friend_icon.clientWidth - parseInt(friend_icon.style.marginLeft) + "px";
		friend_info.style.height = "40%";
		friend_info.style.marginLeft = 3*parseInt(friend_icon.style.marginLeft) + friend_icon.clientWidth + "px";
		friend_info.style.marginTop = parseInt(friend_name.style.marginTop) + friend_name.clientHeight*1.1 + "px";
		friend_info.onmousedown = function(e){
			e.preventDefault();
		};
		friend_info.style.fontSize = "100%";
		friend_info.style.lineHeight = "220%";
		friend_info.innerHTML = news[i];
		friend_info.style.fontFamily = "myFont_content";
		friend_info.style.color = "rgba(0,0,0,0.5)";
	}
	
	/*
		设置按钮弹窗
	*/
	set_pop = document.getElementById("set_pop");
	set_pop.style.marginTop = parseInt(set.style.marginTop) - set_pop.clientHeight + set.clientHeight + "px";
	set_pop.style.display = "none";
	
	/*
	    右侧消息显示、编辑栏
	*/
	var right = document.getElementById("right");
	right.style.width = "75%";
	right.style.height = "100%";
	right.style.marginLeft = "25.2%";
	right.style.borderBottom = "1px solid #C4C4C4";
	
	// 右边-----标题
	var right_title = document.getElementById("right_title");
	right_title.style.width = "100.5%";
	right_title.style.height = seach_add.clientHeight + "px";
	right_title.style.marginTop = parseInt(seach_add.style.marginTop) + "px";
	right_title.style.lineHeight = right_title.style.height;
	right_title.style.marginLeft = "-0.5%";
	right_title.style.borderRight = "1px solid #C4C4C4";
	right_title.style.borderTop = "1px solid #C4C4C4";
	right_title.style.background = "#E4E4E4";
	
	//	标题内容
	var right_t_name = document.getElementById("right_t_name");
	right_t_name.style.height = "100%";
	right_t_name.style.verticalAlign = "middle";
	right_t_name.style.marginLeft = "3%";
	right_t_name.style.fontSize = right_t_name.clientHeight * 0.5 + "px";
	right_t_name.style.userSelect = "none";
	right_t_name.style.cursor = "pointer";
	
	// 右边-----消息显示区
	var right_chat = document.getElementById("right_chat");
	right_chat.style.width = "100%";
	right_chat.style.height = (right.clientHeight - right_title.clientHeight - parseInt(right_title.style.marginTop) ) *0.75  + "px";
	right_chat.style.marginTop = right_title.clientHeight + "px";
	right_chat.style.borderTop = "1px solid rgba(196,196,196,0.3)";
	right_chat.style.borderRight = "1px solid #C4C4C4";
	
	// 右边-----内容编辑区
	var right_write = document.getElementById("right_write");
	right_write.style.width = "100%";
	right_write.style.height = (right.clientHeight - right_title.clientHeight - parseInt(right_title.style.marginTop) ) *0.2519  + "px";
	right_write.style.marginTop = right_title.clientHeight + right_chat.clientHeight + "px";
	right_write.style.borderRight = "1px solid #C4C4C4";
	right_write.style.background = "#ffffff";
	
	//	内容编辑区内的功能栏（表情、文件、剪切、记录、音频、视频）
	var right_w_option = document.getElementById("right_w_option");
	right_w_option.style.width = "100%";
	right_w_option.style.height = "15%";
	right_w_option.style.borderTop = "1px solid rgba(196,196,196,0.3)";
	
	//	表情
	var emoj = document.getElementById("emoj");
	emoj.style.height = "100%";
	emoj.style.width = emoj.clientHeight + "px";
	emoj.style.marginLeft = "3%";
	emoj.style.cursor = "pointer";
	
	//	文件
	var file = document.getElementById("file");
	file.style.height = "100%";
	file.style.width = file.clientHeight + "px";
	file.style.marginLeft = right_w_option.clientWidth * 0.06 + emoj.clientWidth + "px";
	file.style.cursor = "pointer";
	
	//	剪切
	var cut = document.getElementById("cut");
	cut.style.height = "100%";
	cut.style.width = cut.clientHeight + "px";
	cut.style.marginLeft = right_w_option.clientWidth * 0.09 + emoj.clientWidth*2 + "px";
	cut.style.cursor = "pointer";
	
	//	记录
	var record = document.getElementById("record");
	record.style.height = "100%";
	record.style.width = record.clientHeight + "px";
	record.style.marginLeft = right_w_option.clientWidth * 0.12 + emoj.clientWidth*3 + "px";
	record.style.cursor = "pointer";
	
	//	视频
	var video = document.getElementById("video");
	video.style.height = "100%";
	video.style.width = video.clientHeight + "px";
	video.style.marginLeft = right_w_option.clientWidth * 0.99 - video.clientWidth + "px";
	video.style.cursor = "pointer";
	
	//	音频
	var voice = document.getElementById("voice");
	voice.style.height = "100%";
	voice.style.width = voice.clientHeight + "px";
	voice.style.marginLeft = right_w_option.clientWidth * 0.98 - voice.clientWidth*2 + "px";
	voice.style.cursor = "pointer";
	
	//	发送内容编辑区
	var right_w_edit = document.getElementById("right_w_edit");
	right_w_edit.style.width = "100%";
	right_w_edit.style.height = "70%";
	right_w_edit.style.boxSizing = "border-box";
	right_w_edit.style.paddingTop = right_w_edit.clientHeight * 0.03 + "px";
	
	//	内容输入区
	var edit_area = document.getElementById("edit_area");
	edit_area.style.width = "100%";
	edit_area.style.height = "100%";
	edit_area.style.outline = "none";
	edit_area.style.border = "0px";
	edit_area.style.boxSizing = "border-box";
	edit_area.style.resize = "none";
	edit_area.style.paddingTop = edit_area.clientHeight * 0.07 + "px";
	edit_area.style.paddingLeft = right_w_edit.clientWidth * 0.02 + "px";
	edit_area.style.fontSize = edit_area.clientHeight * 0.2 + "px";
	edit_area.onkeydown = function(event){
		if(event.keyCode === 13){
			send_get("send");
			event.returnValue = false;
			event.preventDefault();
		}
	};
	
	//	发送按钮区
	var right_w_send = document.getElementById("right_w_send");
	right_w_send.style.width = "100%";
	right_w_send.style.height = "15%";
	
	//	发送按钮
	var btn_send = document.getElementById("send");
	btn_send.style.height = "100%";
	btn_send.style.width = btn_send.clientHeight * 3.5 +"px";
	btn_send.style.marginRight = "1%";
	btn_send.style.marginTop = "-0.5%";
	btn_send.style.textAlign = "center";
	btn_send.style.border = "1px solid rgba(196,196,196,0.5)";
	btn_send.style.outline = "none";
	btn_send.style.lineHeight = btn_send.clientHeight + "px";
};

//------------检查发送内容是否为空--------------//
function isEmpty(str){
	"use strict";
	  if(str.length === 0){
		  return true;
	  }
	  var regu = "^[ ]+$";
	  var re = new RegExp(regu);
	  var isEmpty = re.test(str);
	  if(isEmpty){
		    return true;
	   }
	  return false;	  
}

//----------------发送消息和接收消息--------------//
function send_get(s_g){
	"use strict";
	var content_w = document.getElementById("edit_area");
	//	检查是否为空消息
	var Empty_result = isEmpty(content_w.value);
	if(Empty_result){
		alert("不能发送空白信息");
		content_w.value = "";
		return;
	}
	
	var mChat = document.getElementById("right_chat");
	var mContainer = document.createElement("div");
	mContainer.ondrag = function(){};
	var mIcon = document.createElement("img");
	var mInfo = document.createElement("span");
	var mJtou = document.createElement("span");
	
	mChat.appendChild(mContainer);
	mContainer.style.width = "70%";
	mContainer.style.clear = "both";
	mContainer.style.position = "relative";
	mContainer.style.marginBottom = "2%";
	
	mIcon.style.cursor = "pointer";
	mIcon.style.userSelect = "none";
	mIcon.onmousedown = function(e){
		e.preventDefault();
	};
	
	mInfo.style.wordWrap = "break-word";
	mInfo.style.textAlign = "justify";
	mInfo.style.textAlianLast = "left";
	mInfo.style.boxSizing = "border-box";
	mInfo.style.cursor = "text";
	
	// 发送消息
	if(s_g === "send"){
		mContainer.style.float = "right";
		mContainer.appendChild(mIcon);
		mContainer.appendChild(mInfo);
		mContainer.appendChild(mJtou);
		
		mIcon.style.width = "10%";
		mIcon.style.height = mIcon.clientWidth + "px";
		mIcon.style.position = "relative";
		mIcon.style.float = "right";
		mIcon.style.marginRight = "1%";
		mIcon.style.marginLeft = "2%";
		mIcon.style.borderRadius = mIcon.clientWidth * 0.3 + "px";
		var touxiang = document.getElementById("touxiang");
		mIcon.src = touxiang.src;
		
		mInfo.style.width = "86%";
		mInfo.style.background = "rgb(158,234,106)";
		mInfo.style.position = "relative";
		mInfo.style.marginRight = "1%";
		mInfo.style.float = "left";
		mInfo.style.borderRadius = mInfo.clientWidth * 0.009 + "px";
		mInfo.style.paddingLeft = mInfo.clientWidth * 0.025 + "px";
		mInfo.style.paddingRight = mInfo.clientWidth * 0.025 + "px";
		mInfo.style.fontFamily = "myFont_content";
		mInfo.style.fontSize = "150%";
		mInfo.innerHTML = content_w.value;
		
		if(mInfo.clientHeight < mIcon.clientHeight){
			mInfo.style.height = mIcon.clientHeight + "px";
			mInfo.style.paddingTop = mInfo.clientHeight /4 +"px";
			mInfo.style.paddingBottom = mInfo.clientHeight / 4 +"px";
		}else{
			mInfo.style.paddingTop = mInfo.clientWidth * 0.015 + "px";
			mInfo.style.paddingBottom = mInfo.clientWidth * 0.015 + "px";
		}
		
		mJtou.style.position = "absolute";
		mJtou.style.float = "right";
		mJtou.style.width = "0px";
		mJtou.style.height = "0px";
		mJtou.style.right = "12.13%";
		var l_value = mContainer.clientWidth * 0.02 + "px";
		var t_value = parseInt(l_value) * 0.9 + "px";
		var b_value = parseInt(l_value) * 0.9 + "px";
		mJtou.style.borderTop = t_value + " solid" +  " #F5F5F5";
		mJtou.style.borderBottom = b_value + " solid" +  " #F5F5F5";
		mJtou.style.borderLeft = l_value + " solid" + " #9EEA6A";
		mJtou.style.borderRight = "0px";
		
		mInfo.onmouseover = function(){
			this.style.background = "rgb(152,225,101)";
			mJtou.style.borderLeft = l_value + " solid" + " rgb(152,225,101)";
		};
		mInfo.onmouseout = function(){
			this.style.background = "rgb(158,234,106)";
			mJtou.style.borderLeft = l_value + " solid" + " rgb(158,234,106)";
		};
		
		if(mInfo.clientHeight > mIcon.clientHeight){
			mJtou.style.marginTop = mIcon.clientHeight / 3 + "px";
		}else{
			mJtou.style.marginTop = mInfo.clientHeight / 4 + "px";
		}
		
		content_w.value = "";
		mChat.scrollTop = mChat.scrollHeight;
	}
	// 接收消息
	else if(s_g === "get"){
		mContainer.style.float = "left";
		mContainer.appendChild(mIcon);
		mContainer.appendChild(mInfo);
		mContainer.appendChild(mJtou);
		
		mIcon.style.width = "10%";
		mIcon.style.height = mIcon.clientWidth + "px";
		mIcon.style.position = "relative";
		mIcon.style.float = "left";
		mIcon.style.marginTop = (mContainer.clientHeight - mIcon.clientHeight) / 2 + "px";
		mIcon.style.marginLeft = "1%";
		mIcon.style.marginRight = "2%";
		mIcon.style.borderRadius = mIcon.clientWidth * 0.3 + "px";
		mIcon.src = "tx/1.jpg";
		
		mInfo.style.width = "86%";
		mInfo.style.marginTop = parseInt(mIcon.style.marginTop) + "px";
		mInfo.style.background = "rgb(255,255,255)";
		mInfo.style.position = "relative";
		mInfo.style.marginLeft = "1%";
		mInfo.style.float = "right";
		mInfo.style.borderRadius = mInfo.clientWidth * 0.009 + "px";
		mInfo.style.paddingLeft = mInfo.clientWidth * 0.025 + "px";
		mInfo.style.paddingRight = mInfo.clientWidth * 0.025 + "px";
		mInfo.style.border = "1px solid rgba(196,196,196,0.5)";
		mInfo.style.borderLeft = "1px solid rgba(196,196,196,0.2)";

		mInfo.style.fontFamily = "myFont_content";
		mInfo.style.fontSize = "150%";
		
		mInfo.innerHTML = content_w.value;
		
		if(mInfo.clientHeight < mIcon.clientHeight){
			mInfo.style.height = mIcon.clientHeight + "px";
			mInfo.style.paddingTop = mInfo.clientHeight / 4 + "px";
			mInfo.style.paddingBottom = mInfo.clientHeight / 4 +"px";
		}else{
			mInfo.style.paddingTop = mInfo.clientWidth * 0.015 + "px";
			mInfo.style.paddingBottom = mInfo.clientWidth * 0.015 + "px";
		}
		
		mJtou.style.position = "absolute";
		mJtou.style.float = "left";
		mJtou.style.width = "0px";
		mJtou.style.height = "0px";
		mJtou.style.left = "12.13%";
		var r_value_get = mContainer.clientWidth * 0.02 + "px";
		var t_value_get = parseInt(r_value_get)*0.9 + "px";
		var b_value_get = parseInt(r_value_get)*0.9 + "px";
		mJtou.style.borderTop = t_value_get + " solid" + " #F5F5F5";
		mJtou.style.borderBottom = b_value_get + " solid" + " #F5F5F5";
		mJtou.style.borderRight = r_value_get + " solid" + " rgb(255,255,255)";
		mJtou.style.borderLeft = "0px";
		
		mInfo.onmouseover = function(){
			this.style.background = "rgb(246,246,246)";
			mJtou.style.borderRight = r_value_get + " solid" + " rgb(246,246,246)";
		};
		mInfo.onmouseout = function(){
			this.style.background = "rgb(255,255,255)";
			mJtou.style.borderRight = r_value_get + " solid" + " rgb(255,255,255)";
		};
		
		if(mInfo.clientHeight > mIcon.clientHeight){
			mJtou.style.marginTop = mIcon.clientHeight / 3 + "px";
		}else{
			mJtou.style.marginTop = mInfo.clientHeight / 4 + "px";
		}
		
		content_w.value = "";
		
		mChat.scrollTop = mChat.scrollHeight;
	}
	
	
}

//-------左侧栏消息鼠标进入-----------//
function info_over(obj){
	"use strict";
	obj.src = "info_over.png";
}

//-------左侧栏消息鼠标离开-----------//
function info_out(obj){
	"use strict";
	obj.src = "info.png";
}

//-------左侧栏设置鼠标进入-----------//
function set_over(obj){
	"use strict";
	obj.src = "set_over.png";
}

//-------左侧栏设置鼠标离开-----------//
function set_out(obj){
	"use strict";
	obj.src = "set.png";
}

//-------左侧栏联系人鼠标进入-----------//
function contact_over(obj){
	"use strict";
	obj.src = "contact_over.png";
}

//-------左侧栏联系人鼠标离开-----------//
function contact_out(obj){
	"use strict";
	obj.src = "contact.png";
}

//-------设置按钮点击事件,显示或隐藏弹出窗口--------//
function set_click(){
	"use strict";
	if(set_pop.style.display === "none"){
		set_pop.style.display = "block";
	}
	else if(set_pop.style.display === "block"){
		set_pop.style.display = "none";
	}
}

//-------发送按钮鼠标进入-----------//
function send_over(obj){
	"use strict";
	obj.style.background = "#129611";
	obj.style.color = "#ffffff";
}

//-------发送按钮鼠标离开-----------//
function send_out(obj){
	"use strict";
	obj.style.background = "";
	obj.style.color = "";
}

//-------编辑区失去焦点-----------//
function edit_blur(obj){
	"use strict";
	document.getElementById("right_write").style.background = "#F5F5F5";
	obj.style.background = "#F5F5F5";
	document.getElementById("mbody").style.animationPlayState = "paused";
}

//-------编辑区获得焦点---------//
function edit_focus(obj){
	"use strict";
	document.getElementById("right_write").style.background = "#ffffff";
	obj.style.background = "#ffffff";
	document.getElementById("mbody").style.animationPlayState = "running";
}

//-------功能栏鼠标进入---------//
function img_opacity_over(obj,url){
	"use strict";
	obj.src = url;
}

//-------功能栏鼠标离开--------//
function img_opacity_out(obj,url){
	"use strict";
	obj.src = url;
}

//------窗口改变尺寸时刷新页面-------//
window.onresize = function(){
	"use strict";
	location.reload();	
};
