$(document).ready(function()
{
    $('a').mouseover(function()
    {
        $(this).css("text-decoration","underline");
        $(this).css("color","inherit");
    });
    $('a').mouseout(function()
    {
        $(this).css("text-decoration","none");
    });
    (function($)
	{
        $.fn.clickToggle = function(func1, func2)
        {
            var funcs = [func1, func2];
            this.data('toggleclicked', 0);
            this.click(function()
            {
                var data = $(this).data();
                var tc = data.toggleclicked;
                $.proxy(funcs[tc], this)();
                data.toggleclicked = (tc + 1) % 2;
            });
            return this;
        };
    }(jQuery));
    $('#bars').children("button").clickToggle(function ()
    {
        $(this).parent().children(".dropdown-menu").addClass("addtoggle");
        console.log("click");
    },function ()
    {
        $(this).parent().children(".dropdown-menu").removeClass("addtoggle");
    });
});
function validate(){
    var field=document.getElementsByClassName("contact-field");
    var flag=true;
    for(let i=0;i<field.length;i++){
      if (field[i].value=="") {
        alert("Please fill out all the fields.");
        flag=false;
        break
      }
    }
    if (flag) {
      alert("Your response has been submitted.");
    }
}
function redirect(a)
{
    document.location.href=a;
}