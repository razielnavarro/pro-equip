const ContactStrip = () => {
  return (
    <div className="bg-red-800 text-white text-sm py-2 px-4 flex items-center justify-center gap-8">
      <span>📞 +507 6000-0000</span>
      <a
        href="https://wa.me/50760000000"
        className="flex items-center gap-1 hover:text-green-400"
      >
        <img
          src="/assets/whatsapp-icon.svg"
          alt="WhatsApp"
          className="w-5 h-5"
        />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};

export default ContactStrip;
