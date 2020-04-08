window.onload=function () {
				var obg=document.getElementById('bg');
				var oToNewMain=document.getElementById('ToNewMain');
				obg.onclick=function () {
					obg.style.display='none';
				};
				oToNewMain.onclick=function () {
					event.stopPropagation();
				};
				oToNewMain.onmousedown=function (ev) {
					var disX=0;
					var disY=0;
					var oEvent=ev||event;
					disX=oEvent.clientX-oToNewMain.offsetLeft;
					disY=oEvent.clientY-oToNewMain.offsetTop;
					var winWidth = document.documentElement.clientWidth;
					var winHeight = document.documentElement.clientHeight;
					document.onmousemove=function  (ev) {
						var oEvent=ev||event;
						var l=oEvent.clientX-disX+300;
						var t=oEvent.clientY-disY+250;
						if (l>300&&l<winWidth-300) {
							oToNewMain.style.left=l+'px';
						};
						if (t>250&&t<winHeight-250) {
							oToNewMain.style.top=t+'px';
						};
					};
				};
				document.onmouseup=function  () {
					document.onmousemove=null;
				};
			};
			function HideNew() {
				var obg=document.getElementById('bg');
				obg.style.display='none';
			};
			function showlogin () {
				var obg=document.getElementById('bg');
				var oLogin=document.getElementById('login');
				var oRregister=document.getElementById('register');
				oRregister.style.display='none';
				obg.style.display='block';
				oLogin.style.display='block';
			};
			function showregister () {
				var obg=document.getElementById('bg');
				var oLogin=document.getElementById('login');
				var oRregister=document.getElementById('register');
				oLogin.style.display='none';
				obg.style.display='block';
				oRregister.style.display='block';
				showCode ();
			};
			
			function showCode () {
				var s="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
				var x="";
				for(var i=0;i<4;i++){
					var index=Math.floor(Math.random()*62);
					x+=s.charAt(index);
				}
				document.getElementById('RegisterCode').innerText=x;
			}
			
			function isEmpty(obj){
    			if(typeof obj == "undefined" || obj == null || obj == ""){
        			return true;
    			}else{
      				return false;
   				}
			};
			function checkPhone(obj){ 
				var reg = /^1[0-9]{10}$/;
    			if(reg.test(obj)){ 
        			return true; 
    			}else{
					return false;
				}
			};
			function checkEmail (obj) {
				var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
				if(reg.test(obj)){
					return true;
				}else{
					return false;
				}
			};
			function islogin () {
				ouser=document.getElementsByName('login')[0].value;
				opassword=document.getElementsByName('login')[1].value;
				if(isEmpty(ouser)){
					alert('账号不能为空！');
				}
				if(!checkPhone(ouser)&&!checkEmail(ouser)){ 
        			alert("账号格式有误，请重填");
				}
				if(isEmpty(opassword)){
					alert('密码不能为空！');
				}
			};
			function isregister () {
				ocode1=document.getElementById('RegisterCode').innerText;
				ouser=document.getElementsByName('register')[0].value;
				ocode2=document.getElementsByName('register')[1].value;
				opassword1=document.getElementsByName('register')[2].value;
				opassword2=document.getElementsByName('register')[3].value;
				if(isEmpty(ouser)){
					alert('账号不能为空！');
					showCode ();
				}
				if(!checkPhone(ouser)&&!checkEmail(ouser)){ 
        			alert("账号格式有误，请重填！");
        			showCode ();
				}
				if(isEmpty(ocode2)){
					alert('验证码不能为空！');
					showCode ();
				}
				if(ocode1.toUpperCase()!=ocode2.toUpperCase()){
					alert('验证码错误，请重填！');
					showCode ();
				}
				if(isEmpty(opassword1)){
					alert('密码不能为空！');
					showCode ();
				}
				if(opassword1!=opassword2){
					alert('密码不一致！');
					showCode ();
				}
			};