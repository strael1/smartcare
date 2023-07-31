const plugin = {
    init(){
        this.openCloseRegister();
        this.openCloseFilter();
        this.openCloseUserInfo();
    },
    
    // Open and close the filter section
    openCloseFilter(){
        $('.register__modal').hide();
        $('.filter__mobile-receptionist').hide();

        $('.filter__mobile .filter__actions .filter__one').on('click', () => {
            $('.register__modal-backdrop-green').fadeIn(600);
            $('.filter__mobile-receptionist').fadeIn(600);
        })

        $('.filter__mobile-receptionist .filter__close-bar .filter__close').on('click', () => {
            $('.register__modal-backdrop-green').fadeOut(600);
            $('.filter__mobile-receptionist').fadeOut(600);
        })
    },  

    // Open and close register receptionist
    openCloseRegister(){
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
    },

    openCloseUserInfo(){
        $('.info__user').hide();
        $('.register__modal-backdrop-green').hide();

        $('.table__open-link').on('click', () => {
            $('.register__modal-backdrop-green').fadeIn(600);
            $('.info__user').fadeIn(600);
        })

        $('.info__user-close-bar .info__user-close').on('click', () => {
            $('.register__modal-backdrop-green').fadeOut(600);
            $('.info__user').fadeOut(600);
        })
    }
}



plugin.init();