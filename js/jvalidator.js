(function($) {
    $.fn.formValidation = function(){
        // getting all the inputs in the form
        this.children(":input").each(function(){
            //attach event in each input
            $("[name="+this.name+"]").on("blur",function(){
                this.checkValidity() ? valid(this) : invalid(this);
            });
        });
        // what the you want to do in case of invalid input, feel free to add your code here.
        var invalid = function(el){
            $(el).addClass('invalid');
        };
        // what the you want to do in case of valid input, feel free to add your code here.
        var valid = function(el){
            $(el).removeClass('invalid');
        }
    }
})(jQuery);
