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
        // what the you want to do in case of invalid input, feel free to add your code here.
        var invalid = function(el , val){
            $(el).addClass('invalid');
        };
        // what the you want to do in case of valid input, feel free to add your code here.
        var valid = function(el , val){
            $(el).removeClass('invalid');
        }
    }
})(jQuery);
