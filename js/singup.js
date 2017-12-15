// JavaScript Document
var oForm=document.getElementById("form1");
var oName=oForm.username;
var oPass=oForm.pass;
var oAgPass=oForm.agpass;
var oEmail=oForm.email;
var oTel=oForm.tel;
var oArea=oForm.area;
var oSex=oForm.sex;
var oHobby=document.getElementById("like").getElementsByTagName("input");
oForm.onsubmit=function(){

    if(oName.value=="")
    {
        alert("用户名不能为空！");
        return false;
    }
    if(oPass.value==""){
        alert("密码不能为空！");
        return false;
    }
    if(oAgPass.value==""){
        alert("确认密码不能为空！");
        return false;
    }
    if(oEmail.value==""){
        alert("邮箱不能为空！");
        return false;
    }
    if(oTel.value==""){
        alert("电话不能为空！");
        return false;
    }
    if(oArea.value==""){
        alert("地区不能为空！");
        return false;
    }
    if(oSex.value==""){
        alert("性别不能为空！");
        return false;
    }
    if(oHobby.value==""){
        alert("爱好不能为空！");
        return false;
    }
}














