// src/app/components/ContactStrip.tsx
import Image from "next/image";

const ContactStrip = () => {
  return (
    <div className="bg-red-800 text-white text-sm py-2 px-4 flex items-center justify-center gap-8">
      <a
        href="tel:+50766732524"
        className="hover:text-red-600 flex items-center gap-1"
      >
        <span>📞</span>
        <span>+507 6673-2524</span>
      </a>
      <a
        href="https://wa.me/50766732524"
        className="flex items-center gap-1 hover:text-green-400"
      >
        <Image
          src="/assets/whatsapp-icon.svg"
          alt="WhatsApp"
          width={20}
          height={20}
          className="w-5 h-5"
        />
        <span>WhatsApp</span>
      </a>
      <a
        href="https://www.instagram.com/proequipsa/"
        className="hidden sm:flex items-center gap-1 hover:text-orange-300"
      >
        <Image
          src="/assets/instagram-icon.svg"
          alt="Instagram"
          width={20}
          height={20}
          className="w-5 h-5"
        />
        <span>Instagram</span>
      </a>
    </div>
  );
};

export default ContactStrip;
