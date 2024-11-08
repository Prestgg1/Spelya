import Image from "next/image";

export default function Whatsapp() {
    return (

        <div className="fixed w-[72px] h-[72px] bottom-[0px] md:bottom-[40px] md:right-[40px] right-[0px] z-10">
            <div className="cpt-circle md:w-[250%] md:h-[250%] w-[150%] h-[150%] bg-transparent border-2 border-[#189d0e] origin-center md:top-[-75%] md:right-[-75%] right-[0%] top-[-50%]"></div>
            <div className="cpt-circle-fill bg-[#189d0e] border-transparent w-[100%] md:w-[155%] h-[100%] md:h-[155%] right-[25%] top-[-25%]  border-2  md:right-[-25%] md:top-[-28%]"></div>
            <a href="https://api.whatsapp.com/send?phone=905385934759&text=Merhaba!" id="WhatsAppBtnDesktop" target="_blank"
                className="main-button relative right-[50%] top-[1%] md:right-[5%] float-right w-9 h-9  md:w-[64px] md:h-[64px] bg-center bg-no-repeat cursor-pointer rounded-full text-white text-center leading-[58px]" lang="en">
                <Image className="w-[100%]" src="https://nhtagent.com/nht-upload/assets/javascripts/WhatsApp/WhatsApp.png"  width="64" height='65' alt="Whatsapp"/>
            </a>
        </div>
    )
}