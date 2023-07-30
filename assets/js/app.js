const plugin = {
    init(){
        this.openClose();
    },
    
    // Open and close register receptionist
    openClose(){
        $('.register__modal').hide();
        $('.register__modal-backdrop-green').hide();

        //  Open the receptionist register area
        $('.contents__mobile-register .contents__button').on('click', () => {
            $('.register__modal').fadeIn(600);
            $('.register__modal-backdrop-green').fadeIn(600);                
        })

        // Close the receptionist register area
        $('.register__modal .register__modal-title .close__bar').on('click', () => {
            $('.register__modal').fadeOut(600);
            $('.register__modal-backdrop-green').fadeOut(600);
        })
    }
}



plugin.init();