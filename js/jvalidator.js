(function($) {
    $.fn.formValidation = function(){
        var input =[];    
        this.children(":input").each(function(){
            input.push(this.name);
        });
        alert(input);
    }
})(jQuery);
