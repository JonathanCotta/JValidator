(function($) {
    $.fn.formValidation = function(){
        // getting all the inputs in the form
        this.children(":input").each(function(){
            $("[name="+this.name+"]").on("blur",function(){
                if(!this.checkValidity()){ invalid(this); }
            });
        });
        // actions if inputs is invalid
        var invalid = function(el){
            $(el).css({"border":"solid 0.08em red","box-shadow":"red 0px 0px 10px"});
        };
    }
})(jQuery);
