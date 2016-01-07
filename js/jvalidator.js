(function($) {
    // method to attach validation event in all inputs on form
    $.fn.inputsValidation = function(){
        this.children(":input").each(function(){
            $("[name='"+this.name+"']").on("blur",function(){
                this.checkValidity() ? action.onValid(this) : action.onInvalid(this);
            });
        });
    }
    //method that when triggered will verify all input in a form
    $.fn.formValidation = function(){
        var valid = true;
        this.children(":input").each(function(){
            if (!this.checkValidity()) {
                valid = action.onInvalid(this);
            }
        });
        return valid;
    }
    // object containing private functions used in the plugin methods, feel free to add or change this functions
    var action = {
        // action taken when a input is invalid.
        onInvalid: function(el){
            var tooltip = el.nextElementSibling;
            tooltip.style.visibility = "visible";
            tooltip.innerHTML = el.validationMessage;
            el.focus();
            $(el).addClass('invalid');
            return false;
        },
        // action taken when a input is valid.
        onValid:function(el){
            var tooltip = el.nextElementSibling;
            tooltip.style.visibility = "hidden";
            $(el).removeClass('invalid');
        }
    }
})(jQuery);
