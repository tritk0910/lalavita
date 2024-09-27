import { FaInstagram, FaYoutube } from "react-icons/fa";

const contactInfo = {
  address: {
    street: "1234, Dosan-daero 1-gil",
    building: "lalavita Building",
  },
  partnership: {
    phone: "+82 10 12347 890",
    email: "lalavita@gmail.com",
  },
  social: {
    youtube: "Youtube",
    instagram: "Instagram",
  },
};

export default function Page7() {
  return (
    <div className="min-h-screen bg-[url('/img/main-bg-07.png')] bg-no-repeat bg-cover bg-center w-full flex flex-col text-center text-white object-contain relative">
      <div className="absolute left-[228px] top-[158px] flex flex-col text-start">
        <div className="text-[36.5px] leading-[47.5px]">
          <h2 className="text-[17.5px]">Address</h2>
          <p>{contactInfo.address.street}</p>
          <p>{contactInfo.address.building}</p>
        </div>
        <div className="mt-10 text-[36.5px] leading-[47.5px]">
          <h2 className="text-[17.5px]">Partnership</h2>
          <p>{contactInfo.partnership.phone}</p>
          <p>{contactInfo.partnership.email}</p>
        </div>
        <div className="mt-10 text-[36.5px] leading-[47.5px]">
          <h2 className="text-[17.5px]">Social</h2>
          <span className="flex gap-2 items-center underline">
            {contactInfo.social.youtube} <FaYoutube />
          </span>
          <span className="flex gap-2 items-center underline">
            {contactInfo.social.instagram} <FaInstagram />
          </span>
        </div>
      </div>
      <div className="absolute left-[228px] bottom-[80px]">
        <span>© 2022 Lalavita. All Rights Reserved</span>
      </div>
    </div>
  );
}
