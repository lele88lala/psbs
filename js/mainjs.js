/**
 * Created by lele88lala on 16/3/1.
 */
$(document).ready(function(){
    $(".siteNavRClassHasTwo").each(function(){
        $(".siteNavRClassHasTwo").mouseover(function(){
            $("a[id="+this.getAttribute("name")+"]").addClass('siteNavAHover');
            $("div[name="+this.id+"]").show();
            $(".siteNavRClassHasTwo").mouseout(function(){
                $("a[id="+this.getAttribute("name")+"]").removeClass('siteNavAHover');

                $("div[name="+this.id+"]").hide();
            });
        });

    });
});