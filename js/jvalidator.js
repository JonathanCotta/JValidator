(function($) {
    $.fn.formValidation = function(){
        this.children(":input").each(function(){
            $("input[name="+this.name+"]").on("blur",function(){
                if(!this.checkValidity()){
                    alert(this.validationMessage);
                }
            });
        });
    }
})(jQuery);
