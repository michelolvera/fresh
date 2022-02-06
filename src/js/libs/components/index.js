import { initNavbar } from './navbar/navbar';
import { initSidebar } from './sidebar/sidebar';
import { initBackToTop } from './backtotop/backtotop';
import axios from 'axios'
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min';

window.initNavbar = initNavbar;
window.initSidebar = initSidebar;
window.initBackToTop = initBackToTop;

window.initForm = function (){
    return {
        sendedMail: false,
        alertsHidden: true,
        async sendMail () {
            const url = "https://www.crececonsultoria.com/.netlify/functions/mailsender"
            let formData = new FormData(document.getElementById("contact-form"));
            let requestObject = {};
            for (let pair of formData.entries()) {
                requestObject[pair[0]] = pair[1];
            }

            let request = JSON.stringify(requestObject);
            console.log("Mail to send: %s", request);
            try {
                let response = await axios.post(url, request);
                if (response.status === 200) {
                    this.sendedMail = true;
                    console.log("Sended mail");
                } else {
                    this.sendedMail = false;
                    console.log("Error mail");
                }
            }catch (e){
                console.log(e.message)
            }
            this.alertsHidden = false;
        },
    }
}

// Initialize all elements with carousel class.
window.carousels = bulmaCarousel.attach('.carousel');