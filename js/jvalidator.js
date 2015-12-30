(function($) {
    $.fn.formValidation = function(){
        // getting all the inputs in the form
        this.children(":input").each(function(){
            //attach event in each input
            $("[name="+this.name+"]").on("blur",function(){
                if(!this.checkValidity()){
                    invalid(this);
                }
                else {
                    valid(this);
                }
            });
        });
        // actions if input is invalid
        var invalid = function(el){
            $(el).addClass('invalid');
            $(el).after(" "+el.validationMessage);
        };
        // actions if input is valid
        var valid = function(el){
            $(el).removeClass('invalid');
        }
    }
})(jQuery);
